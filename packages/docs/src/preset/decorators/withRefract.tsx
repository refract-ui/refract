import * as React from 'react';
import { StoryContext } from '@storybook/addons';
// import { ComponentStory, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Theme, theme as genTheme, GlobalStyles } from '@refract-ui/core';
import { ThemeComponent } from '@refract-ui/core/src/theme';

export type RefractDecoratorTheme = {
  theme: Theme;
  name: string;
  // export the GlobalStyles type from refract
  ThemeStyle?: React.FC<ThemeComponent>;
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
