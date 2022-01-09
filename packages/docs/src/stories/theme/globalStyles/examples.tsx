import React, { useContext, useEffect } from 'react';
import styled, { ThemeContext, ThemeProvider } from 'styled-components';
import { theme, Theme, GlobalStyles, SubTheme } from '@refract-ui/core';
import { Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import StyleGuide from '../../../components/StyleGuide';

const { themeColors: defaultThemeColors } = theme();

const SSubTheme = styled(SubTheme)`
  padding: 0.5rem;
`;

const Template: Story = () => {
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
};
Template.args = defaultThemeColors;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultThemeColors).map(k => [k, { control: { type: 'color' } }])
);

export const DefaultTemplate: Story = () => {
  const currentTheme = useContext(ThemeContext);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <StyleGuide theme={currentTheme} />
    </ThemeProvider>
  );
};

export const WithSubTheme: Story = () => {
  const currentTheme = useContext(ThemeContext);
  const nestedInvertedTheme: Theme = theme({
    themeColors: {
      fg: currentTheme.themeColors.bg,
      bg: currentTheme.themeColors.fg
    }
  });

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <StyleGuide>
        <SSubTheme theme={nestedInvertedTheme}>
          <StyleGuide />
        </SSubTheme>
      </StyleGuide>
    </ThemeProvider>
  );
};

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
