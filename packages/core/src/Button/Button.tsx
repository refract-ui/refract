import React from 'react';

type Props = {
  color?: string;
  children: React.ReactNode;
};

function Button({ color, children }: Props): React.ReactNode {
  return <button color={color}>{children}</button>;
}

export default Button;
