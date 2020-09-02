import React from 'react';
import styled, { css } from 'styled-components';
import { get, isObject } from 'lodash';
import { ThemeComponent } from '../../theme';
import { ThemeColors } from '../../theme/themeColors';
import { ThemeColorShades } from '../../theme/themeColorShades';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import lightenOrDarken from '../../utils/lightenOrDarken';
import { Icons } from '../Icons/icons';
import Icon from '../Icons';

// reduce to sets of types (text, box, etc.)?
type ButtonTheme = {
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
  fontSize?: string;
  width?: string;
};

type IconObject = {
  icon: keyof Icons;
  position: 'left' | 'right' | null;
};

type ButtonVariants = {
  color: keyof ThemeColors;
  size: 'sm' | 'md';
  variant: 'outline' | 'subtle' | null;
};

type ButtonStates = '_hover' | '_active';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  icon?: keyof Icons | IconObject | null;
};

function ButtonFunction({
  children,
  onClick,
  icon,
  ...props
}: ButtonProps & ButtonVariants): JSX.Element {
  const className = get(props, 'className', null);

  const useIcon = isObject(icon) ? get(icon, 'icon', null) : icon;
  const iconPosition = isObject(icon) ? get(icon, 'position', 'left') : 'left';
  // console.log('{ useIcon, iconPosition }', { useIcon, iconPosition });

  return (
    <button className={className} onClick={onClick}>
      {icon && iconPosition === 'left' && children && (
        <Icon name={useIcon as keyof Icons} />
      )}
      {children}
      {icon && !children && <Icon name={useIcon as keyof Icons} />}
      {icon && iconPosition === 'right' && children && (
        <Icon name={useIcon as keyof Icons} />
      )}
    </button>
  );
}

ButtonFunction.defaultProps = {
  children: null,
  onClick: null,
  icon: null
};

const ButtonComponent = styled(ButtonFunction)<ThemeComponent & ButtonProps>`
  ${({ componentCss }) => componentCss};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: 'Work Sans', sans serif;
  line-height: 18px;
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
  compose: ({ theme, variant }) => ({
    Component: ButtonComponent,

    variantMapping: {
      color: ({ color }) => ({
        bg: theme[color]
      }),
      size: ({ size }) => ({
        py: size === 'md' ? '1rem' : '0.6875rem',
        px: size === 'md' ? '1rem' : '0.6875rem'
      }),
      variant: ({ variant, color }) => {
        if (variant === 'outline') {
          return {
            bg: theme.white,
            textColor: theme[`${color}700` as keyof ThemeColorShades],
            borderColor: theme[`${color}700` as keyof ThemeColorShades],
            border: {
              ...theme.borders.md
            }
          };
        }

        if (variant === 'subtle') {
          return {
            bg: theme[`${color}400` as keyof ThemeColorShades],
            borderColor: theme[`${color}400` as keyof ThemeColorShades],
            textColor: theme[`${color}900` as keyof ThemeColorShades]
          };
        }

        return {
          bg: theme[color],
          borderColor: theme[color],
          textColor: theme.white
        };
      }
    },

    defaultStyleMapping: {
      xs: {
        bg: theme[variant.color],
        textColor: ({ contrastColor, bg }) => contrastColor(bg),
        border: {
          ...theme.borders.md
        },
        fontSize: '1rem',
        px: '1rem',
        py: '0.75rem',
        w: '100%',
        width: 'unset'
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
      textColor: ({ textColor }) => css`
        color: ${textColor};
        svg {
          path {
            fill: ${textColor};
          }
        }
      `,
      fontSize: ({ fontSize, componentProps: { icon, children } }) => {
        const iconPosition = get(icon, 'position', 'left');
        const leftIcon = icon && children && iconPosition === 'left';
        const rightIcon = icon && children && iconPosition === 'right';
        return css`
          font-size: ${fontSize};
          svg {
            height: ${fontSize};
            width: ${fontSize};
            margin-right: ${leftIcon && `${fontSize}`};
            margin-left: ${rightIcon && `${fontSize}`};
          }
        `;
      },
      border: props => {
        const {
          componentProps: { icon, children }
        } = props;

        return applyBorderStyle({
          borderColor:
            variant.variant === 'outline' ? props.textColor : props.bg,
          borderWidth: icon && !children ? '2px' : '1px',
          ...props.border
        });
      },
      width: ({ componentProps: { icon } }) => {
        return css`
          width: ${icon && 'initial !important'};
        `;
      }
    }
  })
});

export default Button;
