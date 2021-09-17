import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';
import * as MDXContent from './colors.mdx';

const { colors: defaultColors } = theme();

const { default: page } = MDXContent;

export default {
  title: 'core/theme/colors',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export const Template = (): React.ReactElement => {
  const [args, updateArgs, resetArgs] = useArgs();
  const { colors: currentThemeValue } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValue);
    return () => {
      resetArgs();
    };
  }, [currentThemeValue]);

  const { colors } = theme({
    colors: {
      ...currentThemeValue,
      ...args
    }
  });
  return <ColorPalette colors={colors} />;
};
Template.args = defaultColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultColors).map(k => [k, { control: { type: 'color' } }])
);

export const DefaultTemplate = (): React.ReactElement => {
  const { colors: currentThemeValue } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValue} />;
};

export const FunctionTemplate = (): React.ReactElement => {
  const { colors } = theme({
    colors: ({ defaults }) => ({
      ...defaults,
      white: '#fefefe'
    })
  });
  return <ColorPalette colors={colors} />;
};

export const StaticTemplate = (): React.ReactElement => {
  const { colors } = theme({
    colors: {
      white: '#fefefe'
    }
  });
  return <ColorPalette colors={colors} />;
};
