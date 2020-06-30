import colors, { defaultColors } from '..';

describe('colors', () => {
  test('returns default color set', () => {
    const result = colors();
    expect(result).toEqual(defaultColors);
  });

  test('overrides specified color values', () => {
    const red = 'rgba(255, 0, 0, 0.8)';
    const result = colors({ overrides: { red } });
    expect(result).toEqual({
      ...defaultColors,
      red
    });
  });
});
