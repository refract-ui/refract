import { reduce } from 'lodash';
import { FontVariant } from '../../theme/fontVariants';
import type { FlattenSimpleInterpolation } from 'styled-components';
import { css } from 'styled-components';

export type TypographyThemeMapping = FontVariant & {
  size: string;
  color?: string;
};

interface MapTypographyStyleProps {
  tagMapping: TypographyThemeMapping;
  tagName: string;
}

type PropAttrMap = {
  [p in keyof TypographyThemeMapping]?: string;
};

const propAttrMap = {
  stack: 'font-family',
  weight: 'font-weight',
  style: 'font-style',
  size: 'font-size',
  color: 'color',
  lineHeight: 'line-height',
  letterSpacing: 'letter-spacing'
} as PropAttrMap;

function mapTypographyStyles({
  tagName,
  tagMapping
}: MapTypographyStyleProps): FlattenSimpleInterpolation {
  const styles = reduce(
    tagMapping,
    (memo, val, key: keyof TypographyThemeMapping) => {
      if (val) {
        memo += `${propAttrMap[key]}: ${val};`;
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

export default mapTypographyStyles;
