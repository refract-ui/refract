import styled, { css } from 'styled-components';
import { ThemeComponent } from '../../theme';
import { ThemeColors } from '../../theme/themeColors';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import lightenOrDarken from '../../utils/lightenOrDarken';

type ButtonTheme = {
  backgroundColor: string;
  border: Partial<BorderBreakpointStyle>;
  height: string;
  px: string;
  py: string;
  textColor?: string;
  width?: string;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

type ButtonVariants = {
  color: keyof ThemeColors;
  size: 'sm' | 'md';
};

const ButtonComponent = styled.button<ThemeComponent & ButtonProps>`
  ${({ componentCss }) => componentCss};
`;

type ButtonStates = '_hover' | '_active';

const Button = createThemedComponent<
  ButtonTheme,
  ButtonVariants,
  ButtonStates,
  ButtonProps
>({
  defaultVariants: {
    color: 'primary',
    size: 'md'
  },
  states: ['_hover', '_active'],
  compose: ({ theme, variant }) => ({
    Component: ButtonComponent,

    variantMapping: {
      color: ({ color }) => ({
        backgroundColor: theme[color]
      }),
      size: ({ size }) => ({
        height: size === 'md' ? '52px' : '42px',
        py: size === 'md' ? `${theme.spacing['2']}` : `${theme.spacing['1']}`,
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
        width: '300px'
      }
    },

    cascadeStateProps: {
      backgroundColor: {
        _hover: ({ backgroundColor }) =>
          lightenOrDarken({ color: backgroundColor, amount: 10 }),
        _active: ({ _hover: { backgroundColor } }) =>
          lightenOrDarken({ color: backgroundColor, amount: 10 })
      }
    },

    mapPropsToStyle: {
      backgroundColor: ({ backgroundColor }) => css`
        background-color: ${backgroundColor};
      `,
      textColor: ({ backgroundColor, contrastColor }) => css`
        color: ${contrastColor(backgroundColor)};
        font-family: 'Work Sans', sans serif;
        font-size: 1rem;
        line-height: 19px;
      `,
      height: ({ height }) => css`
        height: ${height};
      `,
      border: props =>
        applyBorderStyle({
          borderColor: props.backgroundColor,
          ...props.border
        }),
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

export default Button;
