import * as React from 'react';
import { StoryContext } from '@storybook/addons';
// import { ComponentStory, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Theme, theme as genTheme } from '@refract-ui/core';

export type RefractDecoratorTheme = {
  theme: Theme;
  name: string;
};

export const defaultRefractTheme: RefractDecoratorTheme = {
  theme: genTheme(),
  name: 'refract'
};

export function withRefract(Story: any, c: StoryContext): any {
  const themes = c.parameters?.refract?.themes || [];

  const decoratorThemes = [defaultRefractTheme, ...themes];
  const { theme } =
    themes.length > 0 && c.globals.refractTheme
      ? decoratorThemes.find(({ name }) => name === c.globals.refractTheme)
      : decoratorThemes[0];

  return (
    <ThemeProvider theme={theme}>
      <Story {...c} />
    </ThemeProvider>
  );
}
