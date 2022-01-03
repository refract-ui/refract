import { defaults, isFunction } from 'lodash';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';
import { InputBase } from '../inputs';

type ValueOf<T> = T[keyof T];
type ColorValues =
  | ValueOf<ThemeColors>
  | ValueOf<Colors>
  | ValueOf<ColorShades>;

export type DropdownBase = {
  bg: ColorValues;
  selectedItemBg: ColorValues;
};

interface DropdownProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  inputs?: InputBase;
  overrides?:
    | ((props: DropdownOverrideProps) => DropdownBase)
    | Partial<DropdownBase>;
}

export interface DropdownOverrideProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  inputs?: InputBase;
  defaults?: DropdownBase;
}

export default function genDropdownProps({
  colors,
  colorShades,
  themeColors,
  inputs,
  overrides = {}
}: DropdownProps): DropdownBase {
  const defaultDropdownProps: DropdownBase = {
    bg: colors.white,
    selectedItemBg: themeColors.primary
  };

  if (isFunction(overrides)) {
    return overrides({
      inputs,
      colors,
      colorShades,
      defaults: defaultDropdownProps
    });
  }

  return defaults(overrides, defaultDropdownProps);
}
