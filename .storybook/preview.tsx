import React from 'react';
import { ThemeProvider } from 'styled-components';
import genTheme from '@refract-ui/core/src/theme';
import { createGlobalStyle } from 'styled-components';

const DarkGlobals = createGlobalStyle`
  h1 {
    color: red;
  }

  h2 {
    color: blue;
  }
`;

const darkTheme = {
  name: 'dark',
  theme: genTheme({
    themeColors: ({ defaults }) => ({
      ...defaults,
      primary: 'tomato'
    })
  }),
  ThemeStyle: DarkGlobals
}

export const parameters = {
  refract: {
    themes: [
      darkTheme
    ]
  }
}