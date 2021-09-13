import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import isEqual from 'lodash/isEqual';
import ColorPalette from '../../../components/ColorPalette';
import themeColorDocs from './themeColors.mdx';

const { themeColors: defaultThemeColors } = theme();
console.log(defaultThemeColors);

export default {
  title: 'core/theme/themeColors',
  parameters: {
    docs: {
      page: themeColorDocs
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

export function Template(initArgs): React.FC {
  const [args, updateArgs] = useArgs();
  const { themeColors: currentThemeColors } = useContext(ThemeContext);

  const changeArgs = isEqual(args, currentThemeColors);
  console.log({ changeArgs });

  /* useEffect(() => {
    console.log('mounting');
    console.log({ args, initArgs, currentThemeColors });
    updateArgs(currentThemeColors);
    return () => {
      console.log('unmounting');
    };
  }, [currentThemeColors]); */

  const { themeColors } = theme({
    themeColors: {
      ...currentThemeColors
    }
  });
  return <ColorPalette colors={themeColors} />;
}

export function DefaultTemplate(): React.FC {
  const { themeColors } = theme();
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
