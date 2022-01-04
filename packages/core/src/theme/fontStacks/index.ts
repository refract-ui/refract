import { ThemeExtension, applyThemeSettings } from '../cascade';
import { reduce, isObject, isString } from 'lodash';

export type FontStack = Array<string>;

export enum StandardFaces {
  sans,
  serif,
  mono
}

export type FontStackTypes = {
  [K in keyof typeof StandardFaces]: string | FontStack;
} & {
  [name: string]: string | FontStack;
};

export type FontStacks = FontStackTypes & {
  fallbackFace: keyof FontStackTypes;
};

const defaultFontStacks = {
  fallbackFace: 'sans',
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ],
  serif: [
    'Cambria',
    '"Hoefler Text"',
    'Utopia',
    '"Liberation Serif"',
    '"Nimbus Roman No9 L Regular"',
    'Times',
    '"Times New Roman"',
    'serif'
  ],
  mono: [
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace'
  ]
} as FontStacks;

export const extension: ThemeExtension<FontStacks> = {
  name: 'fontStacks',
  deps: [],
  defaults: defaultFontStacks,
  apply: (props): FontStacks => {
    if (isObject(props.override)) {
      const override = reduce(
        props.override,
        (memo, val, key: keyof FontStacks) => {
          if (isString(val)) {
            memo[key] = [val];
          } else {
            memo[key] = val;
          }
          return memo;
        },
        {} as Partial<FontStacks>
      ) as unknown;

      props.override = override as Partial<typeof props.theme.fontStacks>;
    }

    return applyThemeSettings<Record<string, unknown>, FontStacks>(props);
  }
};
