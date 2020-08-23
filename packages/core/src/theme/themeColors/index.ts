import { defaults, isFunction } from 'lodash';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';

export type ThemeColors = {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  light: string;
  dark: string;
};

export interface ThemeColorOverrideProps {
  colors: Colors;
  colorShades: ColorShades;
  defaults: ThemeColors;
}

interface ThemeColorProps {
  colors: Colors;
  colorShades: ColorShades;
  overrides:
    | ((props: ThemeColorOverrideProps) => ThemeColors)
    | Partial<ThemeColors>;
}

export default function themeColors({
  colors,
  colorShades,
  overrides = {}
}: ThemeColorProps): ThemeColors {
  const defaultThemeColors: ThemeColors = {
    primary: '#3978EC',
    secondary: '#B0B9C9',
    success: '#6AD193',
    info: colors.cyan,
    warning: '#EFC174',
    danger: '#DE7283',
    light: colorShades.gray100,
    dark: '#575C64'
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultThemeColors });
  }

  return defaults(overrides, defaultThemeColors);
}
