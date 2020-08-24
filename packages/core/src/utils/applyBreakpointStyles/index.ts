import {
  cloneDeep,
  get,
  reduce,
  isFunction,
  keys,
  omitBy,
  reject,
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
import {
  ThemeExtension,
  PseudoClass,
  PseudoClassExtension,
  ThemeExtensionHelperMethods
} from '../../utils/componentThemeBreakpoints';
import { Theme } from '../../theme';

function isPseudoSelector(key: string): boolean {
  return /^_/.test(key);
}

function computeProps<T>({
  props,
  helperMethods,
  root
}: {
  props: Partial<T>;
  helperMethods: ThemeExtensionHelperMethods;
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
          props: val as Partial<T>,
          helperMethods,
          root
        }) as T[keyof T];
      } else {
        if (isFunction(val)) {
          const genVal = val as (
            props: Partial<T> & ThemeExtensionHelperMethods
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

export type ThemePropStyleMapping<T> = {
  [P in keyof OmitByValue<T, PseudoClassExtension<T>>]:
    | ((args: T & ThemeExtensionHelperMethods) => FlattenSimpleInterpolation)
    | FlattenSimpleInterpolation;
};

interface ApplyStyleProps<O, T> {
  theme: Theme;
  computedProps: Partial<T>;
  props: Partial<T>;
  apply: ThemePropStyleMapping<O>;
  helperMethods: ThemeExtensionHelperMethods;
}

function applyStyles<O, T>({
  theme,
  computedProps,
  props,
  apply,
  helperMethods
}: ApplyStyleProps<O, T>): Array<FlattenSimpleInterpolation> {
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

type ThemeCascadeStateMapping<O, T, P extends keyof O> = {
  [Q in keyof PickByValue<Partial<T>, PseudoClassExtension<T>>]:
    | ((args: Partial<O> & ThemeExtensionHelperMethods) => O[P])
    | O[P];
};

export type CascadeStateSettings<O, T> = {
  [P in keyof OmitByValue<
    Partial<O>,
    PseudoClass<O>
  >]?: ThemeCascadeStateMapping<O, T, P>;
};

interface ApplyBreakpointStyleProps<O, T> {
  theme: Theme;
  props: Partial<T>;
  apply: ThemePropStyleMapping<O>;
  cascade: CascadeStateSettings<O, T>;
  helperMethods: ThemeExtensionHelperMethods;
}

export default function applyBreakpointStyles<O, T = ThemeExtension<O>>({
  theme,
  props: passedProps,
  apply,
  cascade = {},
  helperMethods
}: ApplyBreakpointStyleProps<O, T>): Array<
  FlattenSimpleInterpolation | SimpleInterpolation
> {
  // used cloned instance of props so as not to mutate args
  const props = cloneDeep(passedProps);

  const cascadableProps = reject(Object.keys(props), isPseudoSelector);

  // fill in any missing props with cascaded values.
  // first iterate through all cascadable props
  for (const prop of Object.keys(cascade)) {
    if (!props[prop as keyof typeof props]) {
      continue;
    }

    // iterate through each cascadable state to see if any props are missing
    for (const stateKey of Object.keys(
      cascade[prop as keyof typeof cascade]
    ) as Array<keyof Partial<T>>) {
      const targetProp = props[prop as keyof typeof props];

      if (!props[stateKey]) {
        props[stateKey as keyof typeof props] = {} as T[keyof T];
      }

      const cascadeState = cascade[prop as keyof typeof cascade];

      const cascadeVal = cascadeState[
        stateKey as keyof typeof cascadeState
      ] as typeof targetProp;

      const existingPropDef = get(props, [stateKey, prop]);

      if (!existingPropDef) {
        const existingStates = (props[stateKey] || {}) as PseudoClassExtension<
          T
        >;
        existingStates[prop as keyof typeof existingStates] = cascadeVal;
      }
    }
  }

  const computedProps = computeProps<T>({ props, helperMethods });

  const baseProps = omitBy(computedProps, (_, key) =>
    isPseudoSelector(key)
  ) as Partial<T>;

  const baseStyles = applyStyles<O, T>({
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
    (
      memo,
      selectorKey: keyof PickByValue<Partial<T>, PseudoClassExtension<T>>
    ) => {
      const selector = (selectorKey as string).replace(/_/, ':');
      const selectorProps = computedProps[selectorKey] as Partial<T>;

      const pseudoStyles = applyStyles<O, T>({
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
