import { ThemeExtension, applyThemeSettings } from '../cascade';
import type { FlattenSimpleInterpolation } from 'styled-components';
import { css } from 'styled-components';
import { ColorShades } from '../colorShades';

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

export const extension: ThemeExtension<Borders> = {
  name: 'borders',
  deps: ['colorShades', 'themeColors'],
  defaults: ({ colorShades }: { colorShades: ColorShades }) => ({
    xs: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colorShades.gray300,
      borderRadius: '0.2rem'
    },
    md: {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '0.5rem'
    },
    lg: {
      borderRadius: '0.3rem'
    }
  }),

  apply: applyThemeSettings
};

export function applyBorderStyle(
  border: Partial<BorderBreakpointStyle>
): FlattenSimpleInterpolation {
  if (!border) {
    return undefined;
  }

  return css`
    ${border.borderWidth &&
    css`
      border-width: ${border.borderWidth};
    `}

    ${border.borderStyle &&
    css`
      border-style: ${border.borderStyle};
    `}

    ${border.borderColor &&
    css`
      border-color: ${border.borderColor};
    `}

    ${border.borderRadius &&
    css`
      border-radius: ${border.borderRadius};
    `}

    ${border.borderStyle &&
    css`
      border-style: ${border.borderStyle};
    `}
  `;
}
