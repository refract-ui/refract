import React from 'react';
import { ThemeProvider } from 'styled-components';
import genTheme from '@refract-ui/core/src/theme';

const darkTheme = {
  name: 'dark',
  theme: genTheme({
    themeColors: ({ defaults }) => ({
      ...defaults,
      primary: 'tomato'
    })
  })
}

export const parameters = {
  refract: {
    themes: [
      darkTheme
    ]
  }
}