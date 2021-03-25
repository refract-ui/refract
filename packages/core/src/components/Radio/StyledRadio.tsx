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

type StyledRadioTheme = {
  border?: Partial<BorderBreakpointStyle>;
  checkedIconColor?: string;
  outline?: string;
  outlineColor?: string;
};

type StyledRadioProps = {
  children?: any;
  HiddenRadio?: any;
  iconColor?: string;
  iconName?: keyof Icons;
  isDisabled?: boolean;
  isRequired?: boolean;
  name?: string;
  onChange?: (event: any) => void;
  value?: string | number;
};

type StyledRadioVariants = {
  checkedColor?: string;
  iconName?: string;
  hasErrors?: boolean;
  isChecked?: boolean;
  isIndeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

type StyledRadioStates = '_hover' | '_active' | '_focus' | '_disabled';

function StyledRadioFunction({
  iconName,
  isChecked,
  isIndeterminate,
  ...props
}: StyledRadioProps & StyledRadioVariants): JSX.Element {
  const className = get(props, 'className', null);

  let renderedIcon: React.ReactNode;

  if (isIndeterminate) {
    renderedIcon = <Icon name="DotsHorizontal" />;
  }

  if (!isIndeterminate && isChecked) {
    if (iconName) {
      renderedIcon = <Icon name={iconName} />;
    } else {
      renderedIcon = null;
    }
  }

  return (
    <div className={className} aria-hidden>
      {renderedIcon}
    </div>
  );
}

const StyledRadioComponent = styled(StyledRadioFunction)<
  ThemeComponent & StyledRadioProps
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

const StyledRadio = createThemedComponent<
  StyledRadioTheme,
  StyledRadioVariants,
  StyledRadioStates,
  StyledRadioProps,
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
    const themeColorToUse = theme.components.radios.selectedBorderColor
      ? theme.components.radios.selectedBorderColor
      : theme.components.inputs.activeColor;
    return {
      Component: StyledRadioComponent,
      variantMapping: {
        isChecked: ({ isChecked, isIndeterminate, checkedColor }) => {
          if (isChecked || isIndeterminate) {
            return {
              border: {
                ...theme.components.radios.borders,
                borderColor: checkedColor ? checkedColor : themeColorToUse,
                borderWidth: '4px'
              }
            };
          }
        },
        hasErrors: ({ hasErrors }) => {
          if (hasErrors) {
            return {
              border: {
                ...theme.components.radios.borders,
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
            ...theme.components.radios.borders
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
          if (props.componentProps.iconName) {
            border.borderWidth = '1px';
          }
          return applyBorderStyle(border);
        },
        outline: ({ componentProps: { HiddenRadio }, outlineColor }) => {
          return css`
            ${HiddenRadio}:focus + & {
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

export default StyledRadio;
