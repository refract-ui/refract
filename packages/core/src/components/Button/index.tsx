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

export type ButtonTheme = {
  border?: Partial<BorderBreakpointStyle>;
  textColor?: string;
  fontSize?: string;
  width?: string;
};

type IconObject = {
  icon: keyof Icons;
  position?: 'left' | 'right';
};

type ButtonVariants = {
  color: keyof ThemeColors;
  fillStyle: 'outline' | 'subtle';
  enormity: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

export type ButtonStates = '_hover' | '_active';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  icon?: keyof Icons | IconObject;
};

const ButtonComponent: React.FC<ThemeComponent & ButtonProps> = ({
  icon,
  componentCss,
  children,
  ...props
}) => {
  let iconPosition: 'left' | 'right' = 'left';
  let useIcon: keyof Icons = null;

  if (icon) {
    useIcon = isObject(icon) ? icon.icon : icon;
    iconPosition = isObject(icon) ? get(icon, 'position', 'left') : 'left';
  }

  return (
    <button {...props}>
      {icon && iconPosition === 'left' && children && <Icon name={useIcon} />}
      {children}
      {icon && !children && <Icon name={useIcon} />}
      {icon && iconPosition === 'right' && children && <Icon name={useIcon} />}
    </button>
  );
};

const StyledButtonComponent = styled(ButtonComponent)<ThemeComponent>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  ${({ componentCss }) =>
    css`
      ${componentCss}
    `}
`;

const Button = createThemedComponent<
  ButtonTheme,
  ButtonVariants,
  ButtonStates,
  ButtonProps,
  Container,
  React.HTMLProps<HTMLButtonElement>
>({
  defaultVariants: {
    color: 'primary',
    enormity: 'md',
    fillStyle: null
  },

  states: ['_hover', '_active'],

  extend: mapDivContainerPropsToStyles,

  compose: ({ theme }) => ({
    Component: StyledButtonComponent,

    variantMapping: {
      color: ({ color }) => {
        return {
          bg: theme.themeColors[color]
        };
      },

      enormity: ({ enormity }) => ({
        py: enormity === 'md' ? '1rem' : '0.6875rem',
        px: enormity === 'md' ? '1rem' : '0.6875rem'
      }),

      fillStyle: ({ fillStyle, color }) => {
        if (fillStyle === 'outline') {
          return {
            bg: theme.colors.white,
            textColor:
              theme.themeColorShades[`${color}700` as keyof ThemeColorShades],
            border: {
              ...theme.borders.md,
              borderColor:
                theme.themeColorShades[`${color}700` as keyof ThemeColorShades]
            }
          };
        }

        if (fillStyle === 'subtle') {
          return {
            bg: theme.themeColorShades[`${color}400` as keyof ThemeColorShades],
            textColor:
              theme.themeColorShades[`${color}900` as keyof ThemeColorShades],
            border: {
              borderColor:
                theme.themeColorShades[`${color}400` as keyof ThemeColorShades]
            }
          };
        }

        return {
          bg: theme.themeColors[color as keyof ThemeColors],
          border: {
            borderColor: theme.themeColors[color as keyof ThemeColors]
          },
          textColor: theme.colors.white
        };
      }
    },

    defaultStyleMapping: theme.components.buttons,

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
      }

      /*
      border: props => {
      const {
      componentProps: { icon, children }
      } = props;

      return applyBorderStyle({
      borderColor:
      variant.fillStyle === 'outline' ? props.textColor : props.bg,
      borderWidth: icon && !children ? '2px' : '1px',
      ...props.border
      });
      }
      */
    }
  })
});

export default Button;
