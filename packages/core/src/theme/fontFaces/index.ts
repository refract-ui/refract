export enum StandardFaces {
  mono,
  sans,
  serif
}

export type FontFace = {
  name: string;
  url?: string;
};

export type FontFaces = {
  [K in keyof typeof StandardFaces]: FontFace;
} & {
  [name: string]: FontFace;
};

export interface FontFaceOverrideProps {
  defaults: FontFaces;
}

interface FontFaceProps {
  overrides: Partial<FontFaces>;
}

export default function fontFaces({
  overrides = {}
}: FontFaceProps): FontFaces {
  return {
    mono: overrides.mono,
    sans: overrides.sans,
    serif: overrides.serif,
    ...overrides
  };
}
