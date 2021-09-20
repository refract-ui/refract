import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';
import * as MDXContent from './subtleColors.mdx';

const { subtleColors: defaultSubtleColors } = theme();

const { default: page } = MDXContent;

export default {
  title: 'core/theme/subtleColors',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export function Template(): React.ReactElement {
  const [args, updateArgs, resetArgs] = useArgs();
  const { subtleColors: currentThemeValues } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValues);
    return () => {
      resetArgs();
    };
  }, [currentThemeValues]);

  const { subtleColors } = theme({
    subtleColors: {
      ...currentThemeValues,
      ...args
    }
  });
  return <ColorPalette colors={subtleColors} />;
}
Template.args = defaultSubtleColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultSubtleColors).map(k => [k, { control: { type: 'color' } }])
);

export function DefaultTemplate(): React.ReactElement {
  const { subtleColors: currentThemeValues } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValues} />;
}

export const FunctionTemplate = (): React.ReactElement => {
  const { subtleColors } = theme({
    subtleColors: ({ defaults }) => ({
      ...defaults,
      primary: 'purple'
    })
  });
  return <ColorPalette colors={subtleColors} />;
};

export const StaticTemplate = (): React.ReactElement => {
  const { subtleColors } = theme({
    subtleColors: {
      primary: 'purple'
    }
  });
  return <ColorPalette colors={subtleColors} />;
};

export const DeriveTemplate = (): React.ReactElement => {
  const { subtleColors } = theme({
    themeColors: {
      primary: 'purple'
    }
  });
  return <ColorPalette colors={subtleColors} />;
};
