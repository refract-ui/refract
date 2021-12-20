import tc from 'tinycolor2';
import { ThemeExtension, applyThemeSettings } from '../../theme/cascade';
import { ThemeColors } from '../../theme/themeColors';

interface ContrastColorProps {
  color: string;
}

export type ContrastColor = (props: { color: string }) => string;

export default function contrastColor({
  themeColors,
  color
}: {
  themeColors: ThemeColors;
  color: string;
}): string {
  const c = tc(color);
  return c.isDark() ? themeColors.light : themeColors.dark;
}

export const extension: ThemeExtension<ContrastColor> = {
  name: 'contrastColor',
  deps: ['themeColors'],
  defaults: (props: { themeColors: ThemeColors }) => {
    return ({ color }: ContrastColorProps): string => {
      const c = tc(color);
      return c.isDark() ? props.themeColors.light : props.themeColors.dark;
    };
  },
  apply: applyThemeSettings
};
