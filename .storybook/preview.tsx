import React from 'react';
import { ThemeProvider } from 'styled-components';
import genTheme from '@refract-ui/core/src/theme';
import refractDecorator, { refractGlobalTypes } from '@refract-ui/docs/src/lib/refractDecorator';

const darkTheme = {
  name: 'dark',
  theme: genTheme({
    themeColors: ({ defaults }) => ({
      ...defaults,
      primary: 'tomato'
    })
  })
}

export const decorators = [
  (Story, c) => refractDecorator(Story, c, [darkTheme])
];

export const globalTypes = {
  theme: refractGlobalTypes([darkTheme], 'dark')
};

export const parameters = {
  options: {
    storySort: {
      order: [
        'core',
        [
          'theme',
          [
            'intro',
            'globalStyles',
            'colors',
            'themeColors',
            'subtleColors',
            'darkColors',
            'colorShades',
            'themeColorShades',
            'spacing',
            'borders',
            'breakpoints'
          ]
        ]
      ]
    }
  }
}