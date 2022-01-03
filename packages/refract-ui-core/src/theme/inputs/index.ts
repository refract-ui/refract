import { defaults, isFunction } from 'lodash';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';

type ValueOf<T> = T[keyof T];
type ColorValues =
  | ValueOf<ThemeColors>
  | ValueOf<Colors>
  | ValueOf<ColorShades>;

export type InputBase = {
  activeColor?: ColorValues;
};

interface InputProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  overrides?: ((props: InputOverrideProps) => InputBase) | Partial<InputBase>;
}

export interface InputOverrideProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  defaults?: InputBase;
}

export default function genInputProps({
  colors,
  colorShades,
  themeColors,
  overrides = {}
}: InputProps): InputBase {
  const defaultInputProps: InputBase = {
    activeColor: themeColors.primary
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultInputProps });
  }

  return defaults(overrides, defaultInputProps);
}
