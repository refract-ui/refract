import { defaults, isFunction } from 'lodash';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';
import { ThemeColorShades } from '../themeColorShades';

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
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  themeColorShades?: ThemeColorShades;
  defaults: SubtleColors;
}

export type SubtleColorSettings =
  | ((props: SubtleColorOverrideProps) => SubtleColors)
  | Partial<SubtleColors>;

export interface SubtleColorsProps {
  colors: Colors;
  colorShades: ColorShades;
  themeColors: ThemeColors;
  themeColorShades: ThemeColorShades;
  overrides: SubtleColorSettings;
}

export default function subtleColors({
  colors,
  colorShades,
  themeColors,
  themeColorShades,
  overrides = {}
}: SubtleColorsProps): SubtleColors {
  const defaultColors: SubtleColors = {
    primary: themeColorShades.primary300,
    secondary: themeColorShades.secondary300,
    success: themeColorShades.success300,
    info: themeColorShades.info300,
    warning: themeColorShades.warning300,
    danger: themeColorShades.danger300,
    light: themeColorShades.light600,
    dark: themeColorShades.dark300
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
