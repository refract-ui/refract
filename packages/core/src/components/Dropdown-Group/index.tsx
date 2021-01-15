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
  title?: string;
};
type DropdownGroupVariants = {};
type DropdownGroupStates = '_hover' | '_active' | '_focus';

function DropdownGroupFunction({
  title,
  children,
  ...props
}: DropdownGroupProps & DropdownGroupVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <div>
      {title && <p className={`${className} gfx-menu-group-title`}>{title}</p>}
      {children}
    </div>
  );
}

const DropdownGroupComponent = styled(DropdownGroupFunction)<
  ThemeComponent & DropdownGroupProps
>`
  ${({ componentCss }) => componentCss};
  font-family: 'Work Sans', sans serif;
  font-weight: 500;
  text-transform: uppercase;
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
          bg: 'inherit',
          px: theme.spacing['3'],
          py: '0'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {}
    };
  }
});

export default DropdownGroup;
