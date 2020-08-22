import { defaultsDeep, isFunction } from 'lodash';
import { FontFaces } from '../fontFaces';
import { FontStacks } from '../fontStacks';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';
import { ColorShades } from '../colorShades';
import { FontVariants, FontVariant } from '../fontVariants';

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
  large
}

export type FontTagMappings = {
  [tagName in keyof typeof Tags]: FontVariant;
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
    h1: fontVariants.heading,
    h2: fontVariants.heading,
    h3: fontVariants.heading,
    h4: fontVariants.heading,
    h5: fontVariants.heading,
    h6: fontVariants.heading,
    a: fontVariants.default,
    display1: fontVariants.display,
    display2: fontVariants.display,
    display3: fontVariants.display,
    display4: fontVariants.display,
    default: fontVariants.default,
    button: fontVariants.button,
    listItem: fontVariants.default,
    small: fontVariants.default,
    large: fontVariants.default
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
