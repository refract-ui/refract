import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import { Colors } from '../../theme/colors';
import { ThemeColors } from '../../theme/themeColors';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import lightenOrDarken from '../../utils/lightenOrDarken';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type InputWrapperTheme = {};

type InputWrapperProps = {
  children?: React.ReactNode;
};

type InputWrapperVariants = {};

type InputWrapperStates = '_hover' | '_active' | '_focus';

function InputWrapperFunction({
  children,
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
  flex-direction: column;
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
          py: `0`
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {}
    };
  }
});

export default InputWrapper;
