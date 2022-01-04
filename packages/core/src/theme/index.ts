import type { FlattenSimpleInterpolation } from 'styled-components';
import { ThemeExtensionArray, ThemeSettings, generateTheme } from './cascade';
import { extension as colors, Colors } from './colors';
import { extension as colorShades, ColorShades } from './colorShades';
import { extension as themeColors, ThemeColors } from './themeColors';
import {
  extension as themeColorShades,
  ThemeColorShades
} from './themeColorShades';
import {
  extension as themeColorOpacities,
  ThemeColorOpacities
} from './themeColorOpacities';
import { extension as subtleColors, SubtleColors } from './subtleColors';
import { extension as darkColors, DarkColors } from './darkColors';
import { extension as body, Body } from './body';
import { extension as spacing, Spacing } from './spacing';
import { extension as breakpoints, Breakpoints } from './breakpoints';
import { extension as borders, Borders } from './borders';
import { extension as fontStacks, FontStacks } from './fontStacks';
import { extension as fontVariants, FontVariants } from './fontVariants';
import { extension as fontTags, FontTagMappings } from './fontTagMappings';
import {
  extension as blockElements,
  BlockElementMappings
} from './globalBlockElements';
import { extension as globalStyles, GlobalStyleConfig } from './globalStyles';
import { extension as mq, MediaQueries } from './mediaQueries';
import {
  extension as contrastColor,
  ContrastColor
} from '../utils/contrastColor';

export type CoreTheme = {
  colors: Colors;
  colorShades: ColorShades;
  themeColors: ThemeColors;
  themeColorOpacities: ThemeColorOpacities;
  themeColorShades: ThemeColorShades;
  subtleColors: SubtleColors;
  darkColors: DarkColors;
  body: Body;
  spacing: Spacing;
  breakpoints: Breakpoints;
  borders: Borders;
  fontStacks: FontStacks;
  fontVariants: FontVariants;
  fontTags: FontTagMappings;
  blockElements: BlockElementMappings;
  globalStyles: GlobalStyleConfig;
  mq: MediaQueries;
  contrastColor: ContrastColor;
};

export const defaultExtensions: ThemeExtensionArray<CoreTheme> = [
  colors,
  colorShades,
  themeColors,
  themeColorShades,
  themeColorOpacities,
  subtleColors,
  darkColors,
  body,
  spacing,
  breakpoints,
  borders,
  fontStacks,
  fontVariants,
  fontTags,
  blockElements,
  globalStyles,
  mq,
  contrastColor
];

// TODO: this may not be the best place for this
export type ThemeComponent = {
  componentCss: (() => FlattenSimpleInterpolation)[];
};

export default function init<TTheme extends CoreTheme = CoreTheme>(
  settings: ThemeSettings<TTheme> = {}
): TTheme {
  const extensions: ThemeExtensionArray<TTheme> =
    defaultExtensions as ThemeExtensionArray<TTheme>;
  return generateTheme<TTheme>({ extensions, settings });
}
