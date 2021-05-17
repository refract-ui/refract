import genColors, { Colors, ColorSettings } from './colors';
import genSubtleColors, {
  SubtleColors,
  SubtleColorSettings
} from './subtleColors';
import genDarkColors, {
  DarkColors,
  DarkColorOverrideProps
} from './darkColors';
import genColorShades, { ColorShades, ColorShadeSettings } from './colorShades';
import type { FlattenSimpleInterpolation } from 'styled-components';
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
import genGlobalStyleProps, {
  GlobalStyleConfig,
  GlobalStyleSettings
} from './globalStyles';
import genButtonProps, {
  ButtonThemeConfig,
  ButtonThemeExtensions
} from './buttons';
import genIconProps, { IconBase, IconOverrideProps } from './icons';
import genTextInputProps, {
  TextInputBase,
  TextInputOverrideProps
} from './textInputs';
import genDropdownProps, {
  DropdownBase,
  DropdownOverrideProps
} from './dropdowns';
import genCheckboxProps, {
  CheckboxBase,
  CheckboxOverrideProps
} from './checkboxes';
import genRadioProps, { RadioBase, RadioOverrideProps } from './radios';
import genInputProps, { InputBase, InputOverrideProps } from './inputs';

// utils
import contrastColor from '../utils/contrastColor';

type Components = {
  globalStyles?: GlobalStyleConfig;
  icons?: IconBase;
  buttons?: ButtonThemeConfig;
  textInputs?: TextInputBase;
  dropdowns?: DropdownBase;
  checkboxes?: CheckboxBase;
  radios?: RadioBase;
  inputs?: InputBase;
};

export type ThemeProps = Partial<{
  colors: ColorSettings;
  themeColors:
    | ((props: ThemeColorOverrideProps) => ThemeColors)
    | Partial<ThemeColors>;
  subtleColors: SubtleColorSettings;
  darkColors:
    | ((props: DarkColorOverrideProps) => DarkColors)
    | Partial<DarkColors>;
  colorShades: ColorShadeSettings;
  themeColorShades:
    | ((props: ThemeColorShadeOverrideProps) => ThemeColorShades)
    | Partial<ThemeColorShades>;
  spacing: ((props: SpacingOverrideProps) => Spacing) | Partial<Spacing>;
  breakpoints:
    | ((props: BreakpointOverrideProps) => Breakpoints)
    | Partial<Breakpoints>;
  borders: ((props: BorderOverrideProps) => Borders) | Partial<Borders>;
  defaultFontFaceFallback: keyof typeof StandardFaces;
  fontFaces: Partial<FontFaces>;
  fontStacks:
    | ((props: FontStackOverrideProps) => FontStacks)
    | Partial<FontStacks>;
  fontVariants:
    | ((props: FontVariantOverrideProps) => FontVariants)
    | Partial<FontVariants>;
  fontTagMappings:
    | ((props: FontTagMappingOverrideProps) => FontTagMappings)
    | Partial<FontTagMappings>;
  blockElementMappings:
    | ((props: BlockElementMappingOverrideProps) => BlockElementMappings)
    | Partial<BlockElementMappings>;
  icons: ((props: IconOverrideProps) => IconBase) | Partial<IconBase>;
  globalStyles: GlobalStyleSettings;
  buttons: ButtonThemeExtensions;
  textInputs:
    | ((props: TextInputOverrideProps) => TextInputBase)
    | Partial<TextInputBase>;
  dropdowns:
    | ((props: DropdownOverrideProps) => DropdownBase)
    | Partial<DropdownBase>;
  checkboxes:
    | ((props: CheckboxOverrideProps) => CheckboxBase)
    | Partial<CheckboxBase>;
  radios: ((props: RadioOverrideProps) => RadioBase) | Partial<RadioBase>;
  inputs: ((props: InputOverrideProps) => InputBase) | Partial<InputBase>;
}>;

export type Theme = {
  colors: Colors;
  themeColors: ThemeColors;
  colorShades: ColorShades;
  themeColorShades: ThemeColorShades;
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
  contrastColor: (props: { color: string }) => string;
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
    checkboxes: checkboxOverrides,
    radios: radioOverrides,
    inputs: inputOverrides,
    buttons: buttonOverrides,
    globalStyles: globalStyleOverrides
  } = settings;

  const colors = genColors({ overrides: colorOverrides });

  const colorShades = genColorShades({
    colors,
    overrides: colorShadeOverrides
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

  const subtleColors = genSubtleColors({
    colors,
    colorShades,
    themeColors,
    themeColorShades,
    overrides: subtleColorOverrides
  });

  const darkColors = genDarkColors({
    colors,
    colorShades,
    themeColors,
    themeColorShades,
    overrides: darkColorOverrides
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

  const globalStyles = genGlobalStyleProps({
    colors,
    spacing,
    colorShades,
    themeColors,
    fontVariants,
    borders,
    blockElementMappings,
    fontTagMappings,
    overrides: globalStyleOverrides
  });

  const buttons = genButtonProps({
    colors,
    spacing,
    colorShades,
    themeColors,
    fontVariants,
    borders,
    overrides: buttonOverrides
  });

  const inputs = genInputProps({
    colors,
    colorShades,
    themeColors,
    overrides: inputOverrides
  });

  const textInputs = genTextInputProps({
    colors,
    colorShades,
    themeColors,
    inputs,
    overrides: textInputOverrides
  });

  const dropdowns = genDropdownProps({
    colors,
    colorShades,
    themeColors,
    inputs,
    overrides: dropdownOverrides
  });

  const checkboxes = genCheckboxProps({
    colors,
    colorShades,
    themeColors,
    inputs,
    overrides: checkboxOverrides
  });

  const radios = genRadioProps({
    colors,
    colorShades,
    themeColors,
    overrides: radioOverrides
  });

  const mq = genMediaQueries({ breakpoints });

  const theme = {
    settings,
    colors,
    themeColors,
    subtleColors,
    darkColors,
    colorShades,
    themeColorShades,
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
      globalStyles,
      buttons,
      icons,
      textInputs,
      dropdowns,
      checkboxes,
      radios,
      inputs
    },
    contrastColor: ({ color }) => contrastColor({ color, theme })
  } as Theme;

  return theme;
}
