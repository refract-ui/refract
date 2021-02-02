import genColors, { Colors, ColorOverrideProps } from './colors';
import genSubtleColors, {
  SubtleColors,
  SubtleColorOverrideProps
} from './subtleColors';
import genDarkColors, {
  DarkColors,
  DarkColorOverrideProps
} from './darkColors';
import genColorShades, {
  ColorShades,
  ColorShadeOverrideProps
} from './colorShades';
import { FlattenSimpleInterpolation } from 'styled-components';
import genThemeColors, {
  ThemeColors,
  ThemeColorOverrideProps
} from './themeColors';
import genThemeColorShades, {
  ThemeColorShades,
  ThemeColorShadeOverrideProps
} from './themeColorShades';
import genSpacing, { Spacing, SpacingOverrideProps } from './spacing';
import genBreakpoints, {
  Breakpoints,
  BreakpointOverrideProps
} from './breakpoints';
import genBorders, { Borders, BorderOverrideProps } from './borders';
import genMediaQueries, { MediaQueries } from './mediaQueries';
import genFontFaces, { FontFaces, StandardFaces } from './fontFaces';
import genFontStacks, {
  FontStacks,
  FontStackOverrideProps
} from './fontStacks';
import genFontVariants, {
  FontVariants,
  FontVariantOverrideProps
} from './fontVariants';
import genFontTagMappings, {
  FontTagMappings,
  FontTagMappingOverrideProps
} from './fontTagMappings';
import genBlockElementMappings, {
  BlockElementMappings,
  BlockElementMappingOverrideProps
} from './globalBlockElements';

// components
import genIconProps, { IconBase, IconOverrideProps } from './icons';
import genTextInputProps, { TextInputBase, TextInputOverrideProps } from './inputs';
import genDropdownProps, {
  DropdownBase,
  DropdownOverrideProps
} from './dropdowns';
import genCheckboxProps, {
  CheckboxBase,
  CheckboxOverrideProps
} from './checkboxes';

type Components = {
  icons?: IconBase;
  textInputs?: TextInputBase;
  dropdowns?: DropdownBase;
  checkboxes?: CheckboxBase;
};

export interface ThemeProps {
  colors?: ((props: ColorOverrideProps) => Colors) | Partial<Colors>;
  themeColors?:
    | ((props: ThemeColorOverrideProps) => ThemeColors)
    | Partial<ThemeColors>;
  subtleColors?:
    | ((props: SubtleColorOverrideProps) => SubtleColors)
    | Partial<SubtleColors>;
  darkColors?:
    | ((props: DarkColorOverrideProps) => DarkColors)
    | Partial<DarkColors>;
  colorShades?:
    | ((props: ColorShadeOverrideProps) => ColorShades)
    | Partial<ColorShades>;
  themeColorShades?:
    | ((props: ThemeColorShadeOverrideProps) => ThemeColorShades)
    | Partial<ThemeColorShades>;
  spacing?: ((props: SpacingOverrideProps) => Spacing) | Partial<Spacing>;
  breakpoints?:
    | ((props: BreakpointOverrideProps) => Breakpoints)
    | Partial<Breakpoints>;
  borders?: ((props: BorderOverrideProps) => Borders) | Partial<Borders>;
  defaultFontFaceFallback?: keyof typeof StandardFaces;
  fontFaces?: Partial<FontFaces>;
  fontStacks?:
    | ((props: FontStackOverrideProps) => FontStacks)
    | Partial<FontStacks>;
  fontVariants?:
    | ((props: FontVariantOverrideProps) => FontVariants)
    | Partial<FontVariants>;
  fontTagMappings?:
    | ((props: FontTagMappingOverrideProps) => FontTagMappings)
    | Partial<FontTagMappings>;
  blockElementMappings?:
    | ((props: BlockElementMappingOverrideProps) => BlockElementMappings)
    | Partial<BlockElementMappings>;
  icons?: ((props: IconOverrideProps) => IconBase) | Partial<IconBase>;
  textInputs?:
    | ((props: TextInputOverrideProps) => TextInputBase)
    | Partial<TextInputBase>;
  dropdowns?:
    | ((props: DropdownOverrideProps) => DropdownBase)
    | Partial<DropdownBase>;
  checkboxes?:
    | ((props: CheckboxOverrideProps) => CheckboxBase)
    | Partial<CheckboxBase>;
}

export type Theme = Colors &
  ThemeColors &
  ColorShades &
  ThemeColorShades & {
    settings: ThemeProps;
    spacing: Spacing;
    subtleColors: SubtleColors;
    darkColors: DarkColors;
    breakpoints: Breakpoints;
    borders: Borders;
    mq: MediaQueries;
    fontFaces: FontFaces;
    fontStacks: FontStacks;
    fontVariants: FontVariants;
    fontTagMappings: FontTagMappings;
    blockElementMappings: BlockElementMappings;
    components: Components;
  };

export type ThemeColorSet = Colors & ThemeColors & SubtleColors & ColorShades;

export type ThemeComponent = {
  componentCss: (() => FlattenSimpleInterpolation)[];
};

export default function theme(settings: ThemeProps = {}): Theme {
  const {
    colors: colorOverrides,
    themeColors: themeColorOverrides,
    subtleColors: subtleColorOverrides,
    darkColors: darkColorOverrides,
    colorShades: colorShadeOverrides,
    themeColorShades: themeColorShadeOverrides,
    spacing: spacingOverrides,
    breakpoints: breakpointOverrides,
    borders: borderOverrides,
    fontFaces: fontFaceOverrides,
    fontStacks: fontStackOverrides,
    defaultFontFaceFallback: fallbackFace = 'sans',
    fontVariants: fontVariantOverrides,
    fontTagMappings: fontTagMappingOverrides,
    blockElementMappings: blockElementMappingOverrides,
    icons: iconOverrides,
    textInputs: textInputOverrides,
    dropdowns: dropdownOverrides,
    checkboxes: checkboxOverrides
  } = settings;

  const colors = genColors({ overrides: colorOverrides });
  const colorShades = genColorShades({
    colors,
    overrides: colorShadeOverrides
  });
  const subtleColors = genSubtleColors({
    colors,
    colorShades,
    overrides: subtleColorOverrides
  });
  const darkColors = genDarkColors({
    colors,
    colorShades,
    overrides: darkColorOverrides
  });
  const themeColors = genThemeColors({
    colors,
    colorShades,
    overrides: themeColorOverrides
  });
  const themeColorShades = genThemeColorShades({
    themeColors,
    overrides: themeColorShadeOverrides
  });
  const spacing = genSpacing({ overrides: spacingOverrides });
  const breakpoints = genBreakpoints({ overrides: breakpointOverrides });
  const borders = genBorders({
    colors,
    colorShades,
    overrides: borderOverrides
  });

  const fontFaces = genFontFaces({ overrides: fontFaceOverrides });
  const fontStacks = genFontStacks({
    fontFaces,
    fallbackFace,
    overrides: fontStackOverrides
  });
  const fontVariants = genFontVariants({
    fontFaces,
    fontStacks,
    overrides: fontVariantOverrides
  });
  const fontTagMappings = genFontTagMappings({
    colors,
    themeColors,
    colorShades,
    fontFaces,
    fontStacks,
    fontVariants,
    overrides: fontTagMappingOverrides
  });
  const blockElementMappings = genBlockElementMappings({
    colors,
    themeColors,
    colorShades,
    spacing,
    overrides: blockElementMappingOverrides
  });

  const icons = genIconProps({
    themeColors,
    overrides: iconOverrides
  });

  const textInputs = genTextInputProps({
    colors,
    colorShades,
    themeColors,
    overrides: textInputOverrides
  });

  const dropdowns = genDropdownProps({
    colors,
    colorShades,
    themeColors,
    overrides: dropdownOverrides
  });

  const checkboxes = genCheckboxProps({
    colors,
    colorShades,
    themeColors,
    overrides: checkboxOverrides
  });

  const mq = genMediaQueries({ breakpoints });

  return {
    settings,
    ...colors,
    ...themeColors,
    subtleColors,
    darkColors,
    ...colorShades,
    ...themeColorShades,
    spacing,
    breakpoints,
    borders,
    mq,
    fontFaces,
    fontStacks,
    fontVariants,
    fontTagMappings,
    blockElementMappings,
    components: {
      icons,
      textInputs,
      dropdowns,
      checkboxes
    }
  };
}
