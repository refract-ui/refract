import genColors, { Colors, ColorOverrideProps } from './colors';
import genColorShades, {
  ColorShades,
  ColorShadeOverrideProps
} from './colorShades';
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
import genBody, { Body, BodyOverrideProps } from './body';

interface ThemeProps {
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
  body?: ((props: BodyOverrideProps) => Body) | Partial<Body>;
}

export type Theme = Colors &
  ThemeColors &
  ColorShades & {
    spacing: Spacing;
    breakpoints: Breakpoints;
    borders: Borders;
    body: Body;
  };

export default function theme({
  colors: colorOverrides,
  themeColors: themeColorOverrides,
  colorShades: colorShadeOverrides,
  spacing: spacingOverrides,
  breakpoints: breakpointOverrides,
  borders: borderOverrides,
  body: bodyOverrides
}: ThemeProps = {}): Theme {
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
  const body = genBody({ colors, colorShades, overrides: bodyOverrides });

  return {
    ...colors,
    ...themeColors,
    ...colorShades,
    spacing,
    breakpoints,
    borders,
    body
  };
}
