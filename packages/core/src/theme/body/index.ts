import { defaults, isFunction } from 'lodash';
import { Colors } from '../colors';
import { ColorShades } from '../colorShades';

type BodyBreakpointStyle = {
  bodyBg: string;
  bodyColor: string;
  bodyTextAlign: string;
};

type Body = {
  xs: BodyBreakpointStyle;
  sm?: Partial<BodyBreakpointStyle>;
  md?: Partial<BodyBreakpointStyle>;
  lg?: Partial<BodyBreakpointStyle>;
  xl?: Partial<BodyBreakpointStyle>;
  xxl?: Partial<BodyBreakpointStyle>;
};

export interface BodyOverrideProps {
  colors: Colors;
  colorShades: ColorShades;
  defaults: Body;
}

interface BodyProps {
  colors: Colors;
  colorShades: ColorShades;
  overrides: ((props: BodyOverrideProps) => Body) | Partial<Body>;
}

export default function body({
  colors,
  colorShades,
  overrides = {}
}: BodyProps): Body {
  const bodyDefaults: Body = {
    xs: {
      bodyBg: colors.white,
      bodyColor: colorShades.gray900,
      bodyTextAlign: null
    }
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: bodyDefaults });
  }

  return defaults(overrides, bodyDefaults);
}
