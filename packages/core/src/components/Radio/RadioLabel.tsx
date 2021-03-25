import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import createThemedComponent from '../../utils/createThemedComponent';

type RadioLabelTheme = {
  fontSize?: string;
  labelColor?: string;
};

type RadioLabelProps = {
  children?: string | React.ReactNode;
  hasErrors?: boolean;
};

type RadioLabelVariants = {
  size?: 'sm' | 'md' | 'lg';
};

type RadioLabelStates = '_hover';

function RadioLabelFunction({
  children,
  ...props
}: RadioLabelProps & RadioLabelVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={className}>{children}</div>;
}

const RadioLabelComponent = styled(RadioLabelFunction)<
  ThemeComponent & RadioLabelProps
>`
  ${({ componentCss }) => componentCss};
`;

const RadioLabel = createThemedComponent<
  RadioLabelTheme,
  RadioLabelVariants,
  RadioLabelStates,
  RadioLabelProps,
  Container
>({
  defaultVariants: {
    size: 'md'
  },
  states: ['_hover'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: RadioLabelComponent,
      variantMapping: {
        size: ({ size }) => {
          if (size === 'sm') {
            return {
              fontSize: '0.75rem'
            };
          }
          if (size === 'md') {
            return;
          }
          if (size === 'lg') {
            return {
              fontSize: '1rem'
            };
          }
        }
      },
      defaultStyleMapping: {
        xs: {
          bg: 'none',
          fontSize: '0.875rem',
          labelColor: theme.dark
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
        labelColor: ({
          theme: { danger },
          labelColor,
          componentProps: { hasErrors }
        }) => {
          return css`
            color: ${hasErrors ? danger : labelColor};
          `;
        },
        fontSize: ({ fontSize }) => {
          return css`
            font-size: ${fontSize};
          `;
        }
      }
    };
  }
});

export default RadioLabel;
