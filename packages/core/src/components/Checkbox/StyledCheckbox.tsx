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

type StyledCheckboxTheme = {
  border?: Partial<BorderBreakpointStyle>;
  outline?: string;
  outlineColor?: string;
};

type StyledCheckboxProps = {
  children?: any;
  HiddenCheckbox?: any;
  isDisabled?: boolean;
  isFocused?: boolean;
  isRequired?: boolean;
  name?: string;
  onChange?: (event: any) => void;
  value?: string | number;
};

type StyledCheckboxVariants = {
  hasErrors?: boolean;
  isChecked?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

type StyledCheckboxStates = '_hover' | '_active' | '_focus' | '_disabled';

function StyledCheckboxFunction({
  isChecked,
  ...props
}: StyledCheckboxProps & StyledCheckboxVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <div className={className} aria-hidden>
      {isChecked && <Icon name="Check" iconColor="white" />}
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
        isChecked: ({ isChecked }) => {
          if (isChecked) {
            return {
              bg: theme.primary
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
        }
      }
    };
  }
});

export default StyledCheckbox;
