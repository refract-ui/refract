import styled, { css } from 'styled-components';
import { ThemeComponent } from '../../theme';
import { ThemeColors } from '../../theme/themeColors';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import lightenOrDarken from '../../utils/lightenOrDarken';

type ButtonTheme = {
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
};

type ButtonProps = {
  children?: React.ReactNode;
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
  ButtonProps,
  Container
>({
  defaultVariants: {
    color: 'primary',
    size: 'md'
  },
  states: ['_hover', '_active'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => ({
    Component: ButtonComponent,

    variantMapping: {
      color: ({ color }) => ({
        bg: theme[color]
      }),
      size: ({ size }) => ({
        h: size === 'md' ? '52px' : '42px',
        py: size === 'md' ? `${theme.spacing['2']}` : `${theme.spacing['1']}`,
        width: '100%'
      })
    },

    defaultStyleMapping: {
      xs: {
        bg: theme[variant.color],
        textColor: ({ contrastColor, bg }) => contrastColor(bg),
        border: theme.borders.md,
        h: '42px',
        px: `${theme.spacing['3']}`,
        py: `${theme.spacing['2']}`,
        w: '100%'
      },

      md: {
        px: `${theme.spacing['4']}`,
        py: `${theme.spacing['3']}`,
        w: '300px'
      }
    },

    cascadeStateProps: {
      bg: {
        _hover: ({ bg }) => lightenOrDarken({ color: bg, amount: 10 }),
        _active: ({ _hover: { bg } }) =>
          lightenOrDarken({ color: bg, amount: 10 })
      }
    },

    mapPropsToStyle: {
      textColor: ({ bg, contrastColor }) => css`
        color: ${contrastColor(bg)};
        font-family: 'Work Sans', sans serif;
        font-size: 1rem;
        line-height: 19px;
      `,
      border: props =>
        applyBorderStyle({
          borderColor: props.bg,
          ...props.border
        })
    }
  })
});

export default Button;
