import { reduce, map, range } from 'lodash';
import tc from 'tinycolor2';
import { ThemeExtension, applyThemeSettings } from '../cascade';
import { themeColorNames, ThemeColors } from '../themeColors';

export type ThemeColorOpacities = {
  [Key in keyof ThemeColors as `${Key}10`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}20`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}30`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}40`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}50`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}60`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}70`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}80`]: string;
} & {
  [Key in keyof ThemeColors as `${Key}90`]: string;
};

export type AlphaRamp = {
  [name: string]: string;
};

function rampAlpha(name: string, c: string): AlphaRamp {
  const color = tc(c);
  const opacities = map(range(1, 10), i =>
    color
      .clone()
      .setAlpha(i / 10)
      .toString()
  );
  return reduce(
    opacities,
    (memo, val, idx) => {
      const key = `${name}${(
        idx + 1
      ).toString()}0` as keyof ThemeColorOpacities;
      memo[key] = val;
      return memo;
    },
    {} as Partial<ThemeColorOpacities>
  );
}

export const extension: ThemeExtension<ThemeColorOpacities> = {
  name: 'themeColorOpacities',
  deps: ['themeColors'],
  defaults: ({ themeColors }: { themeColors: ThemeColors }) =>
    reduce(
      themeColorNames,
      (memo: ThemeColorOpacities, c: keyof ThemeColors) => {
        return {
          ...memo,
          ...rampAlpha(c, themeColors[c])
        };
      },
      {} as ThemeColorOpacities
    ),
  apply: applyThemeSettings
};
