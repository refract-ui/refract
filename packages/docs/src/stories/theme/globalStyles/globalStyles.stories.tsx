import React, { useContext, useEffect } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { theme, Theme, GlobalStyles, SubTheme, test } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import StyleGuide from '../../../components/StyleGuide';
import page from './globalStyles.mdx';

const { themeColors: defaultThemeColors } = theme();

export default {
  title: 'core/theme/globalStyles',
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

  const currentTheme: Theme = theme({
    themeColors: {
      ...currentThemeValues,
      ...args
    }
  });
  return <StyleGuide theme={currentTheme} />;
}
Template.args = defaultThemeColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultThemeColors).map(k => [k, { control: { type: 'color' } }])
);

export function DefaultTemplate(): React.FC {
  const currentTheme = useContext(ThemeContext);
  console.log('@-->current theme', currentTheme);
  console.log('@-->test', test);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <StyleGuide theme={currentTheme} />
    </ThemeProvider>
  );
}

export function WithSubTheme(): React.FC {
  const currentTheme = useContext(ThemeContext);
  const nestedInvertedTheme: Theme = theme({
    body: {
      xs: {
        textColor: currentTheme.body.xs.bg,
        bg: currentTheme.body.xs.textColor,
      }
    }
  });

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <StyleGuide theme={currentTheme}>
        <SubTheme theme={nestedInvertedTheme}>
          <StyleGuide />
        </SubTheme>
      </StyleGuide>
    </ThemeProvider>
  );
}

/*
export const FunctionTemplate = (): React.FC => {
  const currentTheme = theme({
    globalStyle: ({ defaults, themeColors }) => ({
      xs: {
        container: {
          ...defaults,
          textColor: themeColors.light,
          bg: themeColors.dark
        }
      }
    })
  });
  return <StyleGuide theme={currentTheme} />;
};

export const StaticTemplate = (): React.FC => {
  const currentTheme = theme({
    globalStyle: {
      xs: {
        container: {
          bg: '#fefefe',
          textColor: 'purple'
        }
      }
    }
  });
  return <StyleGuide theme={currentTheme} />;
};
*/
