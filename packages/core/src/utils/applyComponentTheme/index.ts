import { map } from 'lodash';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeBreakpoints } from '../../utils/componentThemeBreakpoints';
import { MediaQueries } from '../../theme/mediaQueries';
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
  return map(breakpoints, (val: T, breakpoint: keyof MediaQueries) => () =>
    theme.mq[breakpoint]`${applyThemeBreakpoint(val)}`
  );
}
