import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { darkenColor } from '../utils/colorFunc';

type ButtonProps = {
  color?: string;
  onClick?: any;
  size?: 'sm' | 'md';
  outline?: boolean;
  variant: 'default' | 'outline' | 'link';
  children: React.ReactNode;
};

export const defaultProps: ButtonProps = {
  color: 'primary',
  onClick: () => {},
  size: 'md',
  variant: 'default',
  children: null
};

const StyledButton = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 0.5rem;
  ${({ theme, color }) =>
    variant({
      prop: 'variant',
      variants: {
        default: {
          bg: theme[color],
          color: theme.white,
          border: 'none',
          '&:hover': {
            bg: darkenColor(theme[color], [10])
          }
        }
      }
    })}
  ${({ theme }) =>
    variant({
      prop: 'size',
      variants: {
        md: {
          p: theme.spacing[3],
          width: '220px'
        },
        sm: {
          p: theme.spacing[2],
          width: '200px'
        }
      }
    })}
`;

function Button({
  children,
  color,
  onClick,
  outline,
  size,
  variant,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      color={color}
      onClick={onClick}
      outline={outline}
      size={size}
      variant={variant}
      {...props}
    >
      <React.Fragment>{children}</React.Fragment>
    </StyledButton>
  );
}

export default Button;
