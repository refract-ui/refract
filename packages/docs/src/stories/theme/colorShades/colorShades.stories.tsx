import React from 'react';
import { theme } from '@refract-ui/core';
import ColorPalette from '../../../components/ColorPalette';
import colorShadeDocs from './colorShades.mdx';

export default {
  title: 'core/theme/colorShades',
  parameters: {
    docs: {
      page: colorShadeDocs
    }
  }
};

export const Template = (args: unknown): React.FC => {
  const { colorShades } = theme({
    colors: ({ defaults }) => ({
      ...defaults,
      ...args
    })
  });
  return <ColorPalette colors={colorShades} />;
};

export const FunctionTemplate = (): React.FC => {
  const { colorShades } = theme({
    colorShades: ({ defaults }) => ({
      ...defaults,
      gray100: '#fefefe',
      primary: 'purple'
    })
  });
  return <ColorPalette colors={colorShades} />;
};

export const StaticTemplate = (): React.FC => {
  const { colorShades } = theme({
    colorShades: {
      gray100: '#fefefe',
      primary: 'purple'
    }
  });
  return <ColorPalette colors={colorShades} />;
};

export const DeriveTemplate = (): React.FC => {
  const { colorShades } = theme({
    colors: {
      red: 'tomato'
    }
  });
  return <ColorPalette colors={colorShades} />;
};
