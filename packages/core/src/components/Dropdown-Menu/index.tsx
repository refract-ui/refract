import React, { useState, createContext } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type DropdownMenuTheme = {};

type DropdownMenuProps = {
  children?: any;
};

type DropdownMenuVariants = {};

type DropdownMenuStates = '_hover' | '_active' | '_focus';

export const DropdownContext = createContext({});

function DropdownMenuFunction({
  children,
  ...props
}: DropdownMenuProps & DropdownMenuVariants): JSX.Element {
  const className = get(props, 'className', null);

  const [isOpen, setIsOpen] = useState(false);
  const ddCtx = { isOpen, setIsOpen };

  return (
    <DropdownContext.Provider value={ddCtx}>
      <div className={className}>{children}</div>
    </DropdownContext.Provider>
  );
}

const DropdownMenuComponent = styled(DropdownMenuFunction)<
  ThemeComponent & DropdownMenuProps
>`
  ${({ componentCss }) => componentCss};
`;

const DropdownMenu = createThemedComponent<
  DropdownMenuTheme,
  DropdownMenuVariants,
  DropdownMenuStates,
  DropdownMenuProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownMenuComponent,

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

export default DropdownMenu;
