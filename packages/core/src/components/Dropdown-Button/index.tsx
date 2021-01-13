import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import Button from '../Button';
import { DropdownContext } from '../Dropdown-Menu';

type DropdownButtonTheme = {};

type DropdownButtonProps = {};

type DropdownButtonVariants = {};

type DropdownButtonStates = '_hover' | '_active' | '_focus';

type DropdownCtx = {
  isOpen?: boolean;
  setIsOpen?: (arg0: boolean) => boolean;
};

function DropdownButtonFunction({
  ...props
}: DropdownButtonProps & DropdownButtonVariants): JSX.Element {
  const className = get(props, 'className', null);

  const ddCtx: DropdownCtx = useContext(DropdownContext);

  return <div onClick={() => ddCtx.setIsOpen(!ddCtx.isOpen)}>Open</div>;
}

const DropdownButtonComponent = styled(DropdownButtonFunction)<
  ThemeComponent & DropdownButtonProps
>`
  ${({ componentCss }) => componentCss};
`;

const DropdownButton = createThemedComponent<
  DropdownButtonTheme,
  DropdownButtonVariants,
  DropdownButtonStates,
  DropdownButtonProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownButtonComponent,

      variantMapping: {},

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          w: 'auto'
        }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {}
    };
  }
});

export default DropdownButton;
