import React from 'react';
import ThemeDiagram from '../../../components/ThemeDiagram';
import * as MDXContent from './theme.mdx';

const { default: page } = MDXContent;

export default {
  title: 'core/theme/intro',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export function Template(): React.ReactElement {
  return <ThemeDiagram />;
}
