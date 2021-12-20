import { defaults, isFunction, reduce } from 'lodash';
import { ThemeExtension, applyThemeSettings } from '../cascade';
import { colorNames, Colors } from '../colors';
import rampColor from '../../utils/rampColor';

export type ColorShades = {
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;

  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
  blue500: string;
  blue600: string;
  blue700: string;
  blue800: string;
  blue900: string;

  indigo100: string;
  indigo200: string;
  indigo300: string;
  indigo400: string;
  indigo500: string;
  indigo600: string;
  indigo700: string;
  indigo800: string;
  indigo900: string;

  purple100: string;
  purple200: string;
  purple300: string;
  purple400: string;
  purple500: string;
  purple600: string;
  purple700: string;
  purple800: string;
  purple900: string;

  pink100: string;
  pink200: string;
  pink300: string;
  pink400: string;
  pink500: string;
  pink600: string;
  pink700: string;
  pink800: string;
  pink900: string;

  red100: string;
  red200: string;
  red300: string;
  red400: string;
  red500: string;
  red600: string;
  red700: string;
  red800: string;
  red900: string;

  orange100: string;
  orange200: string;
  orange300: string;
  orange400: string;
  orange500: string;
  orange600: string;
  orange700: string;
  orange800: string;
  orange900: string;

  yellow100: string;
  yellow200: string;
  yellow300: string;
  yellow400: string;
  yellow500: string;
  yellow600: string;
  yellow700: string;
  yellow800: string;
  yellow900: string;

  green100: string;
  green200: string;
  green300: string;
  green400: string;
  green500: string;
  green600: string;
  green700: string;
  green800: string;
  green900: string;

  teal100: string;
  teal200: string;
  teal300: string;
  teal400: string;
  teal500: string;
  teal600: string;
  teal700: string;
  teal800: string;
  teal900: string;

  cyan100: string;
  cyan200: string;
  cyan300: string;
  cyan400: string;
  cyan500: string;
  cyan600: string;
  cyan700: string;
  cyan800: string;
  cyan900: string;
};

export const extension: ThemeExtension<ColorShades> = {
  name: 'colorShades',
  deps: ['colors'],
  defaults: ({ colors }: { colors: Colors }) => {
    return reduce(
      colorNames,
      (memo: ColorShades, c: keyof Colors) => {
        return {
          ...memo,
          ...rampColor({ name: c, startColor: colors[c] })
        };
      },
      {} as ColorShades
    );
  },
  apply: applyThemeSettings
};
