import React from 'react';
import { ThemeProvider } from 'styled-components';
import genTheme from '../packages/refract-ui-core/src/theme';

const darkTheme = {
  name: 'dark',
  theme: genTheme({
    container: ({ defaults, themeColors }) => ({
      ...defaults,
      bg: themeColors.dark,
      textColor: themeColors.light
    })
  })
};

export const parameters = {
  refract: {
    themes: [darkTheme]
  }
};
