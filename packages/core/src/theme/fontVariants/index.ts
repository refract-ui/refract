import { ThemeExtension, applyThemeSettings } from '../cascade';
import { reduce, defaults } from 'lodash';
import { FontStack, FontStacks } from '../fontStacks';
import { Body } from '../body';

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
  color?: string;
};

export type FontVariants = {
  [K in keyof typeof RequiredVariants]: FontVariant;
} & {
  [name: string]: Partial<FontVariant>;
};

export const extension: ThemeExtension<FontVariants> = {
  name: 'fontVariants',
  deps: ['fontStacks', 'body'],
  defaults: ({ fontStacks, body }: { fontStacks: FontStacks; body: Body }) => {
    const defaultStack = fontStacks[fontStacks.fallbackFace];
    const defaultVariantProps = {
      stack: defaultStack,
      weight: 500,
      style: 'normal',
      lineHeight: '1.5',
      letterSpacing: '0'
    } as FontVariant;

    const defaultFontVariants = {
      heading: {
        stack: defaultStack,
        lineHeight: '1.3',
        letterSpacing: '1.2px'
      },
      display: {
        stack: defaultStack,
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

    return reduce(
      defaultFontVariants,
      (memo, val, key) => {
        memo[key] = defaults(val, defaultVariantProps);
        return memo;
      },
      {} as FontVariants
    );
  },
  apply: applyThemeSettings
};
