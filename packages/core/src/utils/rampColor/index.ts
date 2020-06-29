import { map, range, reduce } from 'lodash';
import tc from 'tinycolor2';

export type ColorRamp = {
  [name: string]: string;
};

interface RampColorProps {
  name: string;
  startColor: string;
  step: number;
}

export default function rampColor({
  name,
  startColor,
  step
}: RampColorProps): ColorRamp {
  const color = tc(startColor);

  const tints = map(range(5, 1, -1), i =>
    color
      .clone()
      .lighten(i * step)
      .toRgbString()
  );
  const shades = map(range(1, 5), i =>
    color
      .clone()
      .darken(i * step)
      .toRgbString()
  );

  return {
    ...reduce(
      tints,
      (memo, val, idx) => {
        memo[`${name}${idx + 1}00`] = val;
        return memo;
      },
      {}
    ),
    [`${name}500`]: color.toRgbString(),
    ...reduce(
      shades,
      (memo, val, idx) => {
        memo[`${name}${idx + 6}00`] = val;
        return memo;
      },
      {}
    )
  };
}
