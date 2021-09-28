import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Theme, GlobalStyles } from '@refract-ui/core';
import { useStoryContext } from '@storybook/client-api';
import { StoryContext } from '@storybook/addons';
import StyleGuide from '../components/StyleGuide';

export default {
  title: 'docs/Global Typography Styles',
  component: StyleGuide
};

export const DefaultStyles = (): React.ReactElement => {
  const theme: Theme = useContext(ThemeContext);
  const storyContext: StoryContext = useStoryContext();

  const themes = storyContext.parameters?.refract?.themes || [];
  const activeTheme =
    themes.length > 0 && storyContext.globals.refractTheme
      ? themes.find(
          ({ name }: { name: string }) =>
            name === storyContext.globals.refractTheme
        )
      : null;

  const ThemeStyle = activeTheme?.ThemeStyle || null;

  return <StyleGuide theme={theme}>{ThemeStyle && <ThemeStyle />}</StyleGuide>;
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
