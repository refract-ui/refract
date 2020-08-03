import { GenIcon, IconBaseProps } from 'react-icons';
import { Icons, defaultIcons, smallIcons } from './icons';

type IconProps = {
  name: keyof Icons;
  size: number | 'sm' | 'md' | 'lg';
};

function getIcon({ name, size }: IconProps) {
  if (size <= 16) {
    return smallIcons[name];
  }
  return defaultIcons[name];
}

function getSize(size: IconProps['size']): number {
  if (typeof size === 'string') {
    switch (size) {
      case 'sm':
        return 16;
      case 'lg':
        return 24;
      default:
        return 20;
    }
  }
  return size;
}

function Icon({
  name,
  size,
  ...props
}: IconBaseProps & IconProps): JSX.Element {
  const propSize = getSize(size);
  const data = getIcon({ name, size: propSize });
  return GenIcon(data)({ size: propSize, ...props });
}

Icon.defaultProps = {
  size: '20'
};

export default Icon;
