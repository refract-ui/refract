import { generateTheme } from '../cascade';
import { default as init, defaultExtensions, CoreTheme } from '..';

describe('theme', () => {
  test('init', () => {
    init();
  });

  test('default theme', () => {
    const theme = generateTheme<CoreTheme>({
      extensions: defaultExtensions
    });

    console.log('@-->theme', theme);
  });

  test('color overrides', () => {
    const red = 'red';
    const theme = generateTheme<CoreTheme>({
      extensions: defaultExtensions,
      settings: {
        colors: {
          red
        }
      }
    });

    expect(theme.colors.red).toEqual(red);
  });

  test('font stack array overrides', () => {
    const fontFace = 'comic sans';
    const theme = generateTheme<CoreTheme>({
      extensions: defaultExtensions,
      settings: {
        fontStacks: {
          sans: [fontFace]
        }
      }
    });

    expect(theme.fontStacks.sans[0]).toEqual(fontFace);
  });

  test('font stack string overrides', () => {
    const fontFace = 'comic sans';
    const theme = generateTheme<CoreTheme>({
      extensions: defaultExtensions,
      settings: {
        fontStacks: {
          sans: fontFace
        }
      }
    });

    expect(theme.fontStacks.sans[0]).toEqual(fontFace);
  });

  test('contrast color', () => {
    const theme = init();

    expect(theme.contrastColor({ color: '#000' })).toEqual(
      theme.themeColors.light
    );
    expect(theme.contrastColor({ color: '#fff' })).toEqual(
      theme.themeColors.dark
    );
  });
});
