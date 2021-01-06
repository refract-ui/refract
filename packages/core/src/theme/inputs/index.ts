import { defaults, isFunction } from 'lodash';
import { BorderBreakpointStyle } from '../borders';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';

export type InputBase = {
  borders?: BorderBreakpointStyle;
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
    }
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultInputProps });
  }

  return defaults(overrides, defaultInputProps);
}
