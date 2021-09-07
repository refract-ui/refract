import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import ColorPalette from '../../../components/ColorPalette';
import themeColorDocs from './themeColors.mdx';

export default {
  title: 'core/theme/themeColors',
  parameters: {
    docs: {
      page: themeColorDocs
    }
  }
};

export function Template(args: unknown): React.FC {
  const { themeColors: currentThemeColors } = useContext(ThemeContext);
  const { themeColors } = theme({
    themeColors: {
      ...currentThemeColors,
      ...args
    }
  });
  return <ColorPalette colors={themeColors} />;
}

export const FunctionTemplate = (): React.FC => {
  const { themeColors } = theme({
    themeColors: ({ defaults }) => ({
      ...defaults,
      white: '#fefefe',
      primary: 'purple'
    })
  });
  return <ColorPalette colors={themeColors} />;
};

export const StaticTemplate = (): React.FC => {
  const { themeColors } = theme({
    themeColors: {
      white: '#fefefe',
      primary: 'purple'
    }
  });
  return <ColorPalette colors={themeColors} />;
};
