import { get, reduce, defaults, isFunction } from 'lodash';

export type Spacing = {
  basis: number;
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
};

export interface SpacingOverrideProps {
  defaults: Spacing;
  calculateSpacing: (basis: number) => Spacing;
}

export interface SpacingProps {
  overrides: ((props: SpacingOverrideProps) => Spacing) | Partial<Spacing>;
}

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
      (memo, k, v) => {
        return {
          ...memo,
          [k]: `${v}rem`
        };
      },
      {} as Spacing
    )
  };
}

export default function spacing({ overrides = {} }: SpacingProps): Spacing {
  const basis = get(overrides, 'basis', defaultBasis);
  const defaultSpacing = calculateSpacing(basis);

  if (isFunction(overrides)) {
    return overrides({ defaults: defaultSpacing, calculateSpacing });
  }

  return defaults(overrides, defaultSpacing);
}
