import React from 'react';

type Props = {
  color?: string;
  onClick?: any;
  children: React.ReactNode;
};

function Button({ color, children, onClick }: Props): React.ReactNode {
  return (
    <button color={color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
