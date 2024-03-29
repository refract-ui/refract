import { defaults, isFunction } from 'lodash';
import { BorderBreakpointStyle } from '../borders';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';
import { InputBase } from '../inputs';

type ValueOf<T> = T[keyof T];
type ColorValues =
  | ValueOf<ThemeColors>
  | ValueOf<Colors>
  | ValueOf<ColorShades>;

export type CheckboxBase = {
  borders?: BorderBreakpointStyle;
  checkedBg?: ColorValues;
};

interface CheckboxBorderProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  inputs?: InputBase;
  overrides?:
    | ((props: CheckboxOverrideProps) => CheckboxBase)
    | Partial<CheckboxBase>;
}

export interface CheckboxOverrideProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  inputs?: InputBase;
  defaults?: CheckboxBase;
}

export default function genCheckboxProps({
  colors,
  colorShades,
  themeColors,
  inputs,
  overrides = {}
}: CheckboxBorderProps): CheckboxBase {
  const defaultCheckboxProps: CheckboxBase = {
    checkedBg: undefined,
    borders: {
      borderColor: themeColors.secondary,
      borderRadius: '0.2rem',
      borderStyle: 'solid',
      borderWidth: '1px'
    }
  };

  if (isFunction(overrides)) {
    return overrides({
      inputs,
      colors,
      colorShades,
      defaults: defaultCheckboxProps
    });
  }

  return defaults(overrides, defaultCheckboxProps);
}
