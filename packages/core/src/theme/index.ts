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
}

export type Theme = Colors &
  ThemeColors &
  ColorShades & {
    spacing: Spacing;
    // breakpoints: Breakpoints;
    borders: Borders;
  };

export default function theme({
  colors: colorOverrides,
  themeColors: themeColorOverrides,
  colorShades: colorShadeOverrides,
  spacing: spacingOverrides,
  breakpoints: breakpointOverrides,
  borders: borderOverrides
}: ThemeProps = {}): Theme {
  const colors = genColors({ overrides: colorOverrides });
  const themeColors = genThemeColors({
    colors,
    overrides: themeColorOverrides
  });
  const colorShades = genColorShades({
    colors,
    overrides: colorShadeOverrides
  });
  const spacing = genSpacing({ overrides: spacingOverrides });
  // const breakpoints = genBreakpoints({ overrides: breakpointOverrides });
  const borders = genBorders({
    colors,
    colorShades,
    overrides: borderOverrides
  });

  return {
    ...colors,
    ...themeColors,
    ...colorShades,
    spacing,
    // breakpoints,
    borders
  };
}
