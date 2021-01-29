import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';

import Icon from '../Icons';
import { Icons } from '../Icons/icons';

type StyledCheckboxTheme = {
  border?: Partial<BorderBreakpointStyle>;
  checkedIconColor?: string;
  outline?: string;
  outlineColor?: string;
};

type StyledCheckboxProps = {
  children?: any;
  HiddenCheckbox?: any;
  iconColor?: string;
  iconName?: keyof Icons;
  isDisabled?: boolean;
  isFocused?: boolean;
  isRequired?: boolean;
  name?: string;
  onChange?: (event: any) => void;
  value?: string | number;
};

type StyledCheckboxVariants = {
  checkedColor?: string;
  hasErrors?: boolean;
  isChecked?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

type StyledCheckboxStates = '_hover' | '_active' | '_focus' | '_disabled';

function StyledCheckboxFunction({
  iconName,
  isChecked,
  ...props
}: StyledCheckboxProps & StyledCheckboxVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <div className={className} aria-hidden>
      {isChecked && <Icon name={iconName ? iconName : 'Check'} />}
    </div>
  );
}

const StyledCheckboxComponent = styled(StyledCheckboxFunction)<
  ThemeComponent & StyledCheckboxProps
>`
  ${({ componentCss, ...props }) => {
    return componentCss;
  }};
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const StyledCheckbox = createThemedComponent<
  StyledCheckboxTheme,
  StyledCheckboxVariants,
  StyledCheckboxStates,
  StyledCheckboxProps,
  Container
>({
  defaultVariants: {
    checkedColor: null,
    hasErrors: false,
    isChecked: false,
    size: 'md'
  },
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: StyledCheckboxComponent,

      variantMapping: {
        isChecked: ({ isChecked, checkedColor }) => {
          if (isChecked) {
            return {
              bg: checkedColor ? checkedColor : theme.primary,
              border: {
                ...theme.borders.xs,
                borderWidth: '0'
              }
            };
          }
        },
        hasErrors: ({ hasErrors }) => {
          if (hasErrors) {
            return {
              border: {
                ...theme.borders.xs,
                borderColor: theme.danger
              }
            };
          }
        },
        size: ({ size }) => {
          if (size === 'sm') {
            return {
              h: '12px',
              w: '12px'
            };
          }
          if (size === 'md') {
            return;
          }
          if (size === 'lg') {
            return {
              h: '20px',
              w: '20px'
            };
          }
        }
      },
      defaultStyleMapping: {
        xs: {
          bg: 'none',
          border: {
            ...theme.borders.xs,
            borderWidth: '1px',
            borderColor: theme.secondary
          },
          h: '16px',
          checkedIconColor: ({ contrastColor, bg }) => contrastColor(bg),
          mr: theme.spacing['2'],
          outline: 'none',
          outlineColor: theme.primary,
          w: '16px'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
        border: ({ border, ...props }) => {
          return applyBorderStyle(border);
        },
        outline: ({ componentProps: { HiddenCheckbox }, outlineColor }) => {
          return css`
            ${HiddenCheckbox}:focus + & {
              box-shadow: 0 0px 3px ${outlineColor};
              /* outline: ${outlineColor} solid 1px; */
            }
          `;
        },
        checkedIconColor: ({
          checkedIconColor,
          componentProps: { iconColor }
        }) => {
          return css`
            svg {
              width: auto;
              height: auto;
              path {
                fill: ${iconColor ? iconColor : checkedIconColor};
              }
            }
          `;
        }
      }
    };
  }
});

export default StyledCheckbox;
