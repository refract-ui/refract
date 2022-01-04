import { ThemeExtension, applyThemeSettings } from '../cascade';
import { ThemeColorShades } from '../themeColorShades';
import { ThemeColors } from '../themeColors';

export type SubtleColors = {
  [Key in keyof ThemeColors]: string;
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
    dark: themeColorShades.dark300,
    bg: themeColorShades.bg600,
    fg: themeColorShades.fg300
  }),
  apply: applyThemeSettings
};
