import React from 'react';
import { theme } from '@refract-ui/core';
import { defaultColors } from '@refract-ui/core/src/theme/colors';
import ColorPalette from '../../../components/ColorPalette';
import colorDocs from './colors.mdx';

export default {
  title: 'core/theme/colors',
  parameters: {
    docs: {
      page: colorDocs
    }
  },
  argTypes: Object.fromEntries(
    Object.keys(defaultColors).map(k => [k, { control: { type: 'color' } }])
  ),
  args: defaultColors
};

export const Template = (args: unknown): React.FC => {
  const { colors } = theme({
    colors: ({ defaults }) => ({
      ...defaults,
      ...args
    })
  });
  return <ColorPalette colors={colors} />;
};

export const FunctionTemplate = (): React.FC => {
  const { colors } = theme({
    colors: ({ defaults }) => ({
      ...defaults,
      white: '#fefefe',
      brand: 'purple'
    })
  });
  return <ColorPalette colors={colors} />;
};

export const StaticTemplate = (): React.FC => {
  const { colors } = theme({
    colors: {
      white: '#fefefe',
      brand: 'purple'
    }
  });
  return <ColorPalette colors={colors} />;
};
