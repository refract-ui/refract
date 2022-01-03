import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/react';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';
import page from './themeColors.mdx';

const { themeColors: defaultThemeColors } = theme();

export default {
  title: 'core/theme/themeColors',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export function Template(): React.FC {
  const [args, updateArgs, resetArgs] = useArgs();
  const { themeColors: currentThemeValues } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValues);
    return () => {
      resetArgs();
    };
  }, [currentThemeValues]);

  const { themeColors } = theme({
    themeColors: {
      ...currentThemeValues,
      ...args
    }
  });
  return <ColorPalette colors={themeColors} />;
}
Template.args = defaultThemeColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultThemeColors).map(k => [k, { control: { type: 'color' } }])
);

export function DefaultTemplate(): React.FC {
  const { themeColors: currentThemeValues } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValues} />;
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
