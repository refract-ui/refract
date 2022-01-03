import { ThemeExtension, applyThemeSettings } from '../cascade';
import { ThemeColorShades } from '../themeColorShades';
import { ThemeColors } from '../themeColors';

export type DarkColors = {
  [Key in keyof ThemeColors]: string;
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
    dark: themeColorShades.dark900,
    bg: themeColorShades.bg900,
    fg: themeColorShades.fg100
  }),
  apply: applyThemeSettings
};
