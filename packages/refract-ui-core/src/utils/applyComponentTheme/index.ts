import { map, sortBy, indexOf, toPairs } from 'lodash';
import { FlattenSimpleInterpolation } from 'styled-components'; // eslint-disable-line
import {
  extendComponentTheme,
  ThemeBreakpoints,
  ExtendTheme
} from '../../utils/componentThemeBreakpoints';
import { MediaQueries, breakpointKeys } from '../../theme/mediaQueries';
import { CoreTheme } from '../../theme';

interface ApplyComponentThemeProps<T> {
  theme: CoreTheme;
  defaultComponentTheme: ThemeBreakpoints<T>;
  extendTheme?: ExtendTheme<T>;
  applyThemeBreakpoint: (
    theme: CoreTheme,
    props: T
  ) => FlattenSimpleInterpolation;
}

export default function applyComponentTheme<T>({
  theme,
  defaultComponentTheme,
  extendTheme,
  applyThemeBreakpoint
}: ApplyComponentThemeProps<T>): (() => FlattenSimpleInterpolation)[] {
  // extend the global theme settings with any component-specific overrides
  const breakpoints = extendComponentTheme<T>({
    defaultComponentTheme,
    extendTheme
  });

  const sortedBreakpoints = sortBy(toPairs(breakpoints), ([key]) =>
    indexOf(breakpointKeys, key)
  );

  return map(
    sortedBreakpoints,
    ([breakpoint, val]) =>
      () =>
        theme.mq[breakpoint as keyof MediaQueries]`${applyThemeBreakpoint(
          theme,
          val as T
        )}`
  );
}
