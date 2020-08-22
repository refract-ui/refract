import { reduce, defaults, isFunction, defaultsDeep } from 'lodash';
import { FontFaces } from '../fontFaces';
import { FontStack, FontStacks } from '../fontStacks';

enum RequiredVariants {
  heading,
  display,
  default,
  code,
  quote,
  button,
  anchor,
  link
}

export type FontVariant = {
  stack: FontStack;
  weight: string | number;
  style: string;
  lineHeight: string;
  letterSpacing: string;
  color: string;
};

export type FontVariants = {
  [K in keyof typeof RequiredVariants]: Partial<FontVariant>;
} & {
  [name: string]: Partial<FontVariant>;
};

export interface FontVariantOverrideProps {
  fontFaces: FontFaces;
  fontStacks: FontStacks;
  defaults: FontVariants;
}

interface FontVariantProps {
  fontFaces: FontFaces;
  fontStacks: FontStacks;
  overrides:
    | ((props: FontVariantOverrideProps) => FontVariants)
    | Partial<FontVariants>;
}

export default function fontVariants({
  fontFaces,
  fontStacks,
  overrides = {}
}: FontVariantProps): FontVariants {
  const defaultVariantProps = {
    stack: fontStacks.sans,
    weight: 500,
    style: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0'
  } as FontVariant;

  const defaultFontVariants = {
    heading: {
      stack: fontStacks.sans,
      lineHeight: '1.3',
      letterSpacing: '1.2px'
    },
    display: {
      stack: fontStacks.sans,
      weight: 300,
      lineHeight: '1.3',
      letterSpacing: '1.2px'
    },
    default: {},
    code: {
      stack: fontStacks.mono
    },
    quote: {
      stack: fontStacks.serif
    },
    button: {},
    anchor: {},
    link: {}
  } as FontVariants;

  const defaultVariants = reduce(
    defaultFontVariants,
    (memo, val, key) => {
      memo[key] = defaults(val, defaultVariantProps);
      return memo;
    },
    {} as FontVariants
  );

  if (isFunction(overrides)) {
    return overrides({ fontFaces, fontStacks, defaults: defaultVariants });
  }

  return defaultsDeep(overrides, defaultVariants);
}
