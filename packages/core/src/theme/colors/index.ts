import { defaults, isFunction } from 'lodash';

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
};

export const colorNames: Array<string> = [
  'gray',
  'blue',
  'indigo',
  'purple',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'cyan'
];

export const defaultColors: Colors = {
  white: '#ffffff',
  gray: '#B0B9C9',
  black: '#000000',
  blue: '#3978EC',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#DE7283',
  orange: '#fd7e14',
  yellow: '#EFC174',
  green: '#6AD193',
  teal: '#20c997',
  cyan: '#17a2b8'
};

export interface ColorOverrideProps {
  defaults: Colors;
}

export interface ColorsProps {
  overrides?: ((props: ColorOverrideProps) => Colors) | Partial<Colors>;
}

export default function colors({ overrides = {} }: ColorsProps = {}): Colors {
  if (isFunction(overrides)) {
    return overrides({ defaults: defaultColors });
  }

  return defaults(overrides, defaultColors);
}
