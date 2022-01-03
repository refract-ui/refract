import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/react';
import { useArgs } from '@storybook/client-api';
import ColorPalette from '../../../components/ColorPalette';
import page from './subtleColors.mdx';

const { subtleColors: defaultSubtleColors } = theme();

export default {
  title: 'core/theme/subtleColors',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

export function Template(): React.FC {
  const [args, updateArgs, resetArgs] = useArgs();
  const { subtleColors: currentThemeValues } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValues);
    return () => {
      resetArgs();
    };
  }, [currentThemeValues]);

  const { subtleColors } = theme({
    subtleColors: {
      ...currentThemeValues,
      ...args
    }
  });
  return <ColorPalette colors={subtleColors} />;
}
Template.args = defaultSubtleColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultSubtleColors).map(k => [k, { control: { type: 'color' } }])
);

export function DefaultTemplate(): React.FC {
  const { subtleColors: currentThemeValues } = useContext(ThemeContext);
  return <ColorPalette colors={currentThemeValues} />;
}

export const FunctionTemplate = (): React.FC => {
  const { subtleColors } = theme({
    subtleColors: ({ defaults }) => ({
      ...defaults,
      white: '#fefefe',
      primary: 'purple'
    })
  });
  return <ColorPalette colors={subtleColors} />;
};

export const StaticTemplate = (): React.FC => {
  const { subtleColors } = theme({
    subtleColors: {
      white: '#fefefe',
      primary: 'purple'
    }
  });
  return <ColorPalette colors={subtleColors} />;
};

export const DeriveTemplate = (): React.FC => {
  const { subtleColors } = theme({
    themeColors: {
      primary: 'purple'
    }
  });
  return <ColorPalette colors={subtleColors} />;
};
