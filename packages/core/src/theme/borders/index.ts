import { defaults, isFunction } from 'lodash';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';

type BorderBreakpointStyle = {
  borderWidth: string;
  borderColor: string;
  borderRadius: string;
};

export type Borders = {
  xs: BorderBreakpointStyle;
  sm?: Partial<BorderBreakpointStyle>;
  md?: Partial<BorderBreakpointStyle>;
  lg?: Partial<BorderBreakpointStyle>;
  xl?: Partial<BorderBreakpointStyle>;
  xxl?: Partial<BorderBreakpointStyle>;
};

export interface BorderOverrideProps {
  colors: Colors;
  colorShades: ColorShades;
  defaults: Borders;
}

interface BorderProps {
  colors: Colors;
  colorShades: ColorShades;
  overrides: ((props: BorderOverrideProps) => Borders) | Partial<Borders>;
}

export default function borders({
  colors,
  colorShades,
  overrides = {}
}: BorderProps): Borders {
  const defaultBorders: Borders = {
    xs: {
      borderWidth: '1px',
      borderColor: colorShades.gray300,
      borderRadius: '0.2rem'
    },
    md: {
      borderRadius: '0.25rem'
    },
    lg: {
      borderRadius: '0.3rem'
    }
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultBorders });
  }

  return defaults(overrides, defaultBorders);
}
