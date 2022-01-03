import { reduce } from 'lodash';
import { ThemeExtension, applyThemeSettings } from '../cascade';

export type Spacing = {
  basis: number;
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
};

const defaultBasis = 1;

function calculateSpacing(basis: number): Spacing {
  return {
    basis,
    ...reduce(
      {
        0: 0,
        1: basis / 4,
        2: basis / 2,
        3: basis,
        4: basis * 1.5,
        5: basis * 3
      },
      (memo, v, k) => {
        return {
          ...memo,
          [`${k}`]: `${v}rem`
        };
      },
      {} as Spacing
    )
  };
}

export const extension: ThemeExtension<Spacing> = {
  name: 'spacing',
  deps: [],
  defaults: calculateSpacing(defaultBasis),
  apply: applyThemeSettings
};
