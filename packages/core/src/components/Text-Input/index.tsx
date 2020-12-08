import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import { Colors } from '../../theme/colors';
import { ThemeColors } from '../../theme/themeColors';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import lightenOrDarken from '../../utils/lightenOrDarken';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import { Icons } from '../Icons/icons';
import InputIcon from './../Input-Icon';

type TextInputTheme = {
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
  iconStyle?: string;
};

type IconObject = {
  icon: keyof Icons;
  position: 'left' | 'right' | null;
};

type TextInputProps = {
  placeholder?: string;
  value?: string;
  success?: boolean;
  error?: boolean;
  id?: string;
  onChange?: (ev: any) => void;
  disabled?: boolean;
  icon?: keyof Icons | IconObject | null;
};

type TextInputVariants = {
  size?: 'sm' | 'md';
  filled?: boolean;
};

type TextInputStates = '_hover' | '_active' | '_focus' | '_disabled';

function TextInputFunction({
  placeholder,
  value,
  id,
  onChange,
  disabled,
  icon,
  ...props
}: TextInputProps & TextInputVariants): JSX.Element {
  const className = get(props, 'className', null);
  if (icon) {
    return (
      <>
        <InputIcon icon={icon} />
        <input
          className={className}
          placeholder={placeholder}
          value={value}
          id={id}
          onChange={onChange}
          disabled={disabled}
        />
      </>
    );
  } else {
    return (
      <input
        className={className}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
        disabled={disabled}
      />
    );
  }
}

const TextInputComponent = styled(TextInputFunction)<
  ThemeComponent & TextInputProps
>`
  ${({ componentCss }) => componentCss};
  font-family: 'Work Sans', sans serif;
  font-weight: 300;

  :focus,
  :active {
    outline: none;
  }

  :disabled {
    opacity: 0.5;
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
    filled: false
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
              bg: 'transparent',
              textColor: theme['dark'],
              border: {
                borderColor: theme['secondary']
              }
            };
          }
        },
        size: ({ size }) => {
          if (size === 'sm') {
            return {
              py: `${theme.spacing['0']}`
            };
          } else {
            return {
              py: `${theme.spacing['1']}`
            };
          }
        }
      },

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          textColor: ({ contrastColor, bg }) => contrastColor(bg),
          h: '42px',
          border: theme.borders.md,
          py: `0`,
          w: '100%',
          iconStyle: '0'
        },

        sm: {
          w: '320px'
        },

        md: {
          px: `${theme.spacing['4']}`,
          w: '320px'
        }
      },

      // hover, active state handling here:
      cascadeStateProps: {
        border: {
          _hover: props => {
            return {
              borderColor: theme['dark']
            };
          },
          _focus: () => ({
            borderColor: theme['primary']
          }),
          _disabled: props => {
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
        iconStyle: ({ componentProps: { icon } }) => {
          const iconPosition = get(icon, 'position', 'left');
          if (icon && iconPosition === 'left') {
            return css`
              padding-left: 2.5rem !important;
            `;
          }
          if (icon && iconPosition === 'right') {
            return css`
              padding-right: 2.5rem !important;
            `;
          }
          return css``;
        },
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

export default TextInput;
