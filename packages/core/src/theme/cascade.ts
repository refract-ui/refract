import {
  isFunction,
  isObject,
  defaultsDeep,
  sortBy,
  isEmpty,
  find,
  reduce,
  pick
} from 'lodash';

export type ThemeExtension<TTrait, TTheme = Record<string, unknown>> = {
  name: keyof TTheme;
  deps: Array<keyof TTheme>;
  defaults: TTrait | ((props: Partial<TTheme>) => TTrait);
  apply: (props: TApplyThemeSettings<TTheme, TTrait>) => TTrait;
};

export type ThemeSetting<TTheme, TTrait> = {
  theme: Partial<TTheme>;
  defaults: TTrait;
};

export type ThemeSettingConfig<TTheme, TTrait> =
  | Partial<TTrait>
  | ((props: ThemeSetting<TTheme, TTrait>) => Partial<TTrait>);

export type ThemeExtensionArray<TTheme> = Array<
  TTheme[keyof TTheme] extends infer TTrait
    ? ThemeExtension<TTrait, TTheme>
    : never
>;

export type ThemeSettings<TTheme> = {
  [P in keyof TTheme]?: ThemeSettingConfig<TTheme, TTheme[P]>;
};

export type TApplyThemeSettings<TTheme, TTrait> = ThemeSetting<
  TTheme,
  TTrait
> & {
  override: ThemeSettingConfig<TTheme, TTrait>;
};

export function applyThemeSettings<TTheme, TTrait>({
  theme,
  defaults,
  override
}: TApplyThemeSettings<TTheme, TTrait>): TTrait {
  if (isFunction(override)) {
    return defaultsDeep(override({ defaults, theme }), defaults) as TTrait;
  }

  if (isObject(override)) {
    return defaultsDeep(override, defaults) as TTrait;
  }

  return defaults;
}

function findNextSettingIndex<TTheme>(
  unsorted: ThemeExtensionArray<TTheme>,
  sorted: ThemeExtensionArray<TTheme>
) {
  loop1: for (let i = 0; i < unsorted.length; i += 1) {
    const item = unsorted[i];

    for (let j = 0; j < item.deps.length; j += 1) {
      if (!find(sorted, ({ name }) => item.deps[j] === name)) {
        continue loop1;
      }
    }

    return i;
  }

  const unmetDeps = unsorted
    .map(item => `${item.name}: ${item.deps.join(', ')}`)
    .join('; ');
  throw Error(
    `The following theme settings have unmet dependencies: ${unmetDeps}`
  );
}

export interface IGenerateTheme<TTheme> {
  extensions: ThemeExtensionArray<TTheme>;
  settings?: ThemeSettings<TTheme>;
}

export function generateTheme<TTheme>({
  extensions,
  settings = {}
}: IGenerateTheme<TTheme>): TTheme {
  const all = [...extensions];
  const rest = sortBy([...all], item => item.name);
  const sorted = [] as ThemeExtensionArray<TTheme>;

  while (!isEmpty(rest)) {
    const nextIndex = findNextSettingIndex(rest, sorted);
    sorted.push(rest[nextIndex]);
    rest.splice(nextIndex, 1);
  }

  // generate default theme
  const theme = reduce(
    sorted,
    (memo, extension) => {
      const name = extension.name as keyof TTheme;
      const depNames = extension.deps as Array<keyof TTheme>;
      const deps = pick(memo, depNames) as Partial<TTheme>;
      let defaults = extension.defaults as TTheme[keyof TTheme];

      if (isFunction(defaults)) {
        const defaultsFn = defaults as (
          props: Partial<TTheme>
        ) => TTheme[keyof TTheme];
        defaults = defaultsFn(memo);
      }

      const apply = extension.apply as (
        props: TApplyThemeSettings<TTheme, TTheme[keyof TTheme]>
      ) => TTheme[keyof TTheme];

      const override = settings[name];

      memo[name] = apply({ theme: deps, defaults, override });
      return memo;
    },
    {} as TTheme
  );

  return theme;
}
