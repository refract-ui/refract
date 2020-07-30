import React from 'react';
import { GenIcon, IconBaseProps } from 'react-icons';
import { Icons, defaultIcons } from './icons';

type IconProps = {
  name: keyof Icons;
};

function Icon({ name, ...props }: IconProps & IconBaseProps) {
  const data = defaultIcons[name];
  return GenIcon(data)(props);
}

export default Icon;
