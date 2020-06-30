import { get, reduce, defaults, isFunction } from 'lodash';

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

export interface BreakpointOverrideProps {
  defaults: Breakpoints;
}

interface BreakpointProps {
  overrides:
    | ((props: BreakpointOverrideProps) => Breakpoints)
    | Partial<Breakpoints>;
}

export default function breakpoints({
  overrides = {}
}: BreakpointProps): Breakpoints {
  if (isFunction(overrides)) {
    return overrides({ defaults: defaultBreakpoints });
  }

  return defaults(overrides, defaultBreakpoints);
}
