import React from 'react';
import { storiesOf } from '@storybook/react';
import { theme, GlobalStyles } from '@refract-ui/core';
import StyleGuide from '../components/StyleGuide';

console.log(
  'theme():',
  theme({
    globalStyles: {
      xs: {
        heading: {
          mb: '0rem'
        }
      }
    }
  })
);

storiesOf('components/GlobalStyles', module)
  .add('default', () => (
    <StyleGuide
      theme={theme({
        globalStyles: {
          xs: {
            heading: {
              mb: '0rem'
            }
          }
        }
      })}
    >
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
