import tc from 'tinycolor2';

/**
 * darken a color by passing an array of opacity values
 * used for accretive coloring
 * @param initColor - initial color
 * @param layers - array of opacity values used to darken initial color
 */

export const darkenColor = (
  initColor: string,
  layers: Array<number>
): string => {
  const reducedLayers = layers.reduce((init, layer) => init + layer, 0);
  const color = tc(initColor);

  return color.darken(reducedLayers).toRgbString();
};

export const lightenColor = (
  initColor: string,
  layers: Array<number>
): string => {
  const reducedLayers = layers.reduce((init, layer) => init + layer, 0);
  const color = tc(initColor);

  return color.lighten(reducedLayers).toRgbString();
};
