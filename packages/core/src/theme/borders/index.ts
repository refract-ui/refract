import { defaults, isFunction } from 'lodash';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';

export type BorderBreakpointStyle = {
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

export function applyBorderStyle(
  border: Partial<BorderBreakpointStyle>
): FlattenSimpleInterpolation {
  if (!border) {
    return undefined;
  }

  return css`
    ${
      border.borderWidth &&
      css`
        border-width: ${border.borderWidth};
      `
    }

    ${
      border.borderColor &&
      css`
        border-color: ${border.borderColor};
      `
    }

    ${
      border.borderRadius &&
      css`
        border-radius: ${border.borderRadius};
      `
    }
  `;
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
      borderWidth: '1px',
      borderRadius: '0.5rem'
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