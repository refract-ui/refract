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

type CheckboxBase = {
  borders?: BorderBreakpointStyle;
  checkedBg?: ColorValues;
};

export type InputBase = {
  borders?: BorderBreakpointStyle;
  bg: ColorValues;
  checkbox?: CheckboxBase;
};

interface InputBorderProps {
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
}: InputBorderProps): InputBase {
  const defaultInputProps: InputBase = {
    borders: {
      borderColor: themeColors.secondary,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '0.5rem'
    },
    bg: 'none',
    checkbox: {
      checkedBg: themeColors.primary,
      borders: {
        borderColor: themeColors.secondary,
        borderRadius: '0.2rem',
        borderStyle: 'solid',
        borderWidth: '1px'
      }
    }
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultInputProps });
  }

  return defaults(overrides, defaultInputProps);
}
