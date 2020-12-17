import React from 'react';
import styled, { css } from 'styled-components';
import { get, find, pick } from 'lodash';
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
  color?: keyof ThemeColors;
  onClick?: (ev: any) => void;
};

type TextInputProps = {
  placeholder?: string;
  value?: string;
  success?: boolean;
  error?: boolean;
  id?: string;
  onChange?: (ev: any) => void;
  disabled?: boolean;
  icons?: Array<IconObject | null>;
  type?: string;
};

type TextInputVariants = {
  size?: 'sm' | 'md';
  filled?: boolean;
  isFullWidth?: boolean;
  noBorderLeft?: boolean;
  noBorderRight?: boolean;
};

type TextInputStates = '_hover' | '_active' | '_focus' | '_disabled';

function TextInputFunction({
  placeholder,
  value,
  id,
  onChange,
  disabled,
  icons,
  type,
  ...props
}: TextInputProps & TextInputVariants): JSX.Element {
  const className = get(props, 'className', null);
  if (icons) {
    return (
      <>
        {icons &&
          icons.map((ic, idx) => {
            const icon = pick(ic, ['icon', 'position']);
            return (
              <InputIcon
                icon={icon}
                key={`input-group-icon-${idx}`}
                color={ic.color}
                onClick={ic.onClick}
              />
            );
          })}
        <input
          className={className}
          placeholder={placeholder}
          value={value}
          id={id}
          onChange={onChange}
          disabled={disabled}
          type={type}
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
        type={type}
      />
    );
  }
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
    isFullWidth: false,
    noBorderLeft: false,
    noBorderRight: false
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
        },
        noBorderLeft: ({ noBorderLeft, noBorderRight }) => {
          if (noBorderLeft && !noBorderRight) {
            return {
              border: {
                ...theme.borders.md,
                borderRadius: `0 ${theme.spacing[2]} ${theme.spacing[2]} 0`
              }
            };
          }

          if (noBorderRight && !noBorderLeft) {
            return {
              border: {
                ...theme.borders.md,
                borderRadius: `${theme.spacing[2]} 0 0 ${theme.spacing[2]}`
              }
            };
          }

          if (noBorderLeft && noBorderRight) {
            return {
              border: {
                ...theme.borders.md,
                borderRadius: `0`
              }
            };
          }
        }
      },

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          textColor: ({ contrastColor, bg }) => contrastColor(bg),
          h: '54px',
          border: theme.borders.md,
          py: `0`,
          w: '100%',
          iconStyle: '0'
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
        iconStyle: ({ componentProps: { icons } }) => {
          if (
            icons &&
            find(icons, ['position', 'left']) &&
            !find(icons, ['position', 'right'])
          ) {
            return css`
              padding-left: 2.5rem !important;
            `;
          }
          if (
            icons &&
            find(icons, ['position', 'left']) &&
            find(icons, ['position', 'right'])
          ) {
            return css`
              padding-left: 2.5rem !important;
              padding-right: 2.5rem !important;
            `;
          }
          if (
            icons &&
            find(icons, ['position', 'right']) &&
            !find(icons, ['position', 'left'])
          ) {
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
