import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';

const { colors: defaultColors } = theme();

const Template: Story = () => {
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

export const DefaultTemplate: React.FC = () => {
  const { colors: currentThemeValue } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValue} />;
};

export const FunctionTemplate: React.FC = () => {
  const { colors } = theme({
    colors: ({ defaults }) => ({
      ...defaults,
      white: '#fefefe',
      purple: 'purple'
    })
  });
  return <ColorPalette colors={colors} />;
};

export const StaticTemplate: React.FC = () => {
  const { colors } = theme({
    colors: {
      white: '#fefefe',
      purple: 'purple'
    }
  });
  return <ColorPalette colors={colors} />;
};
