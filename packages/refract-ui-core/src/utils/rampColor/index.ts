import { map, range, reduce } from 'lodash';
import { ColorShades } from '../../theme/colorShades';
import { Colors } from '../../theme/colors';
import { ThemeColors } from '../../theme/themeColors';
import tc from 'tinycolor2';

export type ColorRamp = {
  [name: string]: string;
};

interface RampColorProps {
  name: keyof Colors | keyof ThemeColors;
  startColor: string;
  step?: number;
}

export default function rampColor({
  name,
  startColor,
  step = 8
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
        const key = `${name}${idx + 1}00` as keyof ColorShades;
        memo[key] = val;
        return memo;
      },
      {} as Partial<ColorShades>
    ),
    [`${name}500`]: color.toRgbString(),
    ...reduce(
      shades,
      (memo, val, idx) => {
        const key = `${name}${idx + 6}00` as keyof ColorShades;
        memo[key] = val;
        return memo;
      },
      {} as Partial<ColorShades>
    )
  };
}
