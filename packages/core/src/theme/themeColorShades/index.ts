import { reduce } from 'lodash';
import { ThemeExtension, applyThemeSettings } from '../cascade';
import { themeColorNames, ThemeColors } from '../themeColors';
import rampColor from '../../utils/rampColor';

export type ThemeColorShades = {
  [Key in keyof ThemeColors as `${Key}100`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}200`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}300`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}400`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}500`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}600`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}700`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}800`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}900`]: string;
};

export const extension: ThemeExtension<ThemeColorShades> = {
  name: 'themeColorShades',
  deps: ['colors', 'colorShades', 'themeColors'],
  defaults: ({ themeColors }: { themeColors: ThemeColors }) =>
    reduce(
      themeColorNames,
      (memo: ThemeColorShades, c: keyof ThemeColors) => {
        return {
          ...memo,
          ...rampColor({ name: c, startColor: themeColors[c] })
        };
      },
      {} as ThemeColorShades
    ),
  apply: applyThemeSettings
};
