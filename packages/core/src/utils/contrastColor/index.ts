import tc from 'tinycolor2';
import { ThemeExtension, applyThemeSettings } from '../../theme/cascade';
import { ThemeColors } from '../../theme/themeColors';

interface ContrastColorProps {
  color: string;
}

export type ContrastColor = (props: { color: string }) => string;

export const extension: ThemeExtension<ContrastColor> = {
  name: 'contrastColor',
  deps: ['themeColors'],
  defaults: ({ themeColors }: { themeColors: ThemeColors }) => {
    return ({ color }: ContrastColorProps): string => {
      const c = tc(color);
      return c.isDark() ? themeColors.light : themeColors.dark;
    };
  },
  apply: applyThemeSettings
};
