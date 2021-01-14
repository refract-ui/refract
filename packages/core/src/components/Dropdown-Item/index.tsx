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

type DropdownItemTheme = {
  textColor?: string;
};
type DropdownItemProps = {
  children?: string | React.ReactNode;
};
type DropdownItemVariants = {};
type DropdownItemStates = '_hover' | '_active' | '_focus';

function DropdownItemFunction({
  children,
  ...props
}: DropdownItemProps & DropdownItemVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={className}>{children}</div>;
}

const DropdownItemComponent = styled(DropdownItemFunction)<
  ThemeComponent & DropdownItemProps
>`
  ${({ componentCss }) => componentCss};
  font-family: 'Work Sans', sans serif;
  font-weight: 300;
  display: flex;

  svg:first-child {
    margin-right: 10px;
  }

  svg:last-child {
    margin-left: auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

const DropdownItem = createThemedComponent<
  DropdownItemTheme,
  DropdownItemVariants,
  DropdownItemStates,
  DropdownItemProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownItemComponent,

      variantMapping: {},

      defaultStyleMapping: {
        xs: {
          bg: 'inherit',
          px: theme.spacing['3'],
          py: theme.spacing['2'],
          textColor: ({ contrastColor }) =>
            contrastColor(theme.components.dropdowns.bg),
          w: 'auto'
        }
      },

      cascadeStateProps: {
        bg: {
          _hover: () => {
            return theme.components.dropdowns.hoverBg;
          }
        },
        textColor: {
          _hover: ({ contrastColor }) => {
            return contrastColor(theme.components.dropdowns.hoverBg);
          }
        }
      },

      mapPropsToStyle: {
        textColor: ({ textColor }) => {
          return css`
            color: ${textColor};
            svg {
              path {
                fill: ${textColor};
              }
            }
          `;
        }
      }
    };
  }
});

export default DropdownItem;
