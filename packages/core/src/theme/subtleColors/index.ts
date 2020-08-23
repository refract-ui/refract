import { defaults, isFunction } from 'lodash';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';

export type SubtleColors = {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  light: string;
  dark: string;
};

export interface SubtleColorOverrideProps {
  colors: Colors;
  colorShades: ColorShades;
  defaults: SubtleColors;
}

export interface SubtleColorsProps {
  colors: Colors;
  colorShades: ColorShades;
  overrides:
    | ((props: SubtleColorOverrideProps) => SubtleColors)
    | Partial<SubtleColors>;
}

export default function subtleColors({
  colors,
  colorShades,
  overrides = {}
}: SubtleColorsProps): SubtleColors {
  const defaultColors: SubtleColors = {
    primary: '#CBDEFF',
    secondary: '#E1E4EB',
    success: '#E5FBEE',
    info: colors.cyan,
    warning: '#FFF2DC',
    danger: '#FBD4DB',
    light: '#F6F6F6',
    dark: '#575C64'
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultColors });
  }

  return defaults(overrides, defaultColors);
}
