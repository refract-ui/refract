import { defaults, isFunction } from 'lodash';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';

export type DarkColors = {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  light: string;
  dark: string;
};

export interface DarkColorOverrideProps {
  colors: Colors;
  colorShades: ColorShades;
  defaults: DarkColors;
}

export interface DarkColorsProps {
  colors: Colors;
  colorShades: ColorShades;
  overrides:
    | ((props: DarkColorOverrideProps) => DarkColors)
    | Partial<DarkColors>;
}

export default function darkColors({
  colors,
  colorShades,
  overrides = {}
}: DarkColorsProps): DarkColors {
  const defaultColors: DarkColors = {
    primary: '#366ED5',
    secondary: '#575C64',
    success: '#377C52',
    info: colors.cyan,
    warning: '#B17E29',
    danger: '#B13F51',
    light: '#F6F6F6',
    dark: '#575C64'
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultColors });
  }

  return defaults(overrides, defaultColors);
}
