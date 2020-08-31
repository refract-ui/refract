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
  backgroundColor: string;
  border: Partial<BorderBreakpointStyle>;
  height: string;
  px: string;
  py?: string;
  textColor?: string;
  width?: string;
};

type TextInputProps = {
  placeholder?: string;
  value?: string;
};

type TextInputVariants = {
  color: keyof Colors | keyof ThemeColors;
  size?: 'sm' | 'md';
  filled?: boolean;
};

type TextInputStates = '_hover' | '_active' | '_focus';

function TextInputFunction({
  placeholder,
  value,
  ...props
}: TextInputProps & TextInputVariants): JSX.Element {
  console.log('props', props);
  const className = get(props, 'className', null);
  return (
    <input className={className} placeholder={placeholder} value={value} />
  );
}

const TextInputComponent = styled(TextInputFunction)<
  ThemeComponent & TextInputProps
>`
  ${({ componentCss }) => {
    console.log('componentCss', componentCss);
    return componentCss;
  }};
  font-family: 'Work Sans', sans serif;
  font-weight: 300;
`;

const TextInput = createThemedComponent<
  TextInputTheme,
  TextInputVariants,
  TextInputStates,
  TextInputProps,
  Container
>({
  defaultVariants: {
    color: 'white',
    size: 'md',
    filled: false
  },
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => ({
    Component: TextInputComponent,

    variantMapping: {
      color: ({ color, filled }) => {
        if (!filled) {
          return {
            backgroundColor: theme['white'],
            border: {
              borderColor: theme['secondary'],
              borderRadius: '8px'
            }
          };
        }
        if (filled) {
          return {
            backgroundColor: theme['gray300'],
            border: {
              borderColor: 'transparent',
              borderRadius: '8px'
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
        backgroundColor: theme[variant.color],
        textColor: ({ contrastColor, backgroundColor }) =>
          contrastColor(backgroundColor),
        border: theme.borders.md,
        height: '42px',
        px: `${theme.spacing['3']}`,
        py: `0`,
        width: '100%'
      },

      sm: {
        width: '320px'
      },

      md: {
        px: `${theme.spacing['4']}`,
        width: '320px'
      }
    },

    cascadeStateProps: {},

    mapPropsToStyle: {
      backgroundColor: ({ backgroundColor }) => css`
        background-color: ${backgroundColor};

        :focus,
        :active {
          outline: none;
        }
      `,
      textColor: ({ backgroundColor, contrastColor }) => css`
        color: ${contrastColor(backgroundColor)};
        font-size: 1rem;
        line-height: 19px;
      `,
      height: ({ height }) => css`
        height: ${height};
      `,
      border: props =>
        applyBorderStyle({
          borderColor: props.bg,
          ...props.border
        }),
      px: ({ px }) => css`
        padding-left: ${px};
        padding-right: ${px};
      `,
      py: ({ py, ...props }) => {
        console.log('In py, this is props: ', props);
        console.log('py', py);
        return css`
          padding-top: ${py};
          padding-bottom: ${py};
        `;
      },
      width: ({ width }) => css`
        width: ${width};
      `
    }
  })
});

export default TextInput;
