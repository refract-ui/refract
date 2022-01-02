import { ThemeExtension, applyThemeSettings } from '../cascade';
import { ThemeColors } from '../themeColors';

export type Body = {
  bg: string;
  textColor: string;
};

export const extension: ThemeExtension<Body> = {
  name: 'body',
  deps: [
    'colors',
    'colorShades',
    'themeColors',
    'themeColorShades',
    'subtleColors',
    'darkColors'
  ],
  defaults: ({ themeColors }: { themeColors: ThemeColors }) => ({
    bg: themeColors.light,
    textColor: themeColors.dark
  }),
  apply: applyThemeSettings
};
