import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import Spacing from '../../../components/Spacing';
import page from './spacing.mdx';

const { spacing: defaultSpacing } = theme();

export default {
  title: 'core/theme/spacing',
  parameters: {
    docs: {
      page
    }
  }
};

export function Template(): React.FC {
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
  return <Spacing spacing={spacing} />;
}
Template.args = defaultSpacing;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultSpacing).map(k => [k, { control: { type: 'text' } }])
);

export function DefaultTemplate(): React.FC {
  const { spacing: currentThemeValue } = useContext(ThemeContext);
  return <Spacing spacing={currentThemeValue} />;
}

export function FunctionTemplate(): React.FC {
  const { spacing } = theme({
    spacing: ({ defaults }) => ({
      ...defaults,
      3: '1.25rem',
      6: '6rem'
    })
  });
  return <Spacing spacing={spacing} />;
}

export function StaticTemplate(): React.FC {
  const { spacing } = theme({
    spacing: {
      3: '1.25rem',
      6: '6rem'
    }
  });
  return <Spacing spacing={spacing} />;
}
