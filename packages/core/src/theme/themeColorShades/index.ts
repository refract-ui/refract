import { defaults, isFunction, reduce } from 'lodash';
import { themeColorNames, ThemeColors } from '../themeColors';
import rampColor from '../../utils/rampColor';

export type ThemeColorShades = {
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;

  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  secondary500: string;
  secondary600: string;
  secondary700: string;
  secondary800: string;
  secondary900: string;

  success100: string;
  success200: string;
  success300: string;
  success400: string;
  success500: string;
  success600: string;
  success700: string;
  success800: string;
  success900: string;

  info100: string;
  info200: string;
  info300: string;
  info400: string;
  info500: string;
  info600: string;
  info700: string;
  info800: string;
  info900: string;

  warning100: string;
  warning200: string;
  warning300: string;
  warning400: string;
  warning500: string;
  warning600: string;
  warning700: string;
  warning800: string;
  warning900: string;

  danger100: string;
  danger200: string;
  danger300: string;
  danger400: string;
  danger500: string;
  danger600: string;
  danger700: string;
  danger800: string;
  danger900: string;

  light100: string;
  light200: string;
  light300: string;
  light400: string;
  light500: string;
  light600: string;
  light700: string;
  light800: string;
  light900: string;

  dark100: string;
  dark200: string;
  dark300: string;
  dark400: string;
  dark500: string;
  dark600: string;
  dark700: string;
  dark800: string;
  dark900: string;
};

export interface ThemeColorShadeOverrideProps {
  themeColors: ThemeColors;
  defaults: ThemeColorShades;
}

export interface ThemeColorShadeProps {
  themeColors: ThemeColors;
  overrides:
    | ((props: ThemeColorShadeOverrideProps) => ThemeColorShades)
    | Partial<ThemeColorShades>;
}

export default function themeColorShades({
  themeColors,
  overrides
}: ThemeColorShadeProps): ThemeColorShades {
  const defaultThemeColorShades: ThemeColorShades = reduce(
    themeColorNames,
    (memo: ThemeColorShades, c: keyof ThemeColors) => {
      return {
        ...memo,
        ...rampColor({ name: c, startColor: themeColors[c] })
      };
    },
    {} as ThemeColorShades
  );

  if (isFunction(overrides)) {
    return overrides({ themeColors, defaults: defaultThemeColorShades });
  }

  return defaults(overrides, defaultThemeColorShades);
}
