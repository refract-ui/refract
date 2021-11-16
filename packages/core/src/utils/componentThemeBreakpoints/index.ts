import { omit, pick, defaults, defaultsDeep } from 'lodash';
import { PickByValue, OmitByValue, NonUndefined, $Values } from 'utility-types';
import { Theme } from '../../theme';
import { breakpointKeys } from '../../theme/mediaQueries';

export type ThemeExtensionHelperMethods = {
  contrastColor: (color: string) => string;
  theme: Theme;
};

export type PseudoClass<T> = Partial<T>;

export type ThemeStyleDirective<T, P extends keyof T = keyof T> =
  | T[P]
  | ((props: Partial<T & ThemeExtensionHelperMethods>) => T[P]);

export type PseudoClassExtension<T> = {
  [P in keyof Partial<T>]: ThemeStyleDirective<T, P>;
};

export type ThemeExtension<T> = {
  [P in keyof OmitByValue<T, PseudoClass<T>>]: ThemeStyleDirective<T, P>;
} & {
  [P in keyof PickByValue<T, PseudoClass<T>>]: PseudoClassExtension<T>;
};

export type ComponentThemeBreakpoint<T, PC extends string> = T & {
  [P in PC]?: PseudoClass<T>;
};

export type ThemeBreakpoints<T> = {
  xs: ThemeExtension<T>;
  sm?: Partial<ThemeExtension<T>>;
  md?: Partial<ThemeExtension<T>>;
  lg?: Partial<ThemeExtension<T>>;
  xl?: Partial<ThemeExtension<T>>;
  xxl?: Partial<ThemeExtension<T>>;

  xsOnly?: Partial<ThemeExtension<T>>;
  smOnly?: Partial<ThemeExtension<T>>;
  mdOnly?: Partial<ThemeExtension<T>>;
  lgOnly?: Partial<ThemeExtension<T>>;
  xlOnly?: Partial<ThemeExtension<T>>;
  xxlOnly?: Partial<ThemeExtension<T>>;

  ltSm?: Partial<ThemeExtension<T>>;
  ltMd?: Partial<ThemeExtension<T>>;
  ltLg?: Partial<ThemeExtension<T>>;
  ltXl?: Partial<ThemeExtension<T>>;
  ltXxl?: Partial<ThemeExtension<T>>;
};

export type ExtendTheme<T> = Partial<ThemeBreakpoints<T>> &
  Partial<ThemeExtension<T>>;

export type ComponentThemeProps<T> = {
  defaultComponentTheme: ThemeBreakpoints<T>;
  extendTheme: ExtendTheme<T>;
};

export function extendComponentTheme<T>({
  defaultComponentTheme,
  extendTheme
}: ComponentThemeProps<T>): ThemeBreakpoints<T> {
  const breakpointOverrides = pick(extendTheme, breakpointKeys);

  const baseThemeProps = omit(extendTheme, breakpointKeys) as Partial<T>;
  const defaultXs = defaultComponentTheme.xs;

  // account for situations where breakpoint syntax was not used
  const xs = defaults(
    breakpointOverrides.xs || {},
    baseThemeProps,
    defaultXs
  ) as ThemeExtension<T>;

  return defaultsDeep(
    {
      ...breakpointOverrides,
      xs
    },
    omit(defaultComponentTheme, 'xs')
  );
}
