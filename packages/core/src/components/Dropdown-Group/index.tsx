import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type DropdownGroupTheme = {};
type DropdownGroupProps = {
  children?: React.ReactNode;
};
type DropdownGroupVariants = {};
type DropdownGroupStates = '_hover' | '_active' | '_focus';

function DropdownGroupFunction({
  children,
  ...props
}: DropdownGroupProps & DropdownGroupVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={className}>{children}</div>;
}

const DropdownGroupComponent = styled(DropdownGroupFunction)<
  ThemeComponent & DropdownGroupProps
>`
  ${({ componentCss }) => componentCss};
`;

const DropdownGroup = createThemedComponent<
  DropdownGroupTheme,
  DropdownGroupVariants,
  DropdownGroupStates,
  DropdownGroupProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownGroupComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: 'none'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {}
    };
  }
});

export default DropdownGroup;
