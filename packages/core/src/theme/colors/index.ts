import { defaults, isFunction } from 'lodash';
import rampColor from '../../utils/rampColor';

export type Colors = {
  white: string;
  gray: string;
  black: string;
  blue: string;
  indigo: string;
  purple: string;
  pink: string;
  red: string;
  orange: string;
  yellow: string;
  green: string;
  teal: string;
  cyan: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
};

const gray = '#adb5bd';
const grayRamp = rampColor({ name: 'gray', startColor: gray });

export const defaultColors: Colors = {
  white: '#ffffff',
  gray,
  black: '#000000',
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  gray100: grayRamp.gray100,
  gray200: grayRamp.gray200,
  gray300: grayRamp.gray300,
  gray400: grayRamp.gray400,
  gray500: grayRamp.gray500,
  gray600: grayRamp.gray600,
  gray700: grayRamp.gray700,
  gray800: grayRamp.gray800,
  gray900: grayRamp.gray900
};

export interface ColorOverrideProps {
  defaults: Colors;
}

export interface ColorsProps {
  overrides: ((props: ColorOverrideProps) => Colors) | Partial<Colors>;
}

export default function colors({ overrides = {} }: ColorsProps): Colors {
  if (isFunction(overrides)) {
    return overrides({ defaults: defaultColors });
  }

  return defaults(overrides, defaultColors);
}
