import genColors, { Colors, ColorOverrideProps } from './colors';
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

type Components = {
  icons?: IconBase;
};

export interface ThemeProps {
  colors?: ((props: ColorOverrideProps) => Colors) | Partial<Colors>;
  themeColors?:
    | ((props: ThemeColorOverrideProps) => ThemeColors)
    | Partial<ThemeColors>;
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
}

export type Theme = Colors &
  ThemeColors &
  ColorShades &
  ThemeColorShades & {
    settings: ThemeProps;
    spacing: Spacing;
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

export type ThemeComponent = {
  componentCss: (() => FlattenSimpleInterpolation)[];
};

export default function theme(settings: ThemeProps = {}): Theme {
  const {
    colors: colorOverrides,
    themeColors: themeColorOverrides,
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
    icons: iconOverrides
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

  const mq = genMediaQueries({ breakpoints });

  return {
    settings,
    ...colors,
    ...themeColors,
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
      icons
    }
  };
}
