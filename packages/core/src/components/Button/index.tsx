import React from 'react';
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

type ButtonVariants = {
  color: keyof ThemeColors;
  size: 'sm' | 'md';
  variant: 'outline' | null;
};

type ButtonStates = '_hover' | '_active';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

function ButtonFunction({
  children,
  onClick,
  ...props
}: ButtonProps & ButtonVariants): JSX.Element {
  console.log('props', props);
  return <button onClick={onClick}>{children}</button>;
}

ButtonFunction.defaultProps = {
  children: null,
  onClick: null
};

const ButtonComponent = styled.button<ThemeComponent & ButtonProps>`
  ${({ componentCss }) => componentCss};
  &:hover {
    cursor: pointer;
  }
`;

const Button = createThemedComponent<
  ButtonTheme,
  ButtonVariants,
  ButtonStates,
  ButtonProps,
  Container
>({
  defaultVariants: {
    color: 'primary',
    size: 'md',
    variant: null
  },
  states: ['_hover', '_active'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    console.log('theme', theme);
    return {
      Component: ButtonComponent,

      variantMapping: {
        color: ({ color }) => ({
          bg: theme[color]
        }),
        size: ({ size }) => ({
          py: size === 'md' ? '0.75rem' : '0.6875rem',
          px: size === 'md' ? '1rem' : '0.75rem',
          width: '100%'
        }),
        variant: ({ variant, color }) => ({
          bg: theme[color],
          borderColor: theme[color],
          textColor: theme.white
        })
      },

      defaultStyleMapping: {
        xs: {
          bg: theme[variant.color],
          textColor: ({ contrastColor, bg }) => contrastColor(bg),
          border: theme.borders.md,
          px: '1rem',
          py: '0.75rem',
          w: '100%'
        },

        md: {
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
    };
  }
});

export default Button;
