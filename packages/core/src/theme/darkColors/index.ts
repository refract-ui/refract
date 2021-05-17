import { defaults, isFunction } from 'lodash';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';
import { ThemeColorShades } from '../themeColorShades';

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
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  themeColorShades?: ThemeColorShades;
  defaults: DarkColors;
}

export interface DarkColorsProps {
  colors: Colors;
  colorShades: ColorShades;
  themeColors: ThemeColors;
  themeColorShades: ThemeColorShades;
  overrides:
    | ((props: DarkColorOverrideProps) => DarkColors)
    | Partial<DarkColors>;
}

export default function darkColors({
  colors,
  colorShades,
  themeColors,
  themeColorShades,
  overrides = {}
}: DarkColorsProps): DarkColors {
  const defaultColors: DarkColors = {
    primary: themeColorShades.primary700,
    secondary: themeColorShades.secondary700,
    success: themeColorShades.success700,
    info: themeColorShades.info700,
    warning: themeColorShades.warning700,
    danger: themeColorShades.danger700,
    light: themeColorShades.light100,
    dark: themeColorShades.dark900
  };

  if (isFunction(overrides)) {
    return overrides({
      themeColors,
      themeColorShades,
      colors,
      colorShades,
      defaults: defaultColors
    });
  }

  return defaults(overrides, defaultColors);
}
