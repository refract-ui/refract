import React, { useState, createContext, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import useOutsideClick from '../../hooks/useOutsideClick';

type DropdownTheme = {};

type DropdownProps = {
  children?: React.ReactNode;
  closeOnSelect?: boolean;
  placement?: PlacementTypes;
  isDeferred?: boolean;
};

type DropdownVariants = {};

type DropdownStates = '_hover' | '_active' | '_focus';

export type PlacementTypes =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type DropdownCtxTypes = {
  isOpen?: boolean;
  setIsOpen?: (arg0: boolean) => boolean;
  referenceRef?: React.MutableRefObject<HTMLButtonElement>;
  popperRef?: React.MutableRefObject<HTMLDivElement>;
  placement?: PlacementTypes;
  isDeferred?: boolean;
};

export const DropdownContext = createContext({});

function DropdownFunction({
  closeOnSelect,
  children,
  placement,
  isDeferred,
  ...props
}: DropdownProps & DropdownVariants): JSX.Element {
  const className = get(props, 'className', null);

  const ddRef = useRef<HTMLDivElement>(null);
  const referenceRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const ddCtx = {
    isOpen,
    setIsOpen,
    referenceRef,
    popperRef,
    placement,
    isDeferred
  };

  const closeDropdown = (): void => {
    ddCtx.setIsOpen(false);
  };

  if (closeOnSelect) {
    useEffect(() => {
      if (ddCtx.isOpen) {
        document.addEventListener('click', closeDropdown);
      } else {
        document.removeEventListener('click', closeDropdown);
      }

      return () => {
        document.removeEventListener('click', closeDropdown);
      };
    });
  } else {
    useOutsideClick(ddRef, ddCtx.isOpen, closeDropdown);
  }

  return (
    <DropdownContext.Provider value={ddCtx}>
      <div className={className} ref={ddRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

DropdownFunction.defaultProps = {
  closeOnSelect: true,
  children: null,
  placement: 'bottom-start',
  isDeferred: false
};

const DropdownComponent = styled(DropdownFunction)<
  ThemeComponent & DropdownProps
>`
  ${({ componentCss }) => componentCss};
  position: relative;
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
