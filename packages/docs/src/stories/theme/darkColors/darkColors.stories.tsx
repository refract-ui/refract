import React from 'react';
import { theme } from '@refract-ui/core';
import ColorPalette from '../../../components/ColorPalette';
import page from './darkColors.mdx';

const { darkColors: defaultDarkColors } = theme();

export default {
  title: 'core/theme/darkColors',
  parameters: {
    docs: {
      page
    }
  },
  argTypes: Object.fromEntries(
    Object.keys(defaultDarkColors).map(k => [k, { control: { type: 'color' } }])
  ),
  args: defaultDarkColors
};

export const Template = (args: unknown): React.FC => {
  const { darkColors } = theme({
    themeColors: ({ defaults }) => ({
      ...defaults,
      ...args
    })
  });
  return <ColorPalette colors={darkColors} />;
};

export const FunctionTemplate = (): React.FC => {
  const { darkColors } = theme({
    darkColors: ({ defaults }) => ({
      ...defaults,
      white: '#fefefe',
      primary: 'purple'
    })
  });
  return <ColorPalette colors={darkColors} />;
};

export const StaticTemplate = (): React.FC => {
  const { darkColors } = theme({
    darkColors: {
      white: '#fefefe',
      primary: 'purple'
    }
  });
  return <ColorPalette colors={darkColors} />;
};

export const DeriveTemplate = (): React.FC => {
  const { darkColors } = theme({
    themeColors: {
      primary: 'purple'
    }
  });
  return <ColorPalette colors={darkColors} />;
};
