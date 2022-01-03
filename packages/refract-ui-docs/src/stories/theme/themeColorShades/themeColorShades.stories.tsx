import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/react';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';
import page from './themeColorShades.mdx';

const { themeColorShades: defaultThemeColors } = theme();

export default {
  title: 'core/theme/themeColorShades',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export function Template(): React.FC {
  const [args, updateArgs, resetArgs] = useArgs();
  const { themeColorShades: currentThemeValues } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValues);
    return () => {
      resetArgs();
    };
  }, [currentThemeValues]);

  const { themeColorShades } = theme({
    themeColorShades: {
      ...currentThemeValues,
      ...args
    }
  });
  return <ColorPalette colors={themeColorShades} />;
}
Template.args = defaultThemeColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultThemeColors).map(k => [k, { control: { type: 'color' } }])
);

export function DefaultTemplate(): React.FC {
  const { themeColorShades: currentThemeValues } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValues} />;
}

export const FunctionTemplate = (): React.FC => {
  const { themeColorShades } = theme({
    themeColorShades: ({ defaults }) => ({
      ...defaults,
      white: '#fefefe',
      primary: 'purple'
    })
  });

  console.log({ themeColorShades });
  return <ColorPalette colors={themeColorShades} />;
};

export const StaticTemplate = (): React.FC => {
  const { themeColorShades } = theme({
    themeColorShades: {
      white: '#fefefe',
      primary: 'purple'
    }
  });
  return <ColorPalette colors={themeColorShades} />;
};

export const DeriveTemplate = (): React.FC => {
  const { themeColorShades } = theme({
    themeColors: {
      primary: 'purple'
    }
  });
  return <ColorPalette colors={themeColorShades} />;
};
