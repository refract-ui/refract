import { defaults, isFunction, reduce } from 'lodash';
import { ThemeExtension, applyThemeSettings } from '../cascade';
import { colorNames, Colors } from '../colors';
import rampColor from '../../utils/rampColor';

export type ColorShades = {
  [Key in keyof Colors as `${Key}100`]: string;
} & {
  [Key in keyof Colors as `${Key}200`]: string;
} & {
  [Key in keyof Colors as `${Key}300`]: string;
} & {
  [Key in keyof Colors as `${Key}400`]: string;
} & {
  [Key in keyof Colors as `${Key}500`]: string;
} & {
  [Key in keyof Colors as `${Key}600`]: string;
} & {
  [Key in keyof Colors as `${Key}700`]: string;
} & {
  [Key in keyof Colors as `${Key}800`]: string;
} & {
  [Key in keyof Colors as `${Key}900`]: string;
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
