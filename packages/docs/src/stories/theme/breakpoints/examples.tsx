import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import BreakpointComponent from 'components/Breakpoints';

const { breakpoints: defaultBreakpoints } = theme();

export const Template: Story = () => {
  const [args, updateArgs, resetArgs] = useArgs();
  const { breakpoints: currentThemeValue } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValue);
    return () => {
      resetArgs();
    };
  }, [currentThemeValue]);

  const { breakpoints } = theme({
    breakpoints: {
      ...currentThemeValue,
      ...args
    }
  });
  return <BreakpointComponent breakpoints={breakpoints} />;
};

Template.args = defaultBreakpoints;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultBreakpoints).map(k => [k, { control: { type: 'number' } }])
);

export const DefaultTemplate: React.FC = () => {
  const { breakpoints: currentThemeValue } = useContext(ThemeContext);
  return <BreakpointComponent breakpoints={currentThemeValue} />;
};

export const FunctionTemplate: React.FC = () => {
  const { breakpoints } = theme({
    breakpoints: ({ defaults }) => ({
      ...defaults,
      md: 600
    })
  });
  return <BreakpointComponent breakpoints={breakpoints} />;
};

export const StaticTemplate: React.FC = () => {
  const { breakpoints } = theme({
    breakpoints: {
      md: 600
    }
  });
  return <BreakpointComponent breakpoints={breakpoints} />;
};
