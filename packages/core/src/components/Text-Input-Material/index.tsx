import styled, { css } from 'styled-components';
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

type TextInputMaterialTheme = {
  backgroundColor: string;
  border: Partial<BorderBreakpointStyle>;
  height: string;
  px: string;
  py: string;
  textColor?: string;
  width?: string;
};

type TextInputMaterialProps = {
  placeholder?: string;
  value?: string;
};

type TextInputMaterialVariants = {
  color: keyof Colors | keyof ThemeColors;
  size: 'sm' | 'md';
};

type TextInputMaterialStates = '_hover' | '_active' | '_focus';

const TextInputMaterial = createThemedComponent<
  TextInputMaterialTheme,
  TextInputMaterialVariants,
  TextInputMaterialStates,
  TextInputMaterialProps,
  Container
>({
  defaultVariants: {
    color: 'white',
    size: 'md'
  },
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => ({
    Component: styled.input.attrs(({ placeholder, value }) => ({
      type: 'text'
    }))<ThemeComponent & TextInputMaterialProps>`
      ${({ componentCss }) => componentCss};
      font-family: 'Work Sans', sans serif;
      font-weight: 300;
    `,

    variantMapping: {
      color: ({ color }) => {
        return {
          backgroundColor: theme['white'],
          border: {
            borderColor: 'none'
          }
        };
      },
      size: ({ size }) => ({
        height: size === 'md' ? '18px' : '42px'
        // py: size === 'md' ? `${theme.spacing['1']}` : `${theme.spacing['1']}`,
        // width: '100%'
      })
    },

    defaultStyleMapping: {
      xs: {
        backgroundColor: theme[variant.color],
        textColor: ({ contrastColor, backgroundColor }) =>
          contrastColor(backgroundColor),
        border: theme.borders.md,
        height: '42px',
        px: `${theme.spacing['3']}`,
        py: `${theme.spacing['3']}`,
        width: '100%'
      },

      sm: {
        width: '320px'
      },

      md: {
        px: `${theme.spacing['4']}`,
        py: `${theme.spacing['3']}`,
        width: '320px'
      }
    },

    cascadeStateProps: {
      backgroundColor: {
        _hover: ({ backgroundColor }) => {
          return lightenOrDarken({ color: backgroundColor, amount: 3 });
        },
        _active: ({ _hover: { backgroundColor } }) =>
          lightenOrDarken({ color: backgroundColor, amount: 3 })
      },
      border: {
        _focus: () => ({
          borderColor: theme['primary'],
          borderWidth: '1px',
          borderRadius: '8px'
        })
      }
    },

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
      border: props => {
        console.log('props -:> ', props);
        return css`
          border: none;
          border-bottom: 1px solid ${theme['gray500']};
          :focus,
          :active {
            border-color: ${theme['primary']};
          }
        `;
      },
      px: ({ px }) => css`
        padding-left: ${px};
        padding-right: ${px};
      `,
      py: ({ py }) => {
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

export default TextInputMaterial;
