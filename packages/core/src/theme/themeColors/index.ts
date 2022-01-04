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
  }) => {
    const light = colorShades.gray100;
    const dark = colorShades.gray900;
    return {
      primary: colors.blue,
      secondary: colors.gray,
      success: colors.green,
      info: colors.cyan,
      warning: colorShades.orange400,
      danger: colorShades.red500,
      light,
      dark,
      bg: light,
      fg: dark
    };
  },
  apply: applyThemeSettings
};
