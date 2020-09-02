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

type TextInputTheme = {
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
};

type TextInputProps = {
  placeholder?: string;
  value?: string;
};

type TextInputVariants = {
  size?: 'sm' | 'md';
  filled?: boolean;
};

type TextInputStates = '_hover' | '_active' | '_focus';

function TextInputFunction({
  placeholder,
  value,
  ...props
}: TextInputProps & TextInputVariants): JSX.Element {
  const className = get(props, 'className', null);
  return (
    <input className={className} placeholder={placeholder} value={value} />
  );
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
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    console.log('In index.tsx, this is variant: ', variant);
    console.log('In index.tsx, this is theme: ', theme);

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
          px: `${theme.spacing['3']}`,
          py: `0`,
          w: '100%'
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
          _focus: () => ({
            borderColor: theme['primary']
          }),
          _hover: props => {
            return {
              borderColor: theme['dark']
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
        border: props =>
          applyBorderStyle({
            borderColor: props.bg,
            ...props.border
          })
      }
    };
  }
});

export default TextInput;
