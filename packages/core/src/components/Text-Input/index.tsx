import styled, { css } from 'styled-components';
import { ThemeComponent } from '../../theme';
import { Colors } from '../../theme/colors';
import { ThemeColors } from '../../theme/themeColors';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import lightenOrDarken from '../../utils/lightenOrDarken';

type TextInputTheme = {
  backgroundColor: string;
  border: Partial<BorderBreakpointStyle>;
  height: string;
  px: string;
  py: string;
  textColor?: string;
  width?: string;
};

type TextInputProps = {
  placeholder?: string;
};

type TextInputVariants = {
  color: keyof Colors | keyof ThemeColors;
  size: 'sm' | 'md';
  variant?: 'outline' | 'filled' | 'material';
};

type TextInputStates = '_hover' | '_active';

const TextInput = createThemedComponent<
  TextInputTheme,
  TextInputVariants,
  TextInputStates,
  TextInputProps
>({
  defaultVariants: {
    color: 'white',
    size: 'md',
    variant: 'outline'
  },
  states: ['_hover', '_active'],
  compose: ({ theme, variant }) => ({
    Component: styled.input.attrs(({ placeholder }) => ({
      type: 'text'
    }))<ThemeComponent & TextInputProps>`
      ${({ componentCss }) => componentCss};
      font-family: 'Work Sans', sans serif;
      font-weight: 300;
    `,

    variantMapping: {
      color: ({ color, variant }) => {
        if (variant === 'outline') {
          return {
            backgroundColor: theme['white'],
            border: {
              borderRadius: '8px'
            }
          };
        }
        if (variant === 'filled') {
          return {
            backgroundColor: theme['gray300'],
            border: {
              borderColor: 'transparent',
              borderRadius: '8px'
            }
          };
        }
        if (variant === 'material') {
          return {
            backgroundColor: theme['white'],
            border: {
              borderColor: 'none'
            }
          };
        }
      },
      size: ({ size }) => ({
        height: size === 'md' ? '18px' : '42px',
        py: size === 'md' ? `${theme.spacing['1']}` : `${theme.spacing['1']}`,
        width: '100%'
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
        py: `${theme.spacing['2']}`,
        width: '100%'
      },

      md: {
        px: `${theme.spacing['4']}`,
        py: `${theme.spacing['3']}`,
        width: '320px'
      }
    },

    cascadeStateProps: {
      backgroundColor: {
        _hover: ({ backgroundColor }) =>
          lightenOrDarken({ color: backgroundColor, amount: 3 }),
        _active: ({ _hover: { backgroundColor } }) =>
          lightenOrDarken({ color: backgroundColor, amount: 3 })
      }
    },

    mapPropsToStyle: {
      backgroundColor: ({ backgroundColor }) => css`
        background-color: ${backgroundColor};
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
        return applyBorderStyle({
          ...props.border
        });
      },
      px: ({ px }) => css`
        padding-left: ${px};
        padding-right: ${px};
      `,
      py: ({ py }) => css`
        padding-top: ${py};
        padding-bottom: ${py};
      `,
      width: ({ width }) => css`
        min-width: ${width};
      `
    }
  })
});

export default TextInput;
