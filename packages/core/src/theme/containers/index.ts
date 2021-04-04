import { CSSProperties } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { reduce, kebabCase, isFunction } from 'lodash';
import { ThemeExtensionHelperMethods } from '../../utils/componentThemeBreakpoints';
import { BlockElementMappings, BlockTagNames } from '../globalBlockElements';

type CSSWideKeyword = 'initial' | 'inherit' | 'unset';

interface ExtendedCSSProperties {
  textAlign: CSSWideKeyword | 'left' | 'right' | 'center' | 'justify';
  verticalAlign:
    | CSSWideKeyword
    | 'baseline'
    | 'length'
    | 'sub'
    | 'super'
    | 'top'
    | 'text-top'
    | 'middle'
    | 'bottom'
    | 'text-bottom';
  bgRepeat: CSSWideKeyword | 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
  bgAttachment: CSSWideKeyword | 'scroll' | 'fixed' | 'local';
  order: CSSWideKeyword | string | number;
}

type AllCSSProperties = ExtendedCSSProperties & CSSProperties;

type ContainerPropVal<T extends keyof AllCSSProperties> =
  | ((props: ThemeExtensionHelperMethods) => AllCSSProperties[T])
  | AllCSSProperties[T];

export type Container = {
  m: ContainerPropVal<'margin'>;
  mt: ContainerPropVal<'marginTop'>;
  mb: ContainerPropVal<'marginBottom'>;
  ml: ContainerPropVal<'marginLeft'>;
  mr: ContainerPropVal<'marginRight'>;
  mx: ContainerPropVal<'marginLeft'>;
  my: ContainerPropVal<'marginTop'>;
  p: ContainerPropVal<'padding'>;
  pt: ContainerPropVal<'paddingTop'>;
  pb: ContainerPropVal<'paddingBottom'>;
  pl: ContainerPropVal<'paddingLeft'>;
  pr: ContainerPropVal<'paddingRight'>;
  px: ContainerPropVal<'paddingLeft'>;
  py: ContainerPropVal<'paddingTop'>;
  opacity: ContainerPropVal<'opacity'>;
  textAlign: ContainerPropVal<'textAlign'>;
  w: ContainerPropVal<'width'>;
  h: ContainerPropVal<'height'>;
  // size: ContainerPropVal['width'];
  minW: ContainerPropVal<'minWidth'>;
  minH: ContainerPropVal<'minHeight'>;
  minSize: ContainerPropVal<'minWidth'>;
  maxW: ContainerPropVal<'maxWidth'>;
  maxH: ContainerPropVal<'maxHeight'>;
  maxSize: ContainerPropVal<'maxWidth'>;
  verticalAlign: ContainerPropVal<'verticalAlign'>;
  bg: ContainerPropVal<'backgroundColor'>;
  bgSize: ContainerPropVal<'backgroundSize'>;
  bgPos: ContainerPropVal<'backgroundPosition'>;
  bgRepeat: ContainerPropVal<'bgRepeat'>;
  bgAttachment: ContainerPropVal<'bgAttachment'>;
  area: ContainerPropVal<'gridArea'>;
};

const ContainerProps = [
  'm',
  'mt',
  'mb',
  'ml',
  'mr',
  'mx',
  'my',
  'p',
  'pt',
  'pb',
  'pl',
  'pr',
  'px',
  'py',
  'opacity',
  'textAlign',
  'w',
  'h',
  // 'size',
  'minW',
  'minH',
  'minSize',
  'maxW',
  'maxH',
  'maxSize',
  'verticalAlign',
  'bg',
  'bgSize',
  'bgPos',
  'bgRepeat',
  'bgAttachment',
  'area'
] as Array<keyof Container>;

export type AlignedContainer = Container & {
  alignItems: ContainerPropVal<'alignItems'>;
  alignContent: ContainerPropVal<'alignContent'>;
  alignSelf: ContainerPropVal<'alignSelf'>;
  justifyItems: ContainerPropVal<'justifyItems'>;
  justifyContent: ContainerPropVal<'justifyContent'>;
  justifySelf: ContainerPropVal<'justifySelf'>;
};

const AlignedContainerProps = [
  ...ContainerProps,
  'alignItems',
  'alignContent',
  'alignSelf',
  'justifyItems',
  'justifyContent',
  'justifySelf'
] as Array<keyof AlignedContainer>;

export type FlexContainer = AlignedContainer & {
  wrap: ContainerPropVal<'flexWrap'>;
  flex: ContainerPropVal<'flex'>;
  grow: ContainerPropVal<'flexGrow'>;
  shrink: ContainerPropVal<'flexShrink'>;
  basis: ContainerPropVal<'flexBasis'>;
  order: ContainerPropVal<'order'>;
};

const FlexContainerProps = [
  ...AlignedContainerProps,
  'wrap',
  'flex',
  'grow',
  'shrink',
  'basis',
  'order'
] as Array<keyof FlexContainer>;

export type GridContainer = AlignedContainer & {
  gap: ContainerPropVal<'gap'>;
  rowGap: ContainerPropVal<'rowGap'>;
  columnGap: ContainerPropVal<'columnGap'>;
  column: ContainerPropVal<'gridColumn'>;
  row: ContainerPropVal<'gridRow'>;
  autoFlow: ContainerPropVal<'gridAutoFlow'>;
  autoRows: ContainerPropVal<'gridAutoRows'>;
  autoColumns: ContainerPropVal<'gridAutoColumns'>;
  templateRows: ContainerPropVal<'gridTemplateRows'>;
  templateColumns: ContainerPropVal<'gridTemplateColumns'>;
  templateAreas: ContainerPropVal<'gridTemplateAreas'>;
};

const GridContainerProps = [
  ...AlignedContainerProps,
  'gap',
  'rowGap',
  'columnGap',
  'column',
  'row',
  'autoFlow',
  'autoRows',
  'autoColumns',
  'templateRows',
  'templateColumns',
  'templateAreas'
] as Array<keyof GridContainer>;

export type AllContainers = FlexContainer & GridContainer;

type AllContainerKeys = keyof AllContainers;

type PropAbbrev = {
  [P in AllContainerKeys]: Array<keyof AllCSSProperties>;
};

const propAbbrev = {
  // div props
  m: ['margin'],
  mt: ['marginTop'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  mr: ['marginRight'],
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  p: ['padding'],
  pt: ['paddingTop'],
  pb: ['paddingBottom'],
  pl: ['paddingLeft'],
  pr: ['paddingRight'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
  w: ['width'],
  h: ['height'],
  minW: ['minWidth'],
  minH: ['minHeight'],
  maxW: ['maxWidth'],
  maxH: ['maxHeight'],
  bg: ['backgroundColor'],
  bgRepeat: ['backgroundRepeat'],
  bgAttachment: ['backgroundAttachment'],
  bgPos: ['backgroundPosition'],
  bgSize: ['backgroundSize'],

  // size: ['width', 'height'],
  maxSize: ['maxWidth', 'maxHeight'],
  minSize: ['minWidth', 'minHeight'],

  // flex props
  wrap: ['flexWrap'],
  grow: ['flexGrow'],
  shrink: ['flexShrink'],
  basis: ['flexBasis'],

  // grid props
  column: ['gridColumn'],
  row: ['gridRow']
} as PropAbbrev;

export type ContainerPropStyleMapDirective<T, P extends keyof T = keyof T> =
  | T[P]
  | ((args: T & ThemeExtensionHelperMethods) => FlattenSimpleInterpolation);

export type ContainerPropStyleMap<T> = {
  [P in keyof T]: ContainerPropStyleMapDirective<T, P>;
};

export function mapContainerPropsToStyles<T>(
  helperArgs: ThemeExtensionHelperMethods,
  props: Array<keyof T>
): ContainerPropStyleMap<T> {
  return reduce(
    props,
    (memo, key: keyof T) => {
      const styleAttrs = (propAbbrev[key as keyof PropAbbrev] || [
        key as keyof AllCSSProperties
      ]) as Array<keyof AllCSSProperties>;
      const cssAttrs = styleAttrs.map(kebabCase);

      memo[key] = (props: T & ThemeExtensionHelperMethods) => {
        if (!props[key]) {
          return null;
        }

        let val: T[typeof key];

        if (isFunction(val)) {
          const valFn = val as (
            props: ThemeExtensionHelperMethods
          ) => T[typeof key];
          val = valFn(helperArgs);
        } else {
          val = props[key] as T[typeof key];
        }

        const cssStr = cssAttrs.map(attr => `${attr}: ${val};`).join('');

        return css`
          ${cssStr}
        `;
      };

      return memo;
    },
    {} as ContainerPropStyleMap<T>
  );
}

export function mapDivContainerPropsToStyles(
  helperArgs: ThemeExtensionHelperMethods
): ContainerPropStyleMap<Container> {
  return mapContainerPropsToStyles<Container>(helperArgs, ContainerProps);
}

export function mapFlexContainerPropsToStyles(
  helperArgs: ThemeExtensionHelperMethods
): ContainerPropStyleMap<FlexContainer> {
  return mapContainerPropsToStyles<FlexContainer>(
    helperArgs,
    FlexContainerProps
  );
}

export function mapGridContainerPropsToStyles(
  helperArgs: ThemeExtensionHelperMethods
): ContainerPropStyleMap<GridContainer> {
  return mapContainerPropsToStyles<GridContainer>(
    helperArgs,
    GridContainerProps
  );
}

interface MapBlockElementStyleProps {
  tagMapping: Partial<Container>;
  tagName: string;
}

export function mapBlockElementStyles({
  tagName,
  tagMapping
}: MapBlockElementStyleProps): FlattenSimpleInterpolation {
  const styles = reduce(
    tagMapping,
    (memo, val, key: keyof Partial<Container>) => {
      if (val) {
        const styleAttrs = (propAbbrev[key as keyof PropAbbrev] || [
          key as keyof AllCSSProperties
        ]) as Array<keyof AllCSSProperties>;
        const cssAttrs = styleAttrs.map(kebabCase);
        memo += cssAttrs.map(attr => `${attr}: ${val};`).join('');
      }
      return memo;
    },
    ''
  );

  return css`
    ${tagName} {
      ${styles}
    }
  `;
}
