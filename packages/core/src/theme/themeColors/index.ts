import { defaults, isFunction } from 'lodash';
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
  defaults: ThemeColors;
}

interface ThemeColorProps {
  colors: Colors;
  overrides:
    | ((props: ThemeColorOverrideProps) => ThemeColors)
    | Partial<ThemeColors>;
}

export default function themeColors({
  colors,
  overrides = {}
}: ThemeColorProps): ThemeColors {
  const defaultThemeColors: ThemeColors = {
    primary: colors.blue,
    secondary: colors.gray600,
    success: colors.green,
    info: colors.cyan,
    warning: colors.yellow,
    danger: colors.red,
    light: colors.gray100,
    dark: colors.gray800
  };

  if (isFunction(overrides)) {
    return overrides({ colors, defaults: defaultThemeColors });
  }

  return defaults(overrides, defaultThemeColors);
}
