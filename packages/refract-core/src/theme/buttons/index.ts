import {
  ThemeBreakpoints,
  ComponentThemeBreakpoint
} from '../../utils/componentThemeBreakpoints';
import { isFunction, defaults } from 'lodash';
import { SansFunctions } from '../../utils/createThemedComponent';
import { BorderBreakpointStyle, Borders } from '../borders';
import { Spacing } from '../spacing';
import { FontVariants } from '../fontVariants';
import { Colors } from '../colors';
import { ColorShades } from '../colorShades';
import { Container } from '../containers';
import { ThemeColors } from '../themeColors';

export type ButtonStates = '_hover' | '_active';

export type ButtonTheme = {
  border?: Partial<BorderBreakpointStyle>;
  textColor?: string;
  fontSize?: string;
  width?: string;
};

export type ButtonThemeBreakpoint = ComponentThemeBreakpoint<
  ButtonTheme & Partial<SansFunctions<Container>>,
  ButtonStates
>;

export type ButtonThemeConfig = ThemeBreakpoints<ButtonThemeBreakpoint>;

export interface ButtonOverrideProps {
  colors?: Colors;
  spacing?: Spacing;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  fontVariants?: FontVariants;
  borders?: Borders;
  defaults: ButtonThemeConfig;
}

export type ButtonThemeExtensions =
  | Partial<ButtonThemeBreakpoint>
  | ((props: ButtonOverrideProps) => ButtonThemeConfig);

export interface ButtonThemeBase {
  colors?: Colors;
  spacing?: Spacing;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  fontVariants?: FontVariants;
  borders?: Borders;
  overrides?: ButtonThemeExtensions;
}

export default function genButtonTheme({
  colors,
  spacing,
  colorShades,
  themeColors,
  fontVariants,
  borders,
  overrides
}: ButtonThemeBase): ButtonThemeConfig {
  const defaultButtonTheme = {
    xs: {
      bg: themeColors?.primary,
      textColor: ({ contrastColor, bg }) =>
        contrastColor && contrastColor(bg as string),
      border: borders?.xs,
      px: `${spacing && spacing['3']}`,
      py: `${spacing && spacing['2']}`,
      w: '100%'
    },

    md: {
      border: borders?.md,
      px: `${spacing && spacing['4']}`,
      py: `${spacing && spacing['3']}`,
      w: 'auto'
    }
  } as ThemeBreakpoints<ButtonThemeBreakpoint>;

  if (isFunction(overrides)) {
    return overrides({
      colors,
      spacing,
      colorShades,
      themeColors,
      fontVariants,
      borders,
      defaults: defaultButtonTheme
    });
  }

  return defaults(overrides, defaultButtonTheme);
}
