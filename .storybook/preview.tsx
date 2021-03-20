import React from 'react';
import { ThemeProvider } from 'styled-components';
import genTheme from '../packages/core/src/theme';
import { addDecorator } from '@storybook/react';

//mock creation of themes for now
const defaultTheme: any = Object.assign({}, genTheme(), {
  name: 'light',
  class: 'light-theme',
  color: '#ffffff'
});
const secondaryTheme: any = Object.assign({}, defaultTheme, {
  name: 'alt',
  class: 'alt-theme',
  color: '#bbffff'
});

for (const key in secondaryTheme) {
  typeof secondaryTheme[key] == 'string' &&
  (secondaryTheme[key].startsWith('#') ||
    secondaryTheme[key].startsWith('rgb('))
    ? (secondaryTheme[key] = '#bbffff')
    : null;
}
const themes = [defaultTheme, secondaryTheme];

export const decorators = [
  (Story: any, c: any) => {
    var selectedTheme = themes.find(e => e.name == c.globals.theme);
    return (
      <ThemeProvider theme={selectedTheme}>
        <Story {...c} />
      </ThemeProvider>
    );
  }
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'photo',
      items: themes.map(e => e.name)
    }
  }
};
