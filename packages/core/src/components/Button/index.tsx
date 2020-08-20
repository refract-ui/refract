import React from 'react';
import { get } from 'lodash';
import styled, { css } from 'styled-components';
import { ThemeComponent } from '../../theme';
import { ThemeColors } from '../../theme/themeColors';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import lightenOrDarken from '../../utils/lightenOrDarken';
import contrastColor from '../../utils/contrastColor';
import { Icons } from '../Icon/icons';
import Icon from '../Icon';

// reduce to sets of types (text, box, etc.)?
type ButtonTheme = {
  backgroundColor: string;
  border: Partial<BorderBreakpointStyle>;
  height: string;
  px: string;
  py: string;
  textColor?: string;
  fontSize?: string;
  width?: string;
  leftIcon?: boolean;
};

type ButtonVariants = {
  color: keyof ThemeColors;
  size?: 'sm' | 'md';
  variant?: 'outline' | null;
  iconLeft?: keyof Icons | null;
};

type ButtonStates = '_hover' | '_active';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  iconRight?: keyof Icons;
};

function ButtonFunction({
  children,
  onClick,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps & ButtonVariants): JSX.Element {
  const className = get(props, 'className', null);
  return (
    <button className={className}>
      {iconLeft && <Icon name={iconLeft} />}
      {children && children}
    </button>
  );
}

ButtonFunction.defaultProps = {
  children: null,
  onClick: null,
  iconRight: false
};

// move defaults to `text`
const ButtonComponent = styled(ButtonFunction)<ThemeComponent & ButtonProps>`
  ${({ componentCss }) => componentCss};
  // display: inline-flex;
  font-family: 'Work Sans', sans serif;
  font-size: 1rem;
  line-height: 19px;
`;

const Button = createThemedComponent<
  ButtonTheme,
  ButtonVariants,
  ButtonStates,
  ButtonProps
>({
  defaultVariants: {
    color: 'primary',
    size: 'md',
    variant: null,
    iconLeft: null
  },
  states: ['_hover', '_active'],
  compose: ({ theme, variant }) => {
    return {
      Component: ButtonComponent,

      // variants aren't derived from single values, but the intersection of values
      variantMapping: {
        color: ({ size, color, variant }) => {
          const sizeProps = {
            height: size === 'md' ? '52px' : '42px',
            py: size === 'md' ? `${theme.spacing['2']}` : '11px'
          };

          if (variant === 'outline') {
            return {
              backgroundColor: theme.white,
              borderColor: theme[color],
              textColor: theme[color],
              ...sizeProps
            };
          }

          return {
            backgroundColor: theme[color],
            borderColor: theme[color],
            textColor: contrastColor({ color: theme[color], theme }),
            ...sizeProps
          };
        }
      },

      defaultStyleMapping: {
        xs: {
          backgroundColor: theme[variant.color],
          textColor: ({ contrastColor, backgroundColor }) =>
            contrastColor(backgroundColor),
          fontSize: '1rem',
          border: {
            ...theme.borders.md
          },
          height: '42px',
          px: '1rem',
          py: '1rem',
          width: '100%',
          leftIcon: !!variant.iconLeft
        },

        md: {
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
        textColor: ({ textColor }) => css`
          color: ${textColor};
          svg {
            path {
              fill: ${textColor};
            }
          }
        `,
        fontSize: ({ fontSize, leftIcon }) => css`
          font-size: ${fontSize};
          svg {
            height: ${fontSize};
            width: ${fontSize};
          }
        `,
        height: ({ height }) => css`
          height: ${height};
        `,
        border: props => {
          console.log('props', props);
          return applyBorderStyle({
            borderColor:
              variant.variant === 'outline'
                ? props.textColor
                : props.backgroundColor,
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
        width: props => {
          return css`
            min-width: ${props.width};
            min-width: ${props.leftIcon && '52px !important'};
          `;
        }
      }
    };
  }
});

export default Button;
