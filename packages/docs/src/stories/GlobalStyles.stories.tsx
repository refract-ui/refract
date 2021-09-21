import React from 'react';
import { theme, GlobalStyles } from '@refract-ui/core';
import StyleGuide from '../components/StyleGuide';

export default {
  title: 'docs/Global Typography Styles',
  component: StyleGuide
};

export const Template = (): React.ReactElement => {
  return (
    <StyleGuide theme={theme()}>
      <GlobalStyles />
    </StyleGuide>
  );
};

export const MDOnlyTomato = (): React.ReactElement => {
  return (
    <StyleGuide theme={theme()}>
      <GlobalStyles
        mdOnly={{
          h1: props => ({
            ...props.h1,
            color: 'tomato'
          })
        }}
      />
    </StyleGuide>
  );
};
