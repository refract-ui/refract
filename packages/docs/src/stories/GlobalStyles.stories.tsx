import React from 'react';
import { storiesOf } from '@storybook/react';
import { theme, GlobalStyles } from '@refract-ui/core';
import StyleGuide from '../components/StyleGuide';

console.log('theme():', theme());

storiesOf('components/GlobalStyles', module)
  .add('default', () => (
    <StyleGuide theme={theme()}>
      <GlobalStyles />
    </StyleGuide>
  ))
  .add('overrides', () => (
    <StyleGuide theme={theme()}>
      <GlobalStyles
        mdOnly={{
          h1: props => ({
            ...props.h1,
            color: props.theme.colorShades.red300
          })
        }}
      />
    </StyleGuide>
  ));

export default {
  title: 'components/GlobalStyles',
  component: GlobalStyles
};
