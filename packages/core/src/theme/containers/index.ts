import { CSSProperties } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { reduce, kebabCase } from 'lodash';
import { ThemeExtensionHelperMethods } from '../../utils/componentThemeBreakpoints';

type CSSWideKeyword = 'initial' | 'inherit' | 'unset';

export type Container = {
  m: CSSProperties['margin'];
  mt: CSSProperties['marginTop'];
  mb: CSSProperties['marginBottom'];
  ml: CSSProperties['marginLeft'];
  mr: CSSProperties['marginRight'];
  mx: CSSProperties['marginLeft'];
  my: CSSProperties['marginTop'];
  p: CSSProperties['padding'];
  pt: CSSProperties['paddingTop'];
  pb: CSSProperties['paddingBottom'];
  pl: CSSProperties['paddingLeft'];
  pr: CSSProperties['paddingRight'];
  px: CSSProperties['paddingLeft'];
  py: CSSProperties['paddingTop'];
  opacity: CSSProperties['opacity'];
  textAlign: CSSWideKeyword | 'left' | 'right' | 'center' | 'justify';
  w: CSSProperties['width'];
  h: CSSProperties['height'];
  // size: CSSProperties['width'];
  minW: CSSProperties['minWidth'];
  minH: CSSProperties['minHeight'];
  minSize: CSSProperties['minWidth'];
  maxW: CSSProperties['maxWidth'];
  maxH: CSSProperties['maxHeight'];
  maxSize: CSSProperties['maxWidth'];
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
  bg: CSSProperties['backgroundColor'];
  bgSize: CSSProperties['backgroundSize'];
  bgPos: CSSProperties['backgroundPosition'];
  bgRepeat: CSSWideKeyword | 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
  bgAttachment: CSSWideKeyword | 'scroll' | 'fixed' | 'local';
  area: CSSProperties['gridArea'];
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
  alignItems: CSSProperties['alignItems'];
  alignContent: CSSProperties['alignContent'];
  alignSelf: CSSProperties['alignSelf'];
  justifyItems: CSSProperties['justifyItems'];
  justifyContent: CSSProperties['justifyContent'];
  justifySelf: CSSProperties['justifySelf'];
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
  wrap: CSSProperties['flexWrap'];
  flex: CSSProperties['flex'];
  grow: CSSProperties['flexGrow'];
  shrink: CSSProperties['flexShrink'];
  basis: CSSProperties['flexBasis'];
  order: CSSWideKeyword | string | number;
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
  gap: CSSProperties['gap'];
  rowGap: CSSProperties['rowGap'];
  columnGap: CSSProperties['columnGap'];
  column: CSSProperties['gridColumn'];
  row: CSSProperties['gridRow'];
  autoFlow: CSSProperties['gridAutoFlow'];
  autoRows: CSSProperties['gridAutoRows'];
  autoColumns: CSSProperties['gridAutoColumns'];
  templateRows: CSSProperties['gridTemplateRows'];
  templateColumns: CSSProperties['gridTemplateColumns'];
  templateAreas: CSSProperties['gridTemplateAreas'];
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

type AllContainers = FlexContainer & GridContainer;

type AllContainerKeys = keyof AllContainers;

type PropAbbrev = {
  [P in AllContainerKeys]: Array<keyof CSSProperties>;
};

const propAbbrev = {
  // div props
  m: ['margin'],
  mt: ['marginTop'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  mr: ['marginRight'],
  mx: ['paddingLeft', 'paddingRight'],
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
  minW: ['maxWidth'],
  minH: ['maxHeight'],
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
  props: Array<keyof T>
): ContainerPropStyleMap<T> {
  return reduce(
    props,
    (memo, key: keyof T) => {
      const styleAttrs = (propAbbrev[key as keyof PropAbbrev] || [
        key as keyof CSSProperties
      ]) as Array<keyof CSSProperties>;
      const cssAttrs = styleAttrs.map(kebabCase);

      memo[key] = (props: T & ThemeExtensionHelperMethods) => {
        if (!props[key]) {
          return null;
        }

        const val = `${props[key]}`;

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

export function mapDivContainerPropsToStyles(): ContainerPropStyleMap<
  Container
> {
  return mapContainerPropsToStyles<Container>(ContainerProps);
}

export function mapFlexContainerPropsToStyles(): ContainerPropStyleMap<
  FlexContainer
> {
  return mapContainerPropsToStyles<FlexContainer>(FlexContainerProps);
}

export function mapGridContainerPropsToStyles(): ContainerPropStyleMap<
  GridContainer
> {
  return mapContainerPropsToStyles<GridContainer>(GridContainerProps);
}
