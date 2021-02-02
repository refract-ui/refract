import { defaults, isFunction } from 'lodash';
import { BorderBreakpointStyle } from '../borders';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';

type ValueOf<T> = T[keyof T];
type ColorValues =
  | ValueOf<ThemeColors>
  | ValueOf<Colors>
  | ValueOf<ColorShades>;

export type TextInputBase = {
  borders?: BorderBreakpointStyle;
  bg: ColorValues;
};

interface TextInputBorderProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  overrides?:
    | ((props: TextInputOverrideProps) => TextInputBase)
    | Partial<TextInputBase>;
}

export interface TextInputOverrideProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  defaults?: TextInputBase;
}

export default function genTextInputProps({
  colors,
  colorShades,
  themeColors,
  overrides = {}
}: TextInputBorderProps): TextInputBase {
  const defaultTextInputProps: TextInputBase = {
    borders: {
      borderColor: themeColors.secondary,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '0.5rem'
    },
    bg: 'none'
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultTextInputProps });
  }

  return defaults(overrides, defaultTextInputProps);
}
