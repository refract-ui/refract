import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { theme } from '@refract-ui/core';
import { useArgs } from '@storybook/client-api';
import BorderComponent from '../../../components/Borders';
import page from './borders.mdx';

export default {
  title: 'core/theme/borders',
  parameters: {
    docs: {
      page
    },
    controls: { hideNoControlsWarning: true }
  }
};

const { borders: defaultBorders } = theme();

// todo: interactive borders
export const Template = (): React.FC => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [args, updateArgs, resetArgs] = useArgs();
  const { borders: currentThemeValue } = useContext(ThemeContext);

  useEffect(() => {
    updateArgs(currentThemeValue);
    return () => {
      resetArgs();
    };
  }, [currentThemeValue]);

  const { borders } = theme({
    borders: {
      ...currentThemeValue
    }
  });
  return <BorderComponent borders={borders} />;
};
Template.args = defaultBorders;
Template.argTypes = Object.fromEntries(
  Object.keys(defaultBorders).map(k => [k, { control: { type: 'string' } }])
);

export const DefaultTemplate = (): React.FC => {
  const { borders } = useContext(ThemeContext);
  return <BorderComponent borders={borders} />;
};

export const FunctionTemplate = (): React.FC => {
  const { borders } = theme({
    borders: ({ defaults }) => ({
      ...defaults,
      md: {
        ...defaults.md,
        borderWidth: '4px'
      },
      lg: {
        ...defaults.lg,
        borderWidth: '1px',
        borderStyle: 'solid'
      }
    })
  });
  return <BorderComponent borders={borders} />;
};

export const StaticTemplate = (): React.FC => {
  const { borders } = theme({
    borders: {
      md: {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '8px'
      }
    }
  });
  return <BorderComponent borders={borders} />;
};
