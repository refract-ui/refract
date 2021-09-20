import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import Spacing from '../../../components/Spacing';
import * as MDXContent from './spacing.mdx';

const { spacing: defaultSpacing } = theme();

const { default: page } = MDXContent;

export default {
  title: 'core/theme/spacing',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export function Template(): React.ReactElement {
  const [args, updateArgs, resetArgs] = useArgs();
  const { spacing: currentThemeValue } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValue);
    return () => {
      resetArgs();
    };
  }, [currentThemeValue]);

  const { spacing } = theme({
    spacing: {
      ...currentThemeValue,
      ...args
    }
  });
  console.log({ spacing });
  return <Spacing spacing={spacing} />;
}
Template.args = defaultSpacing;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultSpacing).map(k => [k, { control: { type: 'text' } }])
);

export function DefaultTemplate(): React.ReactElement {
  const { spacing: currentThemeValue } = useContext(ThemeContext);
  return <Spacing spacing={currentThemeValue} />;
}

export function FunctionTemplate(): React.ReactElement {
  const { spacing } = theme({
    spacing: ({ defaults }) => ({
      ...defaults,
      3: 1.25
    })
  });
  return <Spacing spacing={spacing} />;
}

export function StaticTemplate(): React.ReactElement {
  const { spacing } = theme({
    spacing: {
      3: 1.25
    }
  });
  return <Spacing spacing={spacing} />;
}
