import { reduce, upperFirst } from 'lodash';
import {
  css,
  CSSObject,
  SimpleInterpolation,
  FlattenSimpleInterpolation
} from 'styled-components';
import { Breakpoints } from '../breakpoints';

export const sizeKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const breakpointKeys = [
  ...sizeKeys,
  ...sizeKeys.map(s => `${s}Only`),
  ...sizeKeys.map(s => `lt${upperFirst(s)}`)
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
        const onlyKey = `${size}Only` as keyof MediaQueries;
        memo[ltKey] = ((...args) => css`
          @media (max-width: ${breakpoints[size] - 1}px) {
            ${css(...args)}
          }
        `) as StyledCssInterpolator;

        memo[onlyKey] = ((...args) => css`
          @media (min-width: ${breakpoints[
              lastSize
            ]}px) and (max-width: ${breakpoints[size] - 1}px) {
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
