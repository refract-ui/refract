import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';
import * as MDXContent from './themeColorShades.mdx';

const { themeColorShades: defaultThemeColors } = theme();

const { default: page } = MDXContent;

export default {
  title: 'core/theme/themeColorShades',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export function Template(): React.ReactElement {
  const [args, updateArgs, resetArgs] = useArgs();
  const { themeColorShades: currentThemeValues } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValues);
    return () => {
      resetArgs();
    };
  }, [currentThemeValues]);

  const { themeColorShades } = theme({
    themeColorShades: {
      ...currentThemeValues,
      ...args
    }
  });
  return <ColorPalette colors={themeColorShades} />;
}
Template.args = defaultThemeColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultThemeColors).map(k => [k, { control: { type: 'color' } }])
);

export function DefaultTemplate(): React.ReactElement {
  const { themeColorShades: currentThemeValues } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValues} />;
}

export const FunctionTemplate = (): React.ReactElement => {
  const { themeColorShades } = theme({
    themeColorShades: ({ defaults }) => ({
      ...defaults,
      primary100: '#fefefe'
    })
  });
  return <ColorPalette colors={themeColorShades} />;
};

export const StaticTemplate = (): React.ReactElement => {
  const { themeColorShades } = theme({
    themeColorShades: {
      primary100: '#fefefe'
    }
  });
  return <ColorPalette colors={themeColorShades} />;
};

export const DeriveTemplate = (): React.ReactElement => {
  const { themeColorShades } = theme({
    themeColors: {
      primary: 'purple'
    }
  });
  return <ColorPalette colors={themeColorShades} />;
};
