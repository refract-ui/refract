import { GenIcon, IconBaseProps } from 'react-icons';
import { Icons, defaultIcons, smallIcons } from './icons';

type IconProps = {
  name: keyof Icons;
  gfxSize: 'sm' | 'md' | 'lg';
};

function getIcon({ name, gfxSize }: IconProps) {
  if (gfxSize === 'sm') {
    return smallIcons[name];
  }
  return defaultIcons[name];
}

function Icon({ name, gfxSize, ...props }: IconProps & IconBaseProps) {
  const data = getIcon({ name, gfxSize });
  return GenIcon(data)(props);
}

Icon.defaultProps = {
  gfxSize: 'md'
};

export default Icon;
