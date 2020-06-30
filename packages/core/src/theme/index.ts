import genColors, { Colors, ColorOverrideProps } from './colors';
import genColorShades, {
  ColorShades,
  ColorShadeOverrideProps
} from './colorShades';
import genThemeColors, {
  ThemeColors,
  ThemeColorOverrideProps
} from './themeColors';

interface ThemeProps {
  colors?: ((props: ColorOverrideProps) => Colors) | Partial<Colors>;
  themeColors?:
    | ((props: ThemeColorOverrideProps) => ThemeColors)
    | Partial<ThemeColors>;
  colorShades?:
    | ((props: ColorShadeOverrideProps) => ColorShades)
    | Partial<ColorShades>;
}

export type Theme = Colors & ThemeColors;

export default function theme({
  colors: colorOverrides,
  themeColors: themeColorOverrides,
  colorShades: colorShadeOverrides
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

  return {
    ...colors,
    ...themeColors,
    ...colorShades
  };
}
