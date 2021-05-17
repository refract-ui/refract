import { defaultsDeep, isFunction } from 'lodash';
import { FontFaces } from '../fontFaces';
import { FontStacks } from '../fontStacks';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';
import { ColorShades } from '../colorShades';
import { FontVariants } from '../fontVariants';
import { TypographyThemeMapping } from '../../utils/mapTypographyStyles';

export enum Tags {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  display1,
  display2,
  display3,
  display4,
  default,
  button,
  listItem,
  small,
  large,
  code
}

export type FontTagMappings = {
  [tagName in keyof typeof Tags]: TypographyThemeMapping;
};

export interface FontTagMappingOverrideProps {
  fontFaces: FontFaces;
  fontStacks: FontStacks;
  fontVariants: FontVariants;
  colors: Colors;
  themeColors: ThemeColors;
  colorShades: ColorShades;
  defaults: FontTagMappings;
}

interface FontTagMappingProps {
  fontFaces: FontFaces;
  fontStacks: FontStacks;
  fontVariants: FontVariants;
  colors: Colors;
  themeColors: ThemeColors;
  colorShades: ColorShades;
  overrides:
    | ((props: FontTagMappingOverrideProps) => FontTagMappings)
    | Partial<FontTagMappings>;
}

export default function fontTagMappings({
  fontFaces,
  fontStacks,
  fontVariants,
  colors,
  themeColors,
  colorShades,
  overrides = {}
}: FontTagMappingProps): FontTagMappings {
  const defaultFontTagMappings = {
    h1: {
      ...fontVariants.heading,
      size: '3rem'
    },
    h2: {
      ...fontVariants.heading,
      size: '2.5rem'
    },
    h3: {
      ...fontVariants.heading,
      size: '1.75rem'
    },
    h4: {
      ...fontVariants.heading,
      size: '1.5rem'
    },
    h5: {
      ...fontVariants.heading,
      size: '1.25rem'
    },
    h6: {
      ...fontVariants.heading,
      size: '1rem'
    },
    a: {
      ...fontVariants.default,
      size: '1rem'
    },
    display1: {
      ...fontVariants.display,
      size: '6rem'
    },
    display2: {
      ...fontVariants.display,
      size: '5.5rem'
    },
    display3: {
      ...fontVariants.display,
      size: '4.5rem'
    },
    display4: {
      ...fontVariants.display,
      size: '3.5rem'
    },
    default: {
      ...fontVariants.default,
      size: '1rem'
    },
    button: {
      ...fontVariants.button,
      size: '1.25rem'
    },
    listItem: {
      ...fontVariants.default,
      size: '100%'
    },
    small: {
      ...fontVariants.default,
      size: '80%'
    },
    large: {
      ...fontVariants.default,
      size: '120%'
    },
    code: {
      ...fontVariants.code,
      size: '1rem'
    }
  } as FontTagMappings;

  if (isFunction(overrides)) {
    return overrides({
      colors,
      themeColors,
      colorShades,
      fontFaces,
      fontStacks,
      fontVariants,
      defaults: defaultFontTagMappings
    });
  }

  return defaultsDeep(overrides, defaultFontTagMappings);
}
