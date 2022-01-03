import rampColor from '..';

describe('rampColor', () => {
  test('returns a range of colors with increasing brightness', () => {
    const startColor = 'red';
    const name = 'red';
    const ramp = rampColor({ name, startColor, step: 8 });

    expect(ramp).toEqual({
      red100: 'rgb(255, 204, 204)',
      red200: 'rgb(255, 163, 163)',
      red300: 'rgb(255, 122, 122)',
      red400: 'rgb(255, 82, 82)',
      red500: 'rgb(255, 0, 0)',
      red600: 'rgb(214, 0, 0)',
      red700: 'rgb(173, 0, 0)',
      red800: 'rgb(133, 0, 0)',
      red900: 'rgb(92, 0, 0)'
    });
  });
});
