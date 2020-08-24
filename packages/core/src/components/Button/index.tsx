import React from 'react';
import { get } from 'lodash';
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
import { Icons } from '../Icon/icons';
import Icon from '../Icon';

// reduce to sets of types (text, box, etc.)?
type ButtonTheme = {
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
};

type ButtonVariants = {
  color: keyof ThemeColors;
  size?: 'sm' | 'md';
  variant?: 'outline' | 'subtle' | 'link' | null;
  iconLeft?: keyof Icons | null;
  iconRight?: keyof Icons | null;
  icon?: keyof Icons | null;
};

type ButtonStates = '_hover' | '_active';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

function ButtonFunction({
  children,
  onClick,
  icon,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps & ButtonVariants): JSX.Element {
  const className = get(props, 'className', null);
  return (
    <button className={className} onClick={onClick}>
      {iconLeft && <Icon name={iconLeft} />}
      {!children && icon && <Icon name={icon} />}
      {children && children}
      {iconRight && <Icon name={iconRight} />}
    </button>
  );
}

ButtonFunction.defaultProps = {
  children: null,
  onClick: null
};

// move defaults to `text`
const ButtonComponent = styled(ButtonFunction)<ThemeComponent & ButtonProps>`
  ${({ componentCss }) => componentCss};
  // display: inline-flex;
  font-family: 'Work Sans', sans serif;
  font-size: 1rem;
  line-height: 19px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
    variant: null,
    icon: null,
    iconLeft: null,
    iconRight: null
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
