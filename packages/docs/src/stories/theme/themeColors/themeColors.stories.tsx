import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';
import * as MDXContent from './themeColors.mdx';

const { themeColors: defaultThemeColors } = theme();

const { default: page } = MDXContent;

export default {
  title: 'core/theme/themeColors',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export function Template(): React.ReactElement {
  const [args, updateArgs, resetArgs] = useArgs();
  const { themeColors: currentThemeValues } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValues);
    return () => {
      resetArgs();
    };
  }, [currentThemeValues]);

  const { themeColors } = theme({
    themeColors: {
      ...currentThemeValues,
      ...args
    }
  });
  return <ColorPalette colors={themeColors} />;
}
Template.args = defaultThemeColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultThemeColors).map(k => [k, { control: { type: 'color' } }])
);

export function DefaultTemplate(): React.ReactElement {
  const { themeColors: currentThemeValues } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValues} />;
}

export const FunctionTemplate = (): React.ReactElement => {
  const { themeColors } = theme({
    themeColors: ({ defaults }) => ({
      ...defaults,
      primary: 'purple'
    })
  });
  return <ColorPalette colors={themeColors} />;
};

export const StaticTemplate = (): React.ReactElement => {
  const { themeColors } = theme({
    themeColors: {
      primary: 'purple'
    }
  });
  return <ColorPalette colors={themeColors} />;
};
