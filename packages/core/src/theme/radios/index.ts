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

export type RadioBase = {
  borders?: BorderBreakpointStyle;
  selectedBorderColor?: ColorValues;
};

interface RadioBorderProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  inputs?: InputBase;
  overrides?: ((props: RadioOverrideProps) => RadioBase) | Partial<RadioBase>;
}

export interface RadioOverrideProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  inputs?: InputBase;
  defaults?: RadioBase;
}

export default function genRadioProps({
  colors,
  colorShades,
  themeColors,
  inputs,
  overrides = {}
}: RadioBorderProps): RadioBase {
  const defaultRadioProps: RadioBase = {
    selectedBorderColor: undefined,
    borders: {
      borderColor: themeColors.secondary,
      borderRadius: '50%',
      borderStyle: 'solid',
      borderWidth: '1px'
    }
  };

  if (isFunction(overrides)) {
    return overrides({
      inputs,
      colors,
      colorShades,
      defaults: defaultRadioProps
    });
  }

  return defaults(overrides, defaultRadioProps);
}
