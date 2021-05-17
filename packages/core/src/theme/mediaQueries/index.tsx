import { reduce, upperFirst } from 'lodash';
import type {
  CSSObject,
  SimpleInterpolation,
  FlattenSimpleInterpolation
} from 'styled-components';
import { css } from 'styled-components';
import { Breakpoints } from '../breakpoints';

export const sizeKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const breakpointKeys = [
  ...sizeKeys,
  ...sizeKeys.map(s => `lt${upperFirst(s)}`),
  ...sizeKeys.map(s => `${s}Only`)
];

export type StyledCssInterpolator = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

export type MobileFirstMediaQueries = {
  xs: StyledCssInterpolator;
  sm?: StyledCssInterpolator;
  md?: StyledCssInterpolator;
  lg?: StyledCssInterpolator;
  xl?: StyledCssInterpolator;
  xxl?: StyledCssInterpolator;
};

export type MediaQueries = MobileFirstMediaQueries & {
  smOnly?: StyledCssInterpolator;
  mdOnly?: StyledCssInterpolator;
  lgOnly?: StyledCssInterpolator;
  xlOnly?: StyledCssInterpolator;
  xxlOnly?: StyledCssInterpolator;

  ltSm?: StyledCssInterpolator;
  ltMd?: StyledCssInterpolator;
  ltLg?: StyledCssInterpolator;
  ltXl?: StyledCssInterpolator;
  ltXxl?: StyledCssInterpolator;
};

export default function mq({
  breakpoints
}: {
  breakpoints: Breakpoints;
}): MediaQueries {
  let lastSize: keyof MobileFirstMediaQueries;

  return reduce(
    sizeKeys,
    (memo, size: keyof MobileFirstMediaQueries) => {
      memo[size] = ((...args) =>
        css`
          @media (min-width: ${breakpoints[size]}px) {
            ${css(...args)}
          }
        `) as StyledCssInterpolator;

      if (lastSize) {
        const ltKey = `lt${upperFirst(size)}` as keyof MediaQueries;
        const onlyKey = `${lastSize}Only` as keyof MediaQueries;
        const ltSize = breakpoints[size] - 1;
        const gtSize = breakpoints[lastSize];
        memo[ltKey] = ((...args) => css`
          @media (max-width: ${ltSize}px) {
            ${css(...args)}
          }
        `) as StyledCssInterpolator;

        memo[onlyKey] = ((...args) => css`
          @media (min-width: ${gtSize}px) and (max-width: ${ltSize}px) {
            ${css(...args)}
          }
        `) as StyledCssInterpolator;
      }

      lastSize = size;

      return memo;
    },
    {} as MediaQueries
  );
}
