import {
  get,
  set,
  each,
  reduce,
  isFunction,
  keys,
  omitBy,
  pick,
  uniq,
  values,
  flatten
} from 'lodash';
import {
  css,
  SimpleInterpolation,
  FlattenSimpleInterpolation
} from 'styled-components';
import { OmitByValue, PickByValue } from 'utility-types';
import { ThemeExtension } from '../../utils/componentThemeBreakpoints';
import contrastColor from '../../utils/contrastColor';
import { Theme } from '../../theme';

type ThemeStyleDirective<T> = Partial<
  {
    [P in keyof T]: T[P];
  }
> & {
  theme: Theme;
  contrastColor: (color: string) => string;
};

type ThemeHelperMethods = {
  contrastColor: (c: string) => string;
};

function isPseudoSelector(key: string): boolean {
  return /^_/.test(key);
}

function computeProps<T>({
  props,
  helperMethods,
  root
}: {
  props: Partial<ThemeExtension<T>>;
  helperMethods: ThemeHelperMethods;
  root?: Partial<T>;
}): Partial<T> {
  return reduce(
    props,
    (memo, val, key) => {
      if (!root) {
        root = memo;
      }

      if (isPseudoSelector(key)) {
        memo[key as keyof T] = computeProps<T>({
          props: val as Partial<ThemeExtension<T>>,
          helperMethods,
          root
        }) as T[keyof T];
      } else {
        if (isFunction(val)) {
          const genVal = val as (
            props: Partial<T> & ThemeHelperMethods
          ) => T[keyof T];
          memo[key as keyof T] = genVal({ ...root, ...helperMethods });
        } else {
          memo[key as keyof T] = val as T[keyof T];
        }
      }

      return memo;
    },
    {} as T
  );
}

type ThemePropStyleMapping<T> = {
  [P in keyof OmitByValue<T, ThemeExtension<T>>]:
    | ((args: ThemeStyleDirective<T>) => FlattenSimpleInterpolation)
    | FlattenSimpleInterpolation;
};

interface ApplyStyleProps<T> {
  theme: Theme;
  computedProps: Partial<T>;
  props: Partial<T>;
  apply: ThemePropStyleMapping<T>;
  helperMethods: ThemeHelperMethods;
}

function applyStyles<T>({
  theme,
  computedProps,
  props,
  apply,
  helperMethods
}: ApplyStyleProps<T>): Array<FlattenSimpleInterpolation> {
  return reduce(
    apply,
    (memo, val, key) => {
      const targetProp = props[key as keyof T];
      if (!targetProp) {
        return memo;
      }

      if (isFunction(val)) {
        const computedVal = val({
          ...computedProps,
          ...props,
          theme,
          ...helperMethods
        });
        memo.push(computedVal);
      } else {
        memo.push(val as FlattenSimpleInterpolation);
      }
      return memo;
    },
    [] as Array<FlattenSimpleInterpolation>
  );
}

type ThemeCascadeStateMapping<T, U> = {
  [P in keyof PickByValue<T, ThemeExtension<T>>]:
    | ((args: ThemeStyleDirective<T>) => U)
    | U;
};

type CascadeStateSettings<T> = {
  [P in keyof Partial<
    OmitByValue<T, ThemeExtension<T>>
  >]: ThemeCascadeStateMapping<T, T[P]>;
};

interface ApplyBreakpointStyleProps<T> {
  theme: Theme;
  props: Partial<ThemeExtension<T>>;
  apply: ThemePropStyleMapping<T>;
  cascade?: CascadeStateSettings<T>;
}

export default function applyBreakpointStyles<T>({
  theme,
  props,
  apply,
  cascade
}: ApplyBreakpointStyleProps<T>): Array<
  FlattenSimpleInterpolation | SimpleInterpolation
> {
  const helperMethods = {
    contrastColor: (color: string) => contrastColor({ color, theme })
  } as ThemeHelperMethods;

  const cascadableProps = pick(cascade, keys(props));

  // fill in any missing props with cascaded values
  // TODO: get types working
  each(cascadableProps, (val, propName: string) => {
    const stateKeys = keys(val);

    each(stateKeys, (stateKey: keyof PickByValue<T, ThemeExtension<T>>) => {
      if (!props[stateKey]) {
        props[stateKey] = {};
      }

      if (!get(props, [stateKey, propName])) {
        set(props, [stateKey, propName], get(val, [stateKey]));
      }
    });
  });

  const computedProps = computeProps<T>({ props, helperMethods });

  const baseProps = omitBy(computedProps, (_, key) =>
    isPseudoSelector(key)
  ) as Partial<T>;

  const baseStyles = applyStyles<T>({
    theme,
    props: baseProps,
    computedProps,
    apply,
    helperMethods
  });

  const pseudoSelectors = uniq([
    ...keys(props).filter(isPseudoSelector),
    ...flatten(values(cascadableProps).map(v => keys(v)))
  ]);

  const pseudoStyles = reduce(
    pseudoSelectors,
    (memo, selectorKey: keyof PickByValue<T, ThemeExtension<T>>) => {
      const selector = (selectorKey as string).replace(/_/, ':');
      const selectorProps = computedProps[selectorKey as keyof T] as Partial<T>;

      const pseudoStyles = applyStyles<T>({
        theme,
        props: { ...selectorProps },
        computedProps,
        apply,
        helperMethods
      });

      const pseudoClass = css`
        ${selector} {
          ${pseudoStyles}
        }
      `;

      memo.push(...pseudoClass);
      return memo;
    },
    [] as Array<SimpleInterpolation>
  );

  return [...baseStyles, ...pseudoStyles];
}
