import React from 'react';
import { map, reduce, groupBy, toPairs, fromPairs } from 'lodash';
import ColorPalette, { ColorPaletteProps } from './ColorPalette';

const splitColorsByKey = ({ colors }: ColorPaletteProps) =>
  reduce(
    groupBy(toPairs(colors), ([k]) => k.match(/([A-Za-z]+)/)[0]),
    (memo, v, k) => ({
      ...memo,
      [k]: fromPairs(v)
    }),
    {}
  );

const ColorShadesPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  const shades = splitColorsByKey({ colors });

  return (
    <>
      {map(shades, (v, k) => (
        <ColorPalette key={k} colors={v} />
      ))}
    </>
  );
};

export default ColorShadesPalette;
