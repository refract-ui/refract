import { defaults, isFunction } from 'lodash';
import { ThemeExtension, applyThemeSettings } from '../cascade';
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
  fg: string;
  bg: string;
};

export const themeColorNames: Array<string> = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
  'fg',
  'bg'
];

export const extension: ThemeExtension<ThemeColors> = {
  name: 'themeColors',
  deps: ['colors', 'colorShades'],
  defaults: ({
    colors,
    colorShades
  }: {
    colors: Colors;
    colorShades: ColorShades;
  }) => ({
    primary: colors.blue,
    secondary: colors.gray,
    success: colors.green,
    info: colors.cyan,
    warning: colorShades.orange400,
    danger: colorShades.red500,
    light: colorShades.gray100,
    dark: colorShades.gray900,
    bg: colorShades.gray900,
    fg: colorShades.gray100
  }),
  apply: applyThemeSettings
};
