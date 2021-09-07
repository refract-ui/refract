import React from 'react';
import { theme } from '@refract-ui/core';
import BorderComponent from '../../../components/Borders';
import bordersDocs from './borders.mdx';

export default {
  title: 'core/theme/borders',
  parameters: {
    docs: {
      page: bordersDocs
    }
  }
};

export const Template = (args: unknown): React.FC => {
  const { borders } = theme({
    spacing: ({ defaults }) => ({
      ...defaults,
      ...args
    })
  });
  return <BorderComponent borders={borders} />;
};

export const FunctionTemplate = (): React.FC => {
  const { borders } = theme({
    borders: ({ defaults }) => ({
      ...defaults,
      md: {
        ...defaults.md,
        borderWidth: '4px'
      },
      lg: {
        ...defaults.lg,
        borderWidth: '1px',
        borderStyle: 'solid'
      }
    })
  });
  return <BorderComponent borders={borders} />;
};

export const StaticTemplate = (): React.FC => {
  const { borders } = theme({
    borders: {
      md: {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '8px'
      }
    }
  });
  return <BorderComponent borders={borders} />;
};
