import { reduce } from 'lodash';
import { BlockElements } from '@refract-ui/core';
import { $enum } from 'ts-enum-util';

type ThemeDefaultSettings = {
  [p: string]: string;
};

const defaultBlockSettings = reduce(
  $enum(BlockElements).getKeys(),
  (memo: ThemeDefaultSettings, val) => ({
    ...memo,
    [`${val}.mt`]: 'spacing[0]',
    [`${val}.mb`]: 'spacing[3]'
  }),
  {}
);

export const globalStyleSettings: ThemeDefaultSettings = {
  ...defaultBlockSettings,
  'ul.pl': 'spacing[4]',
  'ol.pl': 'spacing[4]',
  'pre.bg': 'colorShades.gray300',
  'pre.px': 'spacing[4]',
  'pre.py': 'spacing[4]',
  'kbd.bg': 'colorShades.gray300',
  'kbd.px': 'spacing[2]',
  'kbd.py': 'spacing[2]',
  'dd.ml': 'spacing[0]',
  'dd.mb': 'spacing[2]',
  'figure.mx': 'spacing[0]',
  h1: 'fontVariants.heading',
  h2: 'fontVariants.heading',
  h3: 'fontVariants.heading',
  h4: 'fontVariants.heading',
  h5: 'fontVariants.heading',
  h6: 'fontVariants.heading',
  a: 'fontVariants.default',
  display1: 'fontVariants.display',
  display2: 'fontVariants.display',
  display3: 'fontVariants.display',
  display4: 'fontVariants.display',
  default: 'fontVariants.default',
  button: 'fontVariants.button',
  listItem: 'fontVariants.default',
  small: 'fontVariants.default',
  large: 'fontVariants.default',
  code: 'fontVariants.code'
};
