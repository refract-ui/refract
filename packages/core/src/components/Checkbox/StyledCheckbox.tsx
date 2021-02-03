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
  isRequired?: boolean;
  name?: string;
  onChange?: (event: any) => void;
  value?: string | number;
};

type StyledCheckboxVariants = {
  checkedColor?: string;
  hasErrors?: boolean;
  isChecked?: boolean;
  isIndeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

type StyledCheckboxStates = '_hover' | '_active' | '_focus' | '_disabled';

function StyledCheckboxFunction({
  iconName,
  isChecked,
  isIndeterminate,
  ...props
}: StyledCheckboxProps & StyledCheckboxVariants): JSX.Element {
  const className = get(props, 'className', null);

  let renderedIcon: React.ReactNode;

  if (isIndeterminate) {
    renderedIcon = <Icon name="DotsHorizontal" />;
  }

  if (!isIndeterminate && isChecked) {
    renderedIcon = <Icon name={iconName ? iconName : 'Check'} />;
  }

  return (
    <div className={className} aria-hidden>
      {renderedIcon}
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
  transition: background 0.2s;
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
    isIndeterminate: false,
    size: 'md'
  },
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    const themeColorToUse = theme.components.checkboxes.checkedBg
      ? theme.components.checkboxes.checkedBg
      : theme.components.inputs.activeColor;
    return {
      Component: StyledCheckboxComponent,

      variantMapping: {
        isChecked: ({ isChecked, isIndeterminate, checkedColor }) => {
          if (isChecked || isIndeterminate) {
            return {
              bg: checkedColor ? checkedColor : themeColorToUse,
              border: {
                ...theme.components.checkboxes.borders,
                borderWidth: '0'
              }
            };
          }
        },
        hasErrors: ({ hasErrors }) => {
          if (hasErrors) {
            return {
              border: {
                ...theme.components.checkboxes.borders,
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
            ...theme.components.checkboxes.borders
          },
          h: '16px',
          checkedIconColor: ({ contrastColor, bg }) => contrastColor(bg),
          mr: theme.spacing['2'],
          outline: 'none',
          outlineColor: themeColorToUse,
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
