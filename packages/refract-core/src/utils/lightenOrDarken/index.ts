import tc from 'tinycolor2';

interface LightenOrDarkenProps {
  color: string;
  amount: number;
}

export default function lightenOrDarken({
  color,
  amount
}: LightenOrDarkenProps): string {
  const c = tc(color);
  const func = c.isDark() ? 'lighten' : 'darken';
  return c[func](amount).toRgbString();
}
