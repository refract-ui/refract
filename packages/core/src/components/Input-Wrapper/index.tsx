import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type InputWrapperTheme = {
  flexDir: 'row' | 'column';
};

type InputWrapperProps = {
  children?: React.ReactNode;
  horizontal?: boolean;
};

type InputWrapperVariants = {};

type InputWrapperStates = '_hover' | '_active' | '_focus';

function InputWrapperFunction({
  children,
  horizontal,
  ...props
}: InputWrapperProps & InputWrapperVariants): JSX.Element {
  const className = get(props, 'className', null);
  return (
    <div className={className} role="group">
      {children}
    </div>
  );
}

const InputWrapperComponent = styled(InputWrapperFunction)<
  ThemeComponent & InputWrapperProps
>`
  ${({ componentCss }) => componentCss};
  display: flex;
  font-family: 'Work Sans', sans serif;
  font-weight: 300;
`;

const InputWrapper = createThemedComponent<
  InputWrapperTheme,
  InputWrapperVariants,
  InputWrapperStates,
  InputWrapperProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: InputWrapperComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: 'none',
          border: theme.borders.md,
          py: `0`,
          px: `0`,
          flexDir: 'row',
          w: 'auto',
          mb: theme.spacing[3]
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
        flexDir: ({ componentProps: { horizontal } }) => {
          if (horizontal) {
            return css`
              align-items: center;
              flex-direction: row;
              max-width: 320px;
              width: 100% !important;

              .input-group {
                width: 100%;
              }

              .input-label {
                margin-bottom: 0;
              }
            `;
          } else {
            return css`
              flex-direction: column;
            `;
          }
        }
      }
    };
  }
});

export default InputWrapper;
