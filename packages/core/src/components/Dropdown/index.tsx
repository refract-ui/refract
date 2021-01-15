import React, { useState, createContext, useRef } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import useOutsideClick from '../../hooks/useOutsideClick';

type DropdownTheme = {};

type DropdownProps = {
  children?: any;
};

type DropdownVariants = {};

type DropdownStates = '_hover' | '_active' | '_focus';

export const DropdownContext = createContext({});

function DropdownFunction({
  children,
  ...props
}: DropdownProps & DropdownVariants): JSX.Element {
  const className = get(props, 'className', null);

  const [isOpen, setIsOpen] = useState(false);
  const ddCtx = { isOpen, setIsOpen };

  const ddRef = useRef(null);

  useOutsideClick(ddRef, ddCtx.isOpen, () => {
    ddCtx.setIsOpen(false);
  });

  return (
    <DropdownContext.Provider value={ddCtx}>
      <div className={className} ref={ddRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

const DropdownComponent = styled(DropdownFunction)<
  ThemeComponent & DropdownProps
>`
  ${({ componentCss }) => componentCss};
`;

const Dropdown = createThemedComponent<
  DropdownTheme,
  DropdownVariants,
  DropdownStates,
  DropdownProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownComponent,

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

export default Dropdown;
