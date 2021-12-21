import { reduce } from 'lodash';
import { ThemeExtension, applyThemeSettings } from '../cascade';
import { ColorShades } from '../colorShades';
import { Spacing } from '../spacing';
import { Container } from '../containers';

export enum BlockElements {
  container,
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

const stringIsNumber = (value: string | number) =>
  isNaN(Number(value)) === false;

export type BlockTagNames = keyof typeof BlockElements;

export type BlockElementMappings = {
  [tagName in BlockTagNames]: Partial<Container>;
};

export const extension: ThemeExtension<BlockElementMappings> = {
  name: 'blockElements',
  deps: ['colors', 'themeColors', 'themeColorShades', 'spacing', 'body'],
  defaults: ({
    spacing,
    colorShades
  }: {
    spacing: Spacing;
    colorShades: ColorShades;
  }) => {
    const defaultContainerProps = {
      mt: spacing[0],
      mb: spacing[3]
    } as Partial<Container>;

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

    defaultBlockElementMappings.container.mb = spacing[0];

    defaultBlockElementMappings.ul.pl = spacing[4];
    defaultBlockElementMappings.ol.pl = spacing[4];

    defaultBlockElementMappings.label.mb = spacing[1];

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

    defaultBlockElementMappings.dd.ml = spacing[0];
    defaultBlockElementMappings.dd.mb = spacing[2];
    defaultBlockElementMappings.figure.mx = spacing[0];

    return defaultBlockElementMappings;
  },
  apply: applyThemeSettings
};
