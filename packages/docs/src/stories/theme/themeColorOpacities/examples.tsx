import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import ColorPalette from 'components/ColorPalette';

const { themeColorOpacities: defaultThemeColors } = theme();

export const Template: Story = () => {
  const [args, updateArgs, resetArgs] = useArgs();
  const { themeColorOpacities: currentThemeValues } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValues);
    return () => {
      resetArgs();
    };
  }, [currentThemeValues]);

  const { themeColorOpacities } = theme({
    themeColorOpacities: {
      ...currentThemeValues,
      ...args
    }
  });
  return <ColorPalette colors={themeColorOpacities} />;
};
Template.args = defaultThemeColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultThemeColors).map(k => [k, { control: { type: 'color' } }])
);

export const DefaultTemplate: React.FC = () => {
  const { themeColorOpacities: currentThemeValues } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValues} />;
};

export const FunctionTemplate: React.FC = () => {
  const { themeColorOpacities } = theme({
    themeColorOpacities: ({ defaults }) => ({
      ...defaults,
      light50: '#fefefe',
      primary50: 'purple'
    })
  });

  console.log({ themeColorOpacities });
  return <ColorPalette colors={themeColorOpacities} />;
};

export const StaticTemplate: React.FC = () => {
  const { themeColorOpacities } = theme({
    themeColorOpacities: {
      light50: '#fefefe',
      primary50: 'purple'
    }
  });
  return <ColorPalette colors={themeColorOpacities} />;
};

export const DeriveTemplate: React.FC = () => {
  const { themeColorOpacities } = theme({
    themeColors: {
      primary: 'purple'
    }
  });
  return <ColorPalette colors={themeColorOpacities} />;
};
