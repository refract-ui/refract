import {
  ThemeExtension,
  ExtendTheme
} from '../../utils/componentThemeBreakpoints';
import lightenOrDarken from '../../utils/lightenOrDarken';
import { Theme } from '..';
import { ThemeColors } from '../themeColors';
import { BorderBreakpointStyle } from '../borders';

export type ButtonThemeBase = {
  backgroundColor: string;
  // fontSize: string; TODO: set up font size theme defaults
  px: string;
  py: string;
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
};

export type ButtonThemeBreakpoint = ButtonThemeBase & {
  _hover?: ThemeExtension<ButtonThemeBreakpoint>;
  _active?: ThemeExtension<ButtonThemeBreakpoint>;
};

export function genButtonTheme({
  theme,
  color = 'primary'
}: {
  theme: Theme;
  color: keyof ThemeColors;
}): ExtendTheme<ButtonThemeBreakpoint> {
  return {
    xs: {
      backgroundColor: theme[color],
      textColor: ({ contrastColor, backgroundColor }) =>
        contrastColor(backgroundColor),
      border: theme.borders.xs,
      px: `${theme.spacing['3']}`,
      py: `${theme.spacing['2']}`
    },

    md: {
      border: theme.borders.md,
      px: `${theme.spacing['4']}`,
      py: `${theme.spacing['3']}`
    }
  };
}
