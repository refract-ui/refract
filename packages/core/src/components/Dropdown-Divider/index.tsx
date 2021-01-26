import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type DropdownDividerTheme = {};
type DropdownDividerProps = {};
type DropdownDividerVariants = {};
type DropdownDividerStates = '_hover';

function DropdownDividerFunction({
  ...props
}: DropdownDividerProps & DropdownDividerVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <hr className={className} />;
}

const DropdownDividerComponent = styled(DropdownDividerFunction)<
  ThemeComponent & DropdownDividerProps
>`
  ${({ componentCss }) => componentCss};
  opacity: 0.5;
`;

const DropdownDivider = createThemedComponent<
  DropdownDividerTheme,
  DropdownDividerVariants,
  DropdownDividerStates,
  DropdownDividerProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownDividerComponent,

      variantMapping: {},

      defaultStyleMapping: {
        xs: {
          mx: '0',
          bg: ({ contrastColor }) =>
            contrastColor(theme.components.dropdowns.bg)
        }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {}
    };
  }
});

export default DropdownDivider;
