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

type InputGroupTheme = {};

type InputGroupProps = {
  children?: React.ReactNode;
};

type InputGroupVariants = {};

type InputGroupStates = '_hover' | '_disabled';

function InputGroupFunction({
  children,
  ...props
}: InputGroupProps & InputGroupVariants): JSX.Element {
  const className = get(props, 'className', null);
  return <div className={className}>{children}</div>;
}

const InputGroupComponent = styled(InputGroupFunction)<
  ThemeComponent & InputGroupProps
>`
  ${({ componentCss }) => componentCss};
  position: relative;
`;

const InputGroup = createThemedComponent<
  InputGroupTheme,
  InputGroupVariants,
  InputGroupStates,
  InputGroupProps,
  Container
>({
  defaultVariants: {},
  states: [],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: InputGroupComponent,

      variantMapping: {},

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          border: theme.borders.md,
          py: `0`
        }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {},
    }
  }
})

export default InputGroup;
