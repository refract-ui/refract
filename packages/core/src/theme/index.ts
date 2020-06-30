import genColors, { Colors, ColorOverrideProps } from './colors';
import genThemeColors, {
  ThemeColors,
  ThemeColorOverrideProps
} from './themeColors';

interface ThemeProps {
  colors: ((props: ColorOverrideProps) => Colors) | Partial<Colors>;
  themeColors:
    | ((props: ThemeColorOverrideProps) => ThemeColors)
    | Partial<ThemeColors>;
}

export type Theme = Colors & ThemeColors;

export default function({
  colors: colorOverrides,
  themeColors: themeColorOverrides
}: ThemeProps): Theme {
  const colors = genColors({ overrides: colorOverrides });
  const themeColors = genThemeColors({
    colors,
    overrides: themeColorOverrides
  });

  return {
    ...colors,
    ...themeColors
  };
}
