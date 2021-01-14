import { defaults, isFunction } from 'lodash';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';

type ValueOf<T> = T[keyof T];
type ColorValues =
  | ValueOf<ThemeColors>
  | ValueOf<Colors>
  | ValueOf<ColorShades>;

export type DropdownBase = {
  bg: ColorValues;
};

interface DropdownProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  overrides?:
    | ((props: DropdownOverrideProps) => DropdownBase)
    | Partial<DropdownBase>;
}

export interface DropdownOverrideProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  defaults?: DropdownBase;
}

export default function genDropdownProps({
  colors,
  colorShades,
  themeColors,
  overrides = {}
}: DropdownProps): DropdownBase {
  const defaultDropdownProps: DropdownBase = {
    bg: colors.white
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultDropdownProps });
  }

  return defaults(overrides, defaultDropdownProps);
}
