import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';

const { themeColorShades: defaultThemeColors } = theme();

const Template: Story = () => {
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
};
Template.args = defaultThemeColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultThemeColors).map(k => [k, { control: { type: 'color' } }])
);

export const DefaultTemplate: React.FC = () => {
  const { themeColorShades: currentThemeValues } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValues} />;
};

export const FunctionTemplate: React.FC = () => {
  const { themeColorShades } = theme({
    themeColorShades: ({ defaults }) => ({
      ...defaults,
      white: '#fefefe',
      primary: 'purple'
    })
  });

  return <ColorPalette colors={themeColorShades} />;
};

export const StaticTemplate: React.FC = () => {
  const { themeColorShades } = theme({
    themeColorShades: {
      light500: '#fefefe',
      primary500: 'purple'
    }
  });
  return <ColorPalette colors={themeColorShades} />;
};

export const DeriveTemplate: React.FC = () => {
  const { themeColorShades } = theme({
    themeColorShades: {
      primary500: 'purple'
    }
  });
  return <ColorPalette colors={themeColorShades} />;
};
