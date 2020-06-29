import React from 'react';
import styled from 'styled-components';

type Props = {
  color?: string;
  onClick?: any;
  children: React.ReactNode;
};

const StyledButton = styled.button``;

function Button({ color, children, onClick }: Props) {
  return (
    <StyledButton color={color} onClick={onClick}>
      <React.Fragment>{children}</React.Fragment>
    </StyledButton>
  );
}

export default Button;
