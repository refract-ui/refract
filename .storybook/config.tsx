import React from 'react';
import { addDecorator, configure, DecoratorFn } from '@storybook/react';
// import { withThemesProvider } from 'themeprovider-storybook';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import genTheme from '../packages/core/src/theme';

const defaultTheme = genTheme();
// const altTheme = genTheme({
// themeColors: ({ colors, defaults }) => ({ ...defaults, primary: colors.cyan })
// });

/*
const themes = [
  {
    name: 'default',
    ...defaultTheme
  },
  {
    name: 'secondary',
    ...altTheme
  }
];

addDecorator(withThemesProvider(themes));
*/

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

  body {
    font-family: 'Work Sans', sans-serif;
    font-size: 12px;
    color: black;
  }

`

const ThemeDecorator = ((StoryFn, c) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <StoryFn {...c} />
  </ThemeProvider>
)) as DecoratorFn;

addDecorator(ThemeDecorator);

const req = require.context('../packages', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
