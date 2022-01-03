import { ThemeExtension, applyThemeSettings } from '../cascade';

export type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

const defaultBreakpoints: Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export const extension: ThemeExtension<Breakpoints> = {
  name: 'breakpoints',
  deps: [],
  defaults: defaultBreakpoints,
  apply: applyThemeSettings
};
