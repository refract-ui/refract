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

interface ThemeProps {
  colors?: ((props: ColorOverrideProps) => Colors) | Partial<Colors>;
  themeColors?:
    | ((props: ThemeColorOverrideProps) => ThemeColors)
    | Partial<ThemeColors>;
  colorShades?:
    | ((props: ColorShadeOverrideProps) => ColorShades)
    | Partial<ColorShades>;
  spacing?: ((props: SpacingOverrideProps) => Spacing) | Partial<Spacing>;
}

export type Theme = Colors &
  ThemeColors & {
    spacing: Spacing;
  };

export default function theme({
  colors: colorOverrides,
  themeColors: themeColorOverrides,
  colorShades: colorShadeOverrides,
  spacing: spacingOverrides
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

  return {
    ...colors,
    ...themeColors,
    ...colorShades,
    spacing
  };
}
