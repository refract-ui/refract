import * as React from 'react';
import { StoryFn, StoryContext } from '@storybook/addons';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@refract-ui/core';
import genTheme from '@refract-ui/core/src/theme';

export type RefractDecoratorTheme = {
  theme: Theme;
  name: string;
};

const defaultRefractTheme: RefractDecoratorTheme = {
  theme: genTheme(),
  name: 'refract'
};

export function withRefract(
  Story: StoryFn<JSX.Element>,
  c: StoryContext
): React.FC {
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
