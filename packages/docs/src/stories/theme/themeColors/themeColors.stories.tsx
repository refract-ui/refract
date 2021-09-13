import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs, useGlobals, useStoryContext } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';
import themeColorDocs from './themeColors.mdx';

const { themeColors: defaultThemeColors } = theme();

export default {
  title: 'core/theme/themeColors',
  parameters: {
    docs: {
      page: themeColorDocs
    },
    controls: {
      expanded: true,
      hideNoControlsWarning: true
    }
  },
  argTypes: Object.fromEntries(
    Object.keys(defaultThemeColors).map(k => [
      k,
      { control: { type: 'color' } }
    ])
  ),
  args: defaultThemeColors
};

export function Template(): React.FC {
  const [args, updateArgs] = useArgs();
  const { themeColors: currentThemeColors } = useContext(ThemeContext);
  useEffect(() => {
    updateArgs({ ...currentThemeColors });
  }, [currentThemeColors]);

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
