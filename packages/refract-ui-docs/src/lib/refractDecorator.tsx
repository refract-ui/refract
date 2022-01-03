import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@refract-ui/react';
import genTheme from '@refract-ui/core/src/theme';

export type RefractDecoratorTheme = {
  theme: Theme;
  name: string;
};

const defaultRefractTheme: RefractDecoratorTheme = {
  theme: genTheme(),
  name: 'refract'
};

function refractDecorator(
  Story: func,
  c: Record<string, unknown>,
  themes?: RefractDecoratorTheme[] = []
): React.FC {
  const decoratorThemes = [defaultRefractTheme, ...themes];
  const { theme } =
    themes.length > 0 && c.globals.theme
      ? decoratorThemes.find(({ name }) => name === c.globals.theme)
      : decoratorThemes[0];

  return (
    <ThemeProvider theme={theme}>
      <Story {...c} />
    </ThemeProvider>
  );
}

export function refractGlobalTypes(
  themes?: RefractDecoratorTheme[] = [],
  defaultValue? = 'refract',
  icon? = 'photo'
): Record<string, unknown> {
  const decoratorThemes = [defaultRefractTheme, ...themes];
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
