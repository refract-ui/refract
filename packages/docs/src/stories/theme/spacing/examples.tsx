import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Spacing from 'components/Spacing';

const { spacing: defaultSpacing } = theme();

export const Template: Story = () => {
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
};
Template.args = defaultSpacing;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultSpacing).map(k => [k, { control: { type: 'text' } }])
);

export const DefaultTemplate: React.FC = () => {
  const { spacing: currentThemeValue } = useContext(ThemeContext);
  return <Spacing spacing={currentThemeValue} />;
};

export const FunctionTemplate: React.FC = () => {
  const { spacing } = theme({
    spacing: ({ defaults }) => ({
      ...defaults,
      '3': 1.25,
      '5': 6
    })
  });
  return <Spacing spacing={spacing} />;
};

export const StaticTemplate: React.FC = () => {
  const { spacing } = theme({
    spacing: {
      '3': 1.25,
      '5': 6
    }
  });
  return <Spacing spacing={spacing} />;
};
