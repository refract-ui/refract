import { ThemeExtension, applyThemeSettings } from '../cascade';
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

export const extension: ThemeExtension<SubtleColors> = {
  name: 'subtleColors',
  deps: ['colors', 'colorShades', 'themeColors', 'themeColorShades'],
  defaults: ({ themeColorShades }: { themeColorShades: ThemeColorShades }) => ({
    primary: themeColorShades.primary300,
    secondary: themeColorShades.secondary300,
    success: themeColorShades.success300,
    info: themeColorShades.info300,
    warning: themeColorShades.warning300,
    danger: themeColorShades.danger300,
    light: themeColorShades.light600,
    dark: themeColorShades.dark300
  }),
  apply: applyThemeSettings
};
