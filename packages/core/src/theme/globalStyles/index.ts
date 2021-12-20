import { ThemeExtension, applyThemeSettings } from '../cascade';
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

type TypeTagNames = keyof typeof TypographyTags;
type BlockTagNames = keyof typeof BlockElements;

export type GlobalStyleTheme = {
  [tagName in TypeTagNames]: TypographyThemeMapping;
} & {
  [tagName in BlockTagNames]: Partial<Container>;
};

export type GlobalStyleBreakpoint = ComponentThemeBreakpoint<
  GlobalStyleTheme,
  null
>;

export type GlobalStyleConfig = ThemeBreakpoints<GlobalStyleBreakpoint>;

export const extension: ThemeExtension<GlobalStyleConfig> = {
  name: 'globalStyles',
  deps: [
    'colors',
    'body',
    'spacing',
    'colorShades',
    'themeColors',
    'themeColorShades',
    'borders',
    'fontTags',
    'blockElements'
  ],
  defaults: ({
    blockElements,
    fontTags
  }: {
    blockElements: BlockElementMappings;
    fontTags: FontTagMappings;
  }) => {
    return {
      xs: {
        // block elements
        heading: blockElements.heading,
        p: blockElements.p,
        pre: blockElements.pre,
        kbd: blockElements.kbd,
        figure: blockElements.figure,
        table: blockElements.table,
        label: blockElements.label,
        legend: blockElements.legend,
        ol: blockElements.ol,
        ul: blockElements.ul,
        li: blockElements.li,
        address: blockElements.address,
        dt: blockElements.dt,
        dd: blockElements.dd,
        blockquote: blockElements.blockquote,

        // typography
        h1: fontTags.h1,
        h2: fontTags.h2,
        h3: fontTags.h3,
        h4: fontTags.h4,
        h5: fontTags.h5,
        h6: fontTags.h6,
        a: fontTags.a,
        display1: fontTags.display1,
        display2: fontTags.display2,
        display3: fontTags.display3,
        display4: fontTags.display4,
        default: fontTags.default,
        button: fontTags.button,
        listItem: fontTags.listItem,
        small: fontTags.small,
        large: fontTags.large,
        code: fontTags.code
      }
    };
  },
  apply: applyThemeSettings
};
