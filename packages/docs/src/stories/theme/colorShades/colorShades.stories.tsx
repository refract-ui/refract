import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';
import * as MDXContent from './colorShades.mdx';

const { colorShades: defaultColorShades } = theme();

const { default: page } = MDXContent;

export default {
  title: 'core/theme/colorShades',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export const Template = (): React.ReactElement => {
  const [args, updateArgs, resetArgs] = useArgs();
  const { colorShades: currentThemeValue } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValue);
    return () => {
      resetArgs();
    };
  }, [currentThemeValue]);

  const { colorShades } = theme({
    colorShades: {
      ...currentThemeValue,
      ...args
    }
  });

  return <ColorPalette colors={colorShades} />;
};
Template.args = defaultColorShades;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultColorShades).map(k => [k, { control: { type: 'color' } }])
);

export const DefaultTemplate = (): React.ReactElement => {
  const { colorShades: currentThemeValue } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValue} />;
};

export const FunctionTemplate = (): React.ReactElement => {
  const { colorShades } = theme({
    colorShades: ({ defaults }) => ({
      ...defaults,
      gray100: '#fefefe'
    })
  });
  return <ColorPalette colors={colorShades} />;
};

export const StaticTemplate = (): React.ReactElement => {
  const { colorShades } = theme({
    colorShades: {
      gray100: '#fefefe'
    }
  });
  return <ColorPalette colors={colorShades} />;
};

export const DeriveTemplate = (): React.ReactElement => {
  const { colorShades } = theme({
    colors: {
      red: 'tomato'
    }
  });
  return <ColorPalette colors={colorShades} />;
};
