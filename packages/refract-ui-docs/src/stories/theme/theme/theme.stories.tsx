import React from 'react';
import ThemeDiagram from '../../../components/ThemeDiagram';
import page from './theme.mdx';

export default {
  title: 'core/theme/intro',
  parameters: {
    docs: {
      page
    }
  }
};

export function Template(): React.FC {
  return <ThemeDiagram />;
}
