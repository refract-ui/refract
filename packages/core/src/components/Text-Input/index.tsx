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

type TextInputTheme = {
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
};

type TextInputProps = {
  placeholder?: string;
  value?: string;
  success?: boolean;
  error?: boolean;
  id?: string;
  onChange?: (ev: any) => void;
  disabled?: boolean;
  type?: string;
  maxLength?: number;
  ref?: any;
};

type TextInputVariants = {
  size?: 'sm' | 'md';
  filled?: boolean;
  isFullWidth?: boolean;
};

type TextInputStates = '_hover' | '_active' | '_focus' | '_disabled';

function TextInputFunction({
  placeholder,
  value,
  id,
  onChange,
  disabled,
  type,
  maxLength,
  ref,
  ...props
}: TextInputProps & TextInputVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <input
      className={`${className} gfx-text-input`}
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={onChange}
      disabled={disabled}
      type={type}
      maxLength={maxLength}
      ref={ref}
    />
  );
}

const TextInputComponent = styled(TextInputFunction)<
  ThemeComponent & TextInputProps
>`
  ${({ componentCss }) => componentCss};
  box-sizing: border-box;
  font-family: 'Work Sans', sans serif;
  font-weight: 300;
  min-width: 0;
  transition: all 0.3s ease-in-out;

  :focus,
  :active {
    outline: none;
  }

  :disabled {
    opacity: 0.5;
  }

  ::placeholder {
    opacity: 0.7;
  }
`;

const TextInput = createThemedComponent<
  TextInputTheme,
  TextInputVariants,
  TextInputStates,
  TextInputProps,
  Container
>({
  defaultVariants: {
    size: 'md',
    filled: false,
    isFullWidth: false
  },
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: TextInputComponent,

      variantMapping: {
        filled: ({ filled }) => {
          if (filled) {
            return {
              bg: theme['gray300'],
              border: {
                borderColor: 'transparent'
              }
            };
          } else {
            return {
              bg: theme.components.inputs.bg,
              textColor: theme['dark'],
              border: {
                borderColor: theme.components.inputs.borders.borderColor
              }
            };
          }
        },
        size: ({ size }) => {
          if (size === 'sm') {
            return {
              py: `${theme.spacing['0']}`,
              h: '42px'
            };
          } else {
            return {
              py: `${theme.spacing['1']}`
            };
          }
        },
        isFullWidth: ({ isFullWidth }) => {
          if (isFullWidth) {
            return {
              w: '100%'
            };
          }
        }
      },

      defaultStyleMapping: {
        xs: {
          bg: theme.components.inputs.bg,
          textColor: ({ contrastColor, bg }) => contrastColor(bg),
          h: '54px',
          border: theme.components.inputs.borders,
          py: `0`,
          w: '100%'
        },

        sm: {
          w: variant.isFullWidth ? '100%' : '320px'
        },

        md: {
          px: `${theme.spacing['4']}`
        }
      },

      // hover, active state handling here:
      cascadeStateProps: {
        border: {
          _hover: () => {
            return {
              borderColor: theme['dark']
            };
          },
          _focus: () => ({
            borderColor: theme['primary']
          }),
          _disabled: () => {
            return {
              borderColor: theme['secondary']
            };
          }
        }
      },

      mapPropsToStyle: {
        textColor: ({ textColor }) => css`
          color: ${textColor};
          font-size: 1rem;
          line-height: 19px;
        `,
        border: ({
          componentProps: { success, error },
          border: { borderColor, borderWidth, borderStyle, borderRadius }
        }: any) => {
          if (success) {
            return applyBorderStyle({
              borderColor: theme['success'],
              borderWidth,
              borderStyle,
              borderRadius
            });
          }
          if (error) {
            return applyBorderStyle({
              borderColor: theme['danger'],
              borderWidth,
              borderStyle,
              borderRadius
            });
          }
          return applyBorderStyle({
            borderColor,
            borderWidth,
            borderStyle,
            borderRadius
          });
        }
      }
    };
  }
});

export default TextInput;
