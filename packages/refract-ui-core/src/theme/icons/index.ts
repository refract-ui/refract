import { defaults, isFunction } from 'lodash';
import { ThemeColors } from '../themeColors';

export type IconBase = {
  iconColor: string;
  iconSize: number;
};

export interface IconOverrideProps {
  themeColors: ThemeColors;
  defaults: IconBase;
}

export interface IconProps {
  themeColors: ThemeColors;
  overrides: ((props: IconOverrideProps) => IconBase) | Partial<IconBase>;
}

export default function genIconProps({
  themeColors,
  overrides
}: IconProps): IconBase {
  const iconDefaults: IconBase = {
    iconColor: themeColors['dark' as keyof ThemeColors],
    iconSize: 20
  };
  if (isFunction(overrides)) {
    return overrides({ themeColors, defaults: iconDefaults });
  }

  return defaults(overrides, iconDefaults);
}
