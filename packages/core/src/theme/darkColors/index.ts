import { ThemeExtension, applyThemeSettings } from '../cascade';
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

export const extension: ThemeExtension<DarkColors> = {
  name: 'darkColors',
  deps: ['colors', 'colorShades', 'themeColors', 'themeColorShades'],
  defaults: ({ themeColorShades }: { themeColorShades: ThemeColorShades }) => ({
    primary: themeColorShades.primary700,
    secondary: themeColorShades.secondary700,
    success: themeColorShades.success700,
    info: themeColorShades.info700,
    warning: themeColorShades.warning700,
    danger: themeColorShades.danger700,
    light: themeColorShades.light100,
    dark: themeColorShades.dark900
  }),
  apply: applyThemeSettings
};
