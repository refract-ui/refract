import tc from 'tinycolor2';
import { Theme } from '../../theme';

interface ContrastColorProps {
  color: string;
  theme: Theme;
}

export default function contrastColor({
  color,
  theme
}: ContrastColorProps): string {
  const c = tc(color);
  return c.isDark() ? theme.light : theme.dark;
}
