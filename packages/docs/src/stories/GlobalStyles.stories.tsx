import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Theme, GlobalStyles } from '@refract-ui/core';
import StyleGuide from '../components/StyleGuide';

export default {
  title: 'docs/Global Typography Styles',
  component: StyleGuide
};

export const DefaultStyles = (): React.ReactElement => {
  const theme: Theme = useContext(ThemeContext);

  return <StyleGuide theme={theme} />;
};

export const Template = (): React.ReactElement => {
  const theme: Theme = useContext(ThemeContext);
  return (
    <StyleGuide theme={theme}>
      <GlobalStyles />
    </StyleGuide>
  );
};

export const MDOnlyTomato = (): React.ReactElement => {
  const theme: Theme = useContext(ThemeContext);
  return (
    <StyleGuide theme={theme}>
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
