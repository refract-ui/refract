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
import { DropdownContext } from '../Dropdown-Menu';

type DropdownListTheme = {
  border?: Partial<BorderBreakpointStyle>;
};

type DropdownListProps = {
  children?: React.ReactNode;
};

type DropdownListVariants = {};

type DropdownListStates = '_hover' | '_active' | '_focus';

type DropdownCtx = {
  isOpen?: boolean;
  setIsOpen?: (arg0: boolean) => boolean;
};

function DropdownListFunction({
  children,
  ...props
}: DropdownListProps & DropdownListVariants): JSX.Element {
  const className = get(props, 'className', null);

  const ddCtx: DropdownCtx = useContext(DropdownContext);

  return ddCtx.isOpen && <div className={className}>{children}</div>;
}

const DropdownListComponent = styled(DropdownListFunction)<
  ThemeComponent & DropdownListProps
>`
  ${({ componentCss }) => componentCss};
  box-shadow: 0 2px 6px 0 rgba(45, 45, 49, 0.13);
  position: absolute;
  overflow-y: scroll;
`;

const DropdownList = createThemedComponent<
  DropdownListTheme,
  DropdownListVariants,
  DropdownListStates,
  DropdownListProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownListComponent,
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
        border: ({ border }) => {
          return applyBorderStyle(border);
        }
      }
    };
  }
});

export default DropdownList;
