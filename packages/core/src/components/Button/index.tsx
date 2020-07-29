import styled, { css } from 'styled-components';
import { ThemeComponent } from '../../theme';
import { ThemeColors } from '../../theme/themeColors';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import lightenOrDarken from '../../utils/lightenOrDarken';

type ButtonTheme = {
  backgroundColor: string;
  px: string;
  py: string;
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
};

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

type ButtonVariants = {
  color: keyof ThemeColors;
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
    color: 'primary'
  },
  states: ['_hover', '_active'],
  compose: ({ theme, variant }) => ({
    Component: ButtonComponent,

    variantMapping: {
      color: ({ color }) => ({
        backgroundColor: theme[color]
      })
    },

    defaultStyleMapping: {
      xs: {
        backgroundColor: theme[variant.color],
        textColor: ({ contrastColor, backgroundColor }) =>
          contrastColor(backgroundColor),
        border: theme.borders.xs,
        px: `${theme.spacing['3']}`,
        py: `${theme.spacing['2']}`
      },

      md: {
        border: theme.borders.md,
        px: `${theme.spacing['4']}`,
        py: `${theme.spacing['3']}`
      }
    },

    cascadeStateProps: {
      backgroundColor: {
        _hover: ({ backgroundColor }) =>
          lightenOrDarken({ color: backgroundColor, amount: 5 }),
        _active: ({ _hover: { backgroundColor } }) =>
          lightenOrDarken({ color: backgroundColor, amount: 5 })
      }
    },

    mapPropsToStyle: {
      backgroundColor: ({ backgroundColor }) => css`
        background-color: ${backgroundColor};
      `,
      textColor: ({ backgroundColor, contrastColor }) => css`
        color: ${contrastColor(backgroundColor)};
      `,
      border: props => applyBorderStyle(props.border),
      px: ({ px }) => css`
        padding-left: ${px};
        padding-right: ${px};
      `,
      py: ({ py }) => css`
        padding-top: ${py};
        padding-bottom: ${py};
      `
    }
  })
});

export default Button;
