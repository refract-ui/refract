import { defaultsDeep, isFunction, reduce, clone } from 'lodash';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';
import { ColorShades } from '../colorShades';
import { Spacing } from '../spacing';
import { Container } from '../containers';

export enum BlockElements {
  heading,
  p,
  pre,
  kbd,
  figure,
  table,
  label,
  legend,
  ol,
  ul,
  li,
  address,
  dt,
  dd,
  blockquote
}

// Helper
const stringIsNumber = (value: string | number) =>
  isNaN(Number(value)) === false;

export type BlockTagNames = keyof typeof BlockElements;

export type BlockElementMappings = {
  [tagName in BlockTagNames]: Partial<Container>;
};

export const defaultContainerProps = {
  mt: 0,
  mb: '1rem'
} as Partial<Container>;

export interface BlockElementMappingOverrideProps {
  colors: Colors;
  themeColors: ThemeColors;
  colorShades: ColorShades;
  spacing: Spacing;
  defaults: BlockElementMappings;
}

interface BlockElementMappingProps {
  colors: Colors;
  themeColors: ThemeColors;
  colorShades: ColorShades;
  spacing: Spacing;
  overrides:
    | ((props: BlockElementMappingOverrideProps) => BlockElementMappings)
    | Partial<BlockElementMappings>;
}

export default function blockElementMappings({
  colors,
  themeColors,
  colorShades,
  spacing,
  overrides = {}
}: BlockElementMappingProps): BlockElementMappings {
  const defaultBlockElementMappings = reduce(
    BlockElements,
    (memo, _, key: BlockTagNames) => {
      if (!stringIsNumber(key)) {
        memo[key] = { ...defaultContainerProps };
      }
      return memo;
    },
    {} as BlockElementMappings
  );

  defaultBlockElementMappings.ul.pl = '2rem';
  defaultBlockElementMappings.ol.pl = '2rem';

  defaultBlockElementMappings.pre = {
    ...defaultContainerProps,
    bg: colorShades.gray300,
    px: spacing[4],
    py: spacing[4]
  };

  defaultBlockElementMappings.kbd = {
    ...defaultContainerProps,
    bg: colorShades.gray300,
    px: spacing[2],
    py: spacing[2]
  };

  defaultBlockElementMappings.dd.ml = 0;
  defaultBlockElementMappings.dd.mb = spacing[2];
  defaultBlockElementMappings.figure.mx = 0;

  if (isFunction(overrides)) {
    return overrides({
      colors,
      themeColors,
      colorShades,
      spacing,
      defaults: defaultBlockElementMappings
    });
  }

  return defaultsDeep(overrides, defaultBlockElementMappings);
}
