import { ThemeExtension, applyThemeSettings } from '../cascade';
import { ThemeColors } from '../themeColors';

type BodyBreakpointStyle = {
  bg: string;
  textColor: string;
};

export type Body = {
  xs: BodyBreakpointStyle;
  sm?: Partial<BodyBreakpointStyle>;
  md?: Partial<BodyBreakpointStyle>;
  lg?: Partial<BodyBreakpointStyle>;
  xl?: Partial<BodyBreakpointStyle>;
  xxl?: Partial<BodyBreakpointStyle>;
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
    xs: {
      bg: themeColors.light,
      textColor: themeColors.dark
    }
  }),
  apply: applyThemeSettings
};
