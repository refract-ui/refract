import { ThemeBreakpoints } from '../../utils/componentThemeBreakpoints';
import lightenOrDarken from '../../utils/lightenOrDarken';
import { Theme } from '..';
import { ThemeColors } from '../themeColors';
import { BorderBreakpointStyle } from '../borders';
import contrastColor from '../../utils/contrastColor';

export type ButtonThemeBase = {
  backgroundColor: string;
  // fontSize: string; TODO: set up font size theme defaults
  px: string;
  py: string;
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
};

export type ButtonThemeBreakpoint = ButtonThemeBase & {
  _hover: (base: ButtonThemeBase) => Partial<ButtonThemeBase>;
  _active: (base: ButtonThemeBase) => Partial<ButtonThemeBase>;
};

export function genButtonTheme({
  theme,
  color = 'primary'
}: {
  theme: Theme;
  color: keyof ThemeColors;
}): ThemeBreakpoints<ButtonThemeBreakpoint> {
  const backgroundColor = theme[color];

  const textColor = contrastColor({ theme, color: backgroundColor });

  const xs = {
    backgroundColor,
    textColor,
    border: theme.borders.xs,
    px: `${theme.spacing['3']}`,
    py: `${theme.spacing['2']}`,

    _hover: base => ({
      backgroundColor: lightenOrDarken({
        color: base.backgroundColor,
        amount: 10
      })
    }),

    _active: base => ({
      backgroundColor: lightenOrDarken({
        color: base.backgroundColor,
        amount: 15
      })
    })
  } as ButtonThemeBreakpoint;

  const md = {
    border: theme.borders.md,
    px: `${theme.spacing['4']}`,
    py: `${theme.spacing['3']}`
  };

  return { xs, md };
}
