import React from 'react';
import { theme } from '@refract-ui/core';
import Spacing from '../../../components/Spacing';
import page from './spacing.mdx';

const { spacing: defaultSpacing } = theme();

export default {
  title: 'core/theme/spacing',
  parameters: {
    docs: {
      page
    }
  },
  argTypes: Object.fromEntries(
    Object.keys(defaultSpacing).map(k => [k, { control: { type: 'text' } }])
  ),
  args: defaultSpacing
};

export function Template(args: unknown): React.FC {
  const { spacing } = theme({
    spacing: ({ defaults }) => ({
      ...defaults,
      ...args
    })
  });
  return <Spacing spacing={spacing} />;
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