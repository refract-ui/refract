import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import createThemedComponent from '../../utils/createThemedComponent';

type CheckboxLabelTheme = {
  fontSize?: string;
  labelColor?: string;
};

type CheckboxLabelProps = {
  children?: string | React.ReactNode;
  hasErrors?: boolean;
};

type CheckboxLabelVariants = {
  size?: 'sm' | 'md' | 'lg';
};

type CheckboxLabelStates = '_hover';

function CheckboxLabelFunction({
  children,
  ...props
}: CheckboxLabelProps & CheckboxLabelVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={className}>{children}</div>;
}

const CheckboxLabelComponent = styled(CheckboxLabelFunction)<
  ThemeComponent & CheckboxLabelProps
>`
  ${({ componentCss }) => componentCss};
`;

const CheckboxLabel = createThemedComponent<
  CheckboxLabelTheme,
  CheckboxLabelVariants,
  CheckboxLabelStates,
  CheckboxLabelProps,
  Container
>({
  defaultVariants: {
    size: 'md'
  },
  states: ['_hover'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: CheckboxLabelComponent,
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

export default CheckboxLabel;
