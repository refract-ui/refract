import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';
import * as MDXContent from './darkColors.mdx';

const { darkColors: defaultDarkColors } = theme();

const { default: page } = MDXContent;

export default {
  title: 'core/theme/darkColors',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export const Template = (): React.ReactElement => {
  const [args, updateArgs, resetArgs] = useArgs();
  const { darkColors: currentThemeValue } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValue);
    return () => {
      resetArgs();
    };
  }, [currentThemeValue]);

  const { darkColors } = theme({
    darkColors: {
      ...currentThemeValue,
      ...args
    }
  });
  return <ColorPalette colors={darkColors} />;
};
Template.args = defaultDarkColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultDarkColors).map(k => [k, { control: { type: 'color' } }])
);

export const DefaultTemplate = (): React.ReactElement => {
  const { darkColors: currentThemeValue } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValue} />;
};

export const FunctionTemplate = (): React.ReactElement => {
  const { darkColors } = theme({
    darkColors: ({ defaults }) => ({
      ...defaults,
      primary: '#fefefe'
    })
  });
  return <ColorPalette colors={darkColors} />;
};

export const StaticTemplate = (): React.ReactElement => {
  const { darkColors } = theme({
    darkColors: {
      primary: '#fefefe'
    }
  });
  return <ColorPalette colors={darkColors} />;
};

export const DeriveTemplate = (): React.ReactElement => {
  const { darkColors } = theme({
    themeColors: {
      primary: 'purple'
    }
  });
  return <ColorPalette colors={darkColors} />;
};
