import { map, sortBy, indexOf, toPairs } from 'lodash';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeBreakpoints } from '../../utils/componentThemeBreakpoints';
import { MediaQueries, breakpointKeys } from '../../theme/mediaQueries';
import { Theme } from '../../theme';

interface ApplyComponentThemeProps<T> {
  theme: Theme;
  breakpoints: ThemeBreakpoints<T>;
  applyThemeBreakpoint: (props: T) => FlattenSimpleInterpolation;
}

export default function applyComponentTheme<T>({
  theme,
  breakpoints,
  applyThemeBreakpoint
}: ApplyComponentThemeProps<T>): (() => FlattenSimpleInterpolation)[] {
  const sortedBreakpoints = sortBy(toPairs(breakpoints), ([key]) =>
    indexOf(breakpointKeys, key)
  );

  return map(sortedBreakpoints, ([breakpoint, val]) => () =>
    theme.mq[breakpoint as keyof MediaQueries]`${applyThemeBreakpoint(
      val as T
    )}`
  );
}
