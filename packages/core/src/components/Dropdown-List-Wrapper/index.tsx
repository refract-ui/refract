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
import { DropdownContext, DropdownCtxTypes } from '../Dropdown';

type DropdownListWrapperTheme = {
  border?: Partial<BorderBreakpointStyle>;
};

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

const DropdownListWrapperComponent = styled(DropdownListWrapperFunction)<
  ThemeComponent & DropdownListWrapperProps
>`
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
  box-shadow: 0 2px 6px 0 rgba(45, 45, 49, 0.13);
  overflow-y: scroll;
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
          border: {
            ...theme.borders.md,
            borderWidth: '0'
          },
          minW: '200px',
          minH: '100px',
          py: theme.spacing['3']
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
        border: ({ border, ...props }) => {
          return applyBorderStyle(border);
        }
      }
    };
  }
});

export default DropdownListWrapper;
