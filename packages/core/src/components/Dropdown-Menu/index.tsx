import React, { useState, createContext, useRef, useEffect } from 'react';
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

  const ddRef = useRef(null);

  const handleClickOutside = (e: MouseEvent): void => {
    if (ddRef.current && ddRef.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    ddCtx.setIsOpen(false);
  };

  useEffect(() => {
    if (ddCtx.isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <DropdownContext.Provider value={ddCtx}>
      <div className={className} ref={ddRef}>
        {children}
      </div>
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
