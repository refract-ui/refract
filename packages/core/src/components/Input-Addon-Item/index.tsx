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
  content?: string | React.ReactNode;
};

type InputAddonVariants = {};

type InputAddonStates = '_hover';

function InputAddonFunction({
  content,
  ...props
}: InputAddonProps & InputAddonVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={className}>{content}</div>;
}

const InputAddonComponent = styled(InputAddonFunction)<
  ThemeComponent & InputAddonProps
>`
  ${({ componentCss }) => componentCss};
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;

  &:last-child {
    border-right: 0;
  }
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
          bg: 'none',
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
