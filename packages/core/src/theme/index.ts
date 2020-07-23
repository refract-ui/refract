import genColors, { Colors, ColorOverrideProps } from './colors';
import genColorShades, {
  ColorShades,
  ColorShadeOverrideProps
} from './colorShades';
import { FlattenSimpleInterpolation } from 'styled-components';
import genThemeColors, {
  ThemeColors,
  ThemeColorOverrideProps
} from './themeColors';
import genSpacing, { Spacing, SpacingOverrideProps } from './spacing';
import genBreakpoints, {
  Breakpoints,
  BreakpointOverrideProps
} from './breakpoints';
import genBorders, { Borders, BorderOverrideProps } from './borders';
import genMediaQueries, { MediaQueries } from './mediaQueries';
import { ThemeBreakpoints } from '../utils/componentThemeBreakpoints';

export interface ThemeProps {
  colors?: ((props: ColorOverrideProps) => Colors) | Partial<Colors>;
  themeColors?:
    | ((props: ThemeColorOverrideProps) => ThemeColors)
    | Partial<ThemeColors>;
  colorShades?:
    | ((props: ColorShadeOverrideProps) => ColorShades)
    | Partial<ColorShades>;
  spacing?: ((props: SpacingOverrideProps) => Spacing) | Partial<Spacing>;
  breakpoints?:
    | ((props: BreakpointOverrideProps) => Breakpoints)
    | Partial<Breakpoints>;
  borders?: ((props: BorderOverrideProps) => Borders) | Partial<Borders>;
}

export type Theme = Colors &
  ThemeColors &
  ColorShades & {
    settings: ThemeProps;
    spacing: Spacing;
    breakpoints: Breakpoints;
    borders: Borders;
    mq: MediaQueries;
  };

export type ThemeComponent = {
  componentCss: (() => FlattenSimpleInterpolation)[];
};

export default function theme(settings: ThemeProps = {}): Theme {
  const {
    colors: colorOverrides,
    themeColors: themeColorOverrides,
    colorShades: colorShadeOverrides,
    spacing: spacingOverrides,
    breakpoints: breakpointOverrides,
    borders: borderOverrides
  } = settings;

  const colors = genColors({ overrides: colorOverrides });
  const colorShades = genColorShades({
    colors,
    overrides: colorShadeOverrides
  });
  const themeColors = genThemeColors({
    colors,
    colorShades,
    overrides: themeColorOverrides
  });
  const spacing = genSpacing({ overrides: spacingOverrides });
  const breakpoints = genBreakpoints({ overrides: breakpointOverrides });
  const borders = genBorders({
    colors,
    colorShades,
    overrides: borderOverrides
  });

  const mq = genMediaQueries({ breakpoints });

  return {
    settings,
    ...colors,
    ...themeColors,
    ...colorShades,
    spacing,
    breakpoints,
    borders,
    mq
  };
}
