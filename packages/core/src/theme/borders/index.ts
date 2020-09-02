import { defaults, isFunction } from 'lodash';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';

export type BorderBreakpointStyle = {
  borderColor: string;
  borderRadius: string;
  borderStyle: string;
  borderWidth: string;
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

  console.log('border', border);

  return css`
    ${
      border.borderWidth &&
      css`
        border-width: ${border.borderWidth};
      `
    }

    ${
      border.borderStyle &&
      css`
        border-style: ${border.borderStyle};
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

    ${
      border.borderStyle &&
      css`
        border-style: ${border.borderStyle};
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
      borderStyle: 'solid',
      borderColor: colorShades.gray300,
      borderRadius: '0.2rem'
    },
    md: {
      borderStyle: 'solid',
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
