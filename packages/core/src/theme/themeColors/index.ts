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
    primary: colors.blue,
    secondary: colorShades.gray600,
    success: colors.green,
    info: colors.cyan,
    warning: colors.yellow,
    danger: colors.red,
    light: colorShades.gray100,
    dark: colorShades.gray800
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultThemeColors });
  }

  return defaults(overrides, defaultThemeColors);
}
