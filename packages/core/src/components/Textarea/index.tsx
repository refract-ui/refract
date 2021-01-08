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

type TextareaTheme = {
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
};

type TextareaProps = {
  placeholder?: string;
  value?: string;
  success?: boolean;
  error?: boolean;
  id?: string;
  onChange?: (ev: any) => void;
  disabled?: boolean;
  maxLength?: number;
  ref?: any;
};

type TextareaVariants = {
  filled?: boolean;
  isFullWidth?: boolean;
};

type TextareaStates = '_hover' | '_active' | '_focus' | '_disabled';

function TextareaFunction({
  placeholder,
  value,
  id,
  onChange,
  disabled,
  maxLength,
  ref,
  ...props
}: TextareaProps & TextareaVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <textarea
      className={`${className} gfx-text-input`}
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={onChange}
      disabled={disabled}
      maxLength={maxLength}
      ref={ref}
    />
  );
}

const TextareaComponent = styled(TextareaFunction)<
  ThemeComponent & TextareaProps
>`
  ${({ componentCss }) => componentCss};
  box-sizing: border-box;
  font-family: 'Work Sans', sans serif;
  transition: all 0.3s ease-in-out;
  font-weight: 300;
`;

const Textarea = createThemedComponent<
  TextareaTheme,
  TextareaVariants,
  TextareaStates,
  TextareaProps,
  Container
>({
  defaultVariants: {
    filled: false,
    isFullWidth: false
  },
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: TextareaComponent,

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
          h: '161px',
          border: theme.components.inputs.borders,
          px: `${theme.spacing['2']}`,
          py: `${theme.spacing['2']}`,
          w: '100%'
        },

        sm: {
          w: variant.isFullWidth ? '100%' : '320px',
          px: `${theme.spacing['3']}`,
          py: `${theme.spacing['3']}`
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
        }) => {
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

export default Textarea;
