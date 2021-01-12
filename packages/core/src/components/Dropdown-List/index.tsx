import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type DropdownListTheme = {};

type DropdownListProps = {
  children?: React.ReactNode;
};

type DropdownListVariants = {};

type DropdownListStates = '_hover' | '_active' | '_focus';

function DropdownListFunction({
  children,
  ...props
}: DropdownListProps & DropdownListVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={className}>{children}</div>;
}

const DropdownListComponent = styled(DropdownListFunction)<
  ThemeComponent & DropdownListProps
>`
  ${({ componentCss }) => componentCss};
  background: red;
  height: 100px;
  width: 100px;
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
          bg: 'none',
          px: theme.spacing[1],
          py: theme.spacing[1]
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {}
    };
  }
});

export default DropdownList;
