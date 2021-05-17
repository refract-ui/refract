import { defaults, isFunction } from 'lodash';
import { Container } from '../containers';
import { BorderBreakpointStyle } from '../borders';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { InputBase } from '../inputs';
import { ThemeColors } from '../themeColors';

type ValueOf<T> = T[keyof T];
type ColorValues =
  | ValueOf<ThemeColors>
  | ValueOf<Colors>
  | ValueOf<ColorShades>;

export type TextInputBase = Partial<Container> & {
  borders?: BorderBreakpointStyle;
  bg: ColorValues;
};

interface TextInputProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  inputs?: InputBase;
  overrides?:
    | ((props: TextInputOverrideProps) => TextInputBase)
    | Partial<TextInputBase>;
}

export interface TextInputOverrideProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  inputs?: InputBase;
  defaults?: TextInputBase;
}

export default function genTextInputProps({
  colors,
  colorShades,
  themeColors,
  inputs,
  overrides = {}
}: TextInputProps): TextInputBase {
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
    return overrides({
      inputs,
      colors,
      colorShades,
      defaults: defaultTextInputProps
    });
  }

  return defaults(overrides, defaultTextInputProps);
}
