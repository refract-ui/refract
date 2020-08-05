import { GenIcon, IconBaseProps } from 'react-icons';
import { Icons, defaultIcons, smallIcons, largeIcons } from './icons';

type IconProps = {
  name: keyof Icons;
  size: number | 'sm' | 'md' | 'lg';
};

function getIcon({ name, size }: IconProps) {
  if (size <= 16) {
    return smallIcons[name];
  }
  if (size >= 24) {
    return largeIcons[name];
  }
  return defaultIcons[name];
}

function getSize(size: IconProps['size']): number {
  switch (size) {
    case 'sm':
      return 16;
    case 'lg':
      return 24;
    default:
      return 20;
  }
}

function Icon({
  name,
  size,
  ...props
}: IconBaseProps & IconProps): JSX.Element {
  const propSize = typeof size === 'string' ? getSize(size) : size;
  const data = getIcon({ name, size: propSize });
  return GenIcon(data)({ size: propSize, ...props });
}

Icon.defaultProps = {
  size: '20'
};

export default Icon;
