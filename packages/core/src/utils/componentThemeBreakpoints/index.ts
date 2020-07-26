import { omit, pick, defaults, get, defaultsDeep } from 'lodash';
import { breakpointKeys } from '../../theme/mediaQueries';

export type ThemeBreakpoints<T> = {
  xs: T;
  sm?: Partial<T>;
  md?: Partial<T>;
  lg?: Partial<T>;
  xl?: Partial<T>;
  xxl?: Partial<T>;

  xsOnly?: Partial<T>;
  smOnly?: Partial<T>;
  mdOnly?: Partial<T>;
  lgOnly?: Partial<T>;
  xlOnly?: Partial<T>;
  xxlOnly?: Partial<T>;

  ltSm?: Partial<T>;
  ltMd?: Partial<T>;
  ltLg?: Partial<T>;
  ltXl?: Partial<T>;
  ltXxl?: Partial<T>;
};

type ThemeExtensionHelperMethods = {
  contrastColor: (color: string) => string;
};

export type PseudoClass<T> = Partial<T>;

export type ThemeExtension<T> = {
  [P in keyof T]:
    | PseudoClass<T>
    | T[P]
    | ((props: Partial<T & ThemeExtensionHelperMethods>) => T[P]);
};

export type ComponentThemeBreakpoint<T, PC extends string> = T &
  {
    [P in PC]?: PseudoClass<T>;
  };

export type ExtendTheme<T> = Partial<ThemeBreakpoints<ThemeExtension<T>>> &
  Partial<T>;

export type ComponentThemeProps<T> = {
  defaultComponentTheme: ExtendTheme<T>;
  extendTheme: ExtendTheme<T>;
};

export function extendComponentTheme<T>({
  defaultComponentTheme,
  extendTheme
}: ComponentThemeProps<T>): ThemeBreakpoints<T> {
  const breakpointOverrides = pick(extendTheme, breakpointKeys) as Partial<
    ThemeBreakpoints<T>
  >;

  const baseThemeProps = omit(extendTheme, breakpointKeys) as Partial<T>;

  // account for situations where breakpoint syntax was not used
  const xs = defaults(
    get(breakpointOverrides, 'xs', {}),
    baseThemeProps,
    defaultComponentTheme.xs
  ) as T;

  return defaultsDeep(
    {
      ...breakpointOverrides,
      xs
    },
    omit(defaultComponentTheme, 'xs')
  );
}
