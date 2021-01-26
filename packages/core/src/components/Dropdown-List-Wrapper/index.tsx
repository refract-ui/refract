import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import { DropdownContext, DropdownCtxTypes } from '../Dropdown';

type DropdownListWrapperTheme = {};

type DropdownListWrapperProps = {
  children?: React.ReactNode;
  id?: string;
};

type DropdownListWrapperVariants = {};

type DropdownListWrapperStates = '_hover' | '_active' | '_focus';

function DropdownListWrapperFunction({
  children,
  id,
  ...props
}: DropdownListWrapperProps & DropdownListWrapperVariants): JSX.Element {
  const className = get(props, 'className', null);

  const ddCtx: DropdownCtxTypes = useContext(DropdownContext);

  const { isDeferred, isOpen } = ddCtx;

  if (isDeferred) {
    return (
      isOpen && (
        <div
          className={className}
          role="menu"
          aria-orientation="vertical"
          id={id}
          tabIndex={-1}
        >
          {children}
        </div>
      )
    );
  } else {
    return (
      <div
        className={className}
        role="menu"
        aria-orientation="vertical"
        id={id}
        tabIndex={-1}
      >
        {children}
      </div>
    );
  }
}

const DropdownListWrapperComponent = styled(DropdownListWrapperFunction)<
  ThemeComponent & DropdownListWrapperProps
>`
  display: flex;
  flex-direction: column;
  ${({ componentCss }) => componentCss};
  ${() => {
    const ddCtx: DropdownCtxTypes = useContext(DropdownContext);
    if (ddCtx.isOpen) {
      return css`
        opacity: 1;
        visibility: visible;
      `;
    } else {
      return css`
        opacity: 0;
        visibility: hidden;
      `;
    }
  }}
`;

const DropdownListWrapper = createThemedComponent<
  DropdownListWrapperTheme,
  DropdownListWrapperVariants,
  DropdownListWrapperStates,
  DropdownListWrapperProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownListWrapperComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: theme.components.dropdowns.bg,
          minW: '200px',
          py: theme.spacing['3']
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {}
    };
  }
});

export default DropdownListWrapper;
