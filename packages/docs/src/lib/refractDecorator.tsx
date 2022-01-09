import React from 'react';
import { Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@refract-ui/core';
import genTheme from '@refract-ui/core/src/theme';

export type RefractDecoratorTheme = {
  theme: Theme;
  name: string;
};

export const defaultRefractTheme: RefractDecoratorTheme = {
  theme: genTheme(),
  name: 'refract'
};

const refractDecorator: React.FC = (
  Story: Story,
  c: Record<string, unknown>,
  themes?: RefractDecoratorTheme[] = [defaultRefractTheme]
) => {
  const decoratorThemes = [...themes];
  const { theme } =
    themes.length > 0 && c.globals.theme
      ? decoratorThemes.find(({ name }) => name === c.globals.theme)
      : decoratorThemes[0];

  return (
    <ThemeProvider theme={theme}>
      <Story {...c} />
    </ThemeProvider>
  );
};

export function refractGlobalTypes(
  themes?: RefractDecoratorTheme[] = [defaultRefractTheme],
  defaultValue? = 'refract',
  icon? = 'photo'
): Record<string, unknown> {
  const decoratorThemes = [...themes];
  const theme = {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue,
    toolbar: {
      icon,
      items: decoratorThemes.map(({ name }) => name)
    }
  };

  return theme;
}

export default refractDecorator;
