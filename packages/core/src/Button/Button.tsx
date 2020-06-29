import React from 'react';

type Props = {
  color?: string;
  onClick?: any;
  children: React.ReactNode;
};

function Button({ color, children, onClick }: Props) {
  return (
    <button color={color} onClick={onClick}>
      <React.Fragment>{children}</React.Fragment>
    </button>
  );
}

export default Button;
