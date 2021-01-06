import { defaults, isFunction } from 'lodash';
import {
  BorderOverrideProps,
  BorderBreakpointStyle,
  applyBorderStyle
} from '../borders';
import { Borders, BorderProps } from '../borders';
import { ColorShades } from '../colorShades';
import { Colors } from '../colors';
import { ThemeColors } from '../themeColors';

export type InputBase = {
  borders?: any;
};

interface InputBorderProps {
  colors?: Colors;
  colorShades?: ColorShades;
  themeColors?: ThemeColors;
  overrides?: ((props: BorderOverrideProps) => Borders) | Partial<Borders>;
}

export interface InputBorderOverrideProps {
  colors: Colors;
  colorShades: ColorShades;
  themeColors: ThemeColors;
  defaults: Borders;
}

export default function inputBorders({
  colors,
  colorShades,
  themeColors,
  overrides = {}
}: InputBorderProps): any {
  const defaultBorders: any = {
    borderColor: themeColors.secondary,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '0.5rem'
  };

  if (isFunction(overrides)) {
    return overrides({ colors, colorShades, defaults: defaultBorders });
  }

  return defaults(overrides, defaultBorders);
}
