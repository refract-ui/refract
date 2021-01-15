import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import lightenOrDarken from '../../utils/lightenOrDarken';
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
type DropdownItemVariants = {
  isSelected?: boolean;
};
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
  defaultVariants: {
    isSelected: false
  },
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    console.log('In index.tsx, this is variant: ', variant);
    return {
      Component: DropdownItemComponent,

      variantMapping: {
        isSelected: ({ isSelected }) => {
          if (isSelected) {
            return {
              bg: theme.components.dropdowns.selectedItemBg
            };
          }
        }
      },

      defaultStyleMapping: {
        xs: {
          bg: theme.components.dropdowns.bg,
          px: theme.spacing['3'],
          py: theme.spacing['2'],
          textColor: ({ contrastColor, bg }) => contrastColor(bg),
          w: 'auto'
        }
      },

      cascadeStateProps: {
        bg: {
          _hover: ({ bg }) => {
            return lightenOrDarken({
              color: bg,
              amount: 10
            });
          }
        },
        textColor: {
          _hover: ({ contrastColor, bg }) => {
            return contrastColor(bg);
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
