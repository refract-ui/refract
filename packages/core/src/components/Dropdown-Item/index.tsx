import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import lightenOrDarken from '../../utils/lightenOrDarken';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import { DropdownContext, DropdownCtxTypes } from '../Dropdown';

type PointerEventTypes = 'auto' | 'none' | 'initial' | 'inherit';

type DropdownItemTheme = {
  textColor?: string;
  iconColor?: string;
  border?: Partial<BorderBreakpointStyle>;
  fontSize?: string;
  pointerEvents: PointerEventTypes;
};
type DropdownItemProps = {
  children?: string | React.ReactNode;
  onClick?: any;
  isDisabled?: boolean;
};
type DropdownItemVariants = {
  isSelected?: boolean;
};
type DropdownItemStates = '_hover' | '_active' | '_focus' | '_disabled';

function DropdownItemFunction({
  onClick,
  children,
  isDisabled,
  ...props
}: DropdownItemProps & DropdownItemVariants): JSX.Element {
  const className = get(props, 'className', null);

  const ddCtx: DropdownCtxTypes = useContext(DropdownContext);

  const { closeOnSelect, setIsOpen } = ddCtx;

  return (
    <button
      className={className}
      role="menuitem"
      onClick={() => {
        closeOnSelect ? setIsOpen(false) : null;
        onClick ? onClick() : null;
      }}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

const DropdownItemComponent = styled(DropdownItemFunction)<
  ThemeComponent & DropdownItemProps
>`
  ${({ componentCss }) => componentCss};
  font-family: 'Work Sans', sans serif;
  font-weight: 300;
  display: flex;
  transition: all 0.1s ease-in-out;

  svg:first-child:not(label svg) {
    margin-right: 10px;
  }

  svg:last-child:not(label svg) {
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
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownItemComponent,

      variantMapping: {
        isSelected: ({ isSelected }) => {
          if (isSelected) {
            return {
              bg: theme.components.dropdowns.selectedItemBg,
              iconColor: lightenOrDarken({
                color: theme.components.dropdowns.selectedItemBg,
                amount: 30
              })
            };
          }
        }
      },

      defaultStyleMapping: {
        xs: {
          bg: theme.components.dropdowns.bg,
          border: {
            ...theme.borders.xs,
            borderWidth: '0'
          },
          fontSize: '1rem',
          px: theme.spacing['3'],
          py: theme.spacing['2'],
          textColor: ({ contrastColor, bg }) => contrastColor(bg),
          iconColor: ({ textColor }) =>
            lightenOrDarken({ color: textColor, amount: 30 }),
          w: '100%',
          opacity: '1',
          pointerEvents: 'auto'
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
        },
        opacity: {
          _disabled: () => {
            return '0.5';
          }
        },
        pointerEvents: {
          _disabled: () => 'none'
        }
      },

      mapPropsToStyle: {
        textColor: ({ textColor }) => {
          return css`
            color: ${textColor};
          `;
        },
        iconColor: ({ iconColor }) => {
          return css`
            & > svg:not(label svg) {
              path {
                fill: ${iconColor};
              }
            }
          `;
        },
        border: ({ border }) => {
          return applyBorderStyle(border);
        },
        fontSize: ({ fontSize }) => {
          return css`
            font-size: ${fontSize};
          `;
        },
        pointerEvents: ({ pointerEvents }) => {
          return css`
            pointer-events: ${pointerEvents};
          `;
        }
      }
    };
  }
});

export default DropdownItem;
