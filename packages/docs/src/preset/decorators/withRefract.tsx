import * as React from 'react';
import { StoryContext } from '@storybook/addons';
import { ThemeProvider } from 'styled-components';
import { Theme, theme as genTheme, GlobalStyles } from '@refract-ui/core';

export type RefractDecoratorTheme = {
  theme: Theme;
  name: string;
  ThemeStyle?: React.FC<any>;
};

export const defaultRefractTheme: RefractDecoratorTheme = {
  theme: genTheme(),
  name: 'refract'
};

export function withRefract(Story: any, c: StoryContext): any {
  const themes = c.parameters?.refract?.themes || [];

  const decoratorThemes = [defaultRefractTheme, ...themes];
  const { theme, ThemeStyle } =
    themes.length > 0 && c.globals.refractTheme
      ? decoratorThemes.find(({ name }) => name === c.globals.refractTheme)
      : decoratorThemes[0];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {ThemeStyle && <ThemeStyle />}
      <Story {...c} />
    </ThemeProvider>
  );
}
