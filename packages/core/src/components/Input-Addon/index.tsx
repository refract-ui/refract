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

type InputAddonTheme = {};

type InputAddonProps = {
  children?: React.ReactNode;
};

type InputAddonVariants = {};

type InputAddonStates = '_hover';

function InputAddonFunction({
  children,
  ...props
}: InputAddonProps & InputAddonVariants): JSX.Element {
  const className = get(props, 'className', null);
  return <div className={className}>{children}</div>;
}

const InputAddonComponent = styled(InputAddonFunction)<
  ThemeComponent & InputAddonProps
>`
  ${({ componentCss }) => componentCss};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputAddon = createThemedComponent<
  InputAddonTheme,
  InputAddonVariants,
  InputAddonStates,
  InputAddonProps,
  Container
>({
  defaultVariants: {},
  states: [],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: InputAddonComponent,

      variantMapping: {},

      defaultStyleMapping: {
        xs: {
          bg: theme['gray400'],
          py: theme.spacing[2],
          px: theme.spacing[2],
          minW: '20px'
        }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {}
    };
  }
});

export default InputAddon;
