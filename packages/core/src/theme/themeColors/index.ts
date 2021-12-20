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
};

export const themeColorNames: Array<string> = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark'
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
    warning: '#EFC174',
    danger: '#DE7283',
    light: colorShades.gray100,
    dark: '#575C64'
  }),
  apply: applyThemeSettings
};
