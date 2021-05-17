import { defaultsDeep, isFunction } from 'lodash';
import {
  ThemeBreakpoints,
  ComponentThemeBreakpoint
} from '../../utils/componentThemeBreakpoints';
import {
  Tags as TypographyTags,
  FontTagMappings
} from '../../theme/fontTagMappings';
import { TypographyThemeMapping } from '../../utils/mapTypographyStyles';
import {
  BlockElements,
  BlockElementMappings
} from '../../theme/globalBlockElements';
import { Container } from '../../theme/containers';
import { ThemeColors } from '../themeColors';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { Spacing } from '../spacing';
import { Borders } from '../borders';
import { FontVariants } from '../fontVariants';

type TypeTagNames = keyof typeof TypographyTags;
type BlockTagNames = keyof typeof BlockElements;

export type GlobalStyleTheme = {
  [tagName in TypeTagNames]: TypographyThemeMapping;
} &
  {
    [tagName in BlockTagNames]: Partial<Container>;
  };

export type GlobalStyleBreakpoint = ComponentThemeBreakpoint<
  GlobalStyleTheme,
  null
>;

export type GlobalStyleConfig = ThemeBreakpoints<GlobalStyleBreakpoint>;

type GlobalStylePropsBase = Partial<{
  colors: Colors;
  spacing: Spacing;
  colorShades: ColorShades;
  themeColors: ThemeColors;
  fontVariants: FontVariants;
  borders: Borders;
  blockElementMappings: BlockElementMappings;
  fontTagMappings: FontTagMappings;
}>;

export type GlobalStyleOverrideProps = GlobalStylePropsBase & {
  defaults: GlobalStyleConfig;
};

export type GlobalStyleSettings =
  | ((props: GlobalStyleOverrideProps) => GlobalStyleConfig)
  | Partial<GlobalStyleConfig>;

export type GlobalStyleProps = GlobalStylePropsBase & {
  overrides: GlobalStyleSettings;
};

export default function globalStyles({
  colors,
  spacing,
  colorShades,
  themeColors,
  fontVariants,
  borders,
  blockElementMappings,
  fontTagMappings,
  overrides
}: GlobalStyleProps): GlobalStyleConfig {
  const defaultGlobalStyles: GlobalStyleConfig = {
    xs: {
      // block elements
      heading: blockElementMappings.heading,
      p: blockElementMappings.p,
      pre: blockElementMappings.pre,
      kbd: blockElementMappings.kbd,
      figure: blockElementMappings.figure,
      table: blockElementMappings.table,
      label: blockElementMappings.label,
      legend: blockElementMappings.legend,
      ol: blockElementMappings.ol,
      ul: blockElementMappings.ul,
      li: blockElementMappings.li,
      address: blockElementMappings.address,
      dt: blockElementMappings.dt,
      dd: blockElementMappings.dd,
      blockquote: blockElementMappings.blockquote,

      // typography
      h1: fontTagMappings.h1,
      h2: fontTagMappings.h2,
      h3: fontTagMappings.h3,
      h4: fontTagMappings.h4,
      h5: fontTagMappings.h5,
      h6: fontTagMappings.h6,
      a: fontTagMappings.a,
      display1: fontTagMappings.display1,
      display2: fontTagMappings.display2,
      display3: fontTagMappings.display3,
      display4: fontTagMappings.display4,
      default: fontTagMappings.default,
      button: fontTagMappings.button,
      listItem: fontTagMappings.listItem,
      small: fontTagMappings.small,
      large: fontTagMappings.large,
      code: fontTagMappings.code
    }
  };

  if (isFunction(overrides)) {
    return overrides({
      colors,
      spacing,
      colorShades,
      themeColors,
      fontVariants,
      borders,
      blockElementMappings,
      fontTagMappings,
      defaults: defaultGlobalStyles
    });
  }

  return defaultsDeep({}, overrides, defaultGlobalStyles);
}
