import { reduce, isFunction, defaults } from 'lodash';
import { StandardFaces, FontFaces } from '../fontFaces';

export type FontStack = Array<string>;

export type FontStacks = {
  [K in keyof typeof StandardFaces]: FontStack;
} & {
  [name: string]: FontStack;
};

const defaultFontStacks = {
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

export interface FontStackOverrideProps {
  fontFaces: FontFaces;
  defaults: FontStacks;
}

interface FontStackProps {
  fallbackFace: keyof typeof StandardFaces;
  fontFaces: FontFaces;
  overrides:
    | ((props: FontStackOverrideProps) => FontStacks)
    | Partial<FontStacks>;
}

export default function fontStacks({
  fallbackFace = 'sans',
  fontFaces,
  overrides = {}
}: FontStackProps): FontStacks {
  const defaultStacks = reduce(
    fontFaces,
    (memo, val, key) => {
      const stack = (defaultFontStacks[key] ||
        defaultFontStacks[fallbackFace]) as FontStack;

      // prefer custom font if matching set is found in fontFaces config
      if (val) {
        stack.unshift(val.name);
      }

      memo[key] = stack;

      return memo;
    },
    {} as FontStacks
  );

  if (isFunction(overrides)) {
    return overrides({ fontFaces, defaults: defaultStacks });
  }

  return defaults(overrides, defaultStacks);
}
