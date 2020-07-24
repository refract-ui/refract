import { map, sortBy, indexOf, toPairs } from 'lodash';
import { FlattenSimpleInterpolation } from 'styled-components';
import {
  extendComponentTheme,
  ExtendTheme
} from '../../utils/componentThemeBreakpoints';
import { MediaQueries, breakpointKeys } from '../../theme/mediaQueries';
import { Theme } from '../../theme';

interface ApplyComponentThemeProps<T> {
  theme: Theme;
  defaultComponentTheme: ExtendTheme<T>;
  extendTheme?: ExtendTheme<T>;
  applyThemeBreakpoint: (theme: Theme, props: T) => FlattenSimpleInterpolation;
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

  return map(sortedBreakpoints, ([breakpoint, val]) => () =>
    theme.mq[breakpoint as keyof MediaQueries]`${applyThemeBreakpoint(
      theme,
      val as T
    )}`
  );
}
