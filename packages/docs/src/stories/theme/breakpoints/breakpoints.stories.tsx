import React from 'react';
import { theme } from '@refract-ui/core';
import BreakpointComponent from '../../../components/Breakpoints';
import breakpointDocs from './breakpoints.mdx';

const { breakpoints: defaultBreakpoints } = theme();

export default {
  title: 'core/theme/breakpoints',
  parameters: {
    docs: {
      page: breakpointDocs
    }
  },
  argTypes: Object.fromEntries(
    Object.keys(defaultBreakpoints).map(k => [
      k,
      { control: { type: 'number' } }
    ])
  ),
  args: defaultBreakpoints
};

export const Template = (args: unknown): React.FC => {
  const { breakpoints } = theme({
    breakpoints: ({ defaults }) => ({
      ...defaults,
      ...args
    })
  });
  return <BreakpointComponent breakpoints={breakpoints} />;
};

export const FunctionTemplate = (): React.FC => {
  const { breakpoints } = theme({
    breakpoints: ({ defaults }) => ({
      ...defaults,
      md: 600,
      notQuiteXL: 1080
    })
  });
  return <BreakpointComponent breakpoints={breakpoints} />;
};

export const StaticTemplate = (): React.FC => {
  const { breakpoints } = theme({
    breakpoints: {
      md: 600,
      notQuiteXL: 1080
    }
  });
  return <BreakpointComponent breakpoints={breakpoints} />;
};
