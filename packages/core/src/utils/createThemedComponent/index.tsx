import React, { useContext } from 'react';
import { get, pick, defaultsDeep, difference } from 'lodash';
import { ThemeContext } from 'styled-components';
import { ValuesType, PickByValue } from 'utility-types';
import contrastColor from '../../utils/contrastColor';
import { Theme, ThemeComponent } from '../../theme';
import { breakpointKeys } from '../../theme/mediaQueries';
import applyComponentTheme from '../../utils/applyComponentTheme';
import {
  ThemeBreakpoints,
  ThemeExtension,
  ComponentThemeBreakpoint,
  ExtendTheme,
  PseudoClass,
  ThemeExtensionHelperMethods
} from '../../utils/componentThemeBreakpoints';
import applyBreakpointStyles, {
  ThemePropStyleMapping,
  CascadeStateSettings
} from '../../utils/applyBreakpointStyles';
import { ContainerPropStyleMap } from '../../theme/containers';

type VariantMapProps<TVariants> = {
  [P in keyof TVariants]: TVariants[P];
};

type VariantMap<TVariants, TTheme> = {
  [P in keyof TVariants]: (
    props: VariantMapProps<TVariants>
  ) => Partial<TTheme>;
};

// TODO: figure out how to do this without generic Function
type SansFunctions<T> = {
  /* eslint-disable @typescript-eslint/ban-types */
  [P in keyof T]: Exclude<T[P], Function>;
  /* eslint-enable @typescript-eslint/ban-types */
};

interface ComponentGeneratorProps<TTheme, TVariants, TThemeBreakpoint, TProps> {
  Component: React.FC<ThemeComponent & TProps>;
  defaultStyleMapping: ThemeBreakpoints<TThemeBreakpoint>;
  mapPropsToStyle: ThemePropStyleMapping<TThemeBreakpoint, TProps>;
  cascadeStateProps?: CascadeStateSettings<
    TThemeBreakpoint,
    ThemeExtension<TThemeBreakpoint>
  >;
  variantMapping?: VariantMap<TVariants, TTheme>;
}

type CreateThemedComponentProps<
  TTheme,
  TVariants,
  TThemeBreakpoint,
  TProps,
  TExtends
> = {
  defaultVariants?: TVariants;
  states?: Array<keyof PickByValue<TThemeBreakpoint, PseudoClass<TTheme>>>;
  extend?: (
    props: ThemeExtensionHelperMethods
  ) => ContainerPropStyleMap<TExtends>;
  compose: ({
    theme,
    contrastColor,
    variant
  }: ThemeExtensionHelperMethods & {
    variant: TVariants;
  }) => ComponentGeneratorProps<TTheme, TVariants, TThemeBreakpoint, TProps>;
};

export default function createThemedComponent<
  TTheme,
  TVariants = unknown,
  TStates extends string = '',
  TProps = unknown,
  TExtends = unknown,
  TThemeBreakpoint = ComponentThemeBreakpoint<
    TTheme & Partial<SansFunctions<TExtends>>,
    TStates
  >,
  TExtendedTheme = ExtendTheme<TThemeBreakpoint>,
  TComponentProps = Partial<
    ThemeExtensionHelperMethods & TExtendedTheme & TVariants
  >
>({
  defaultVariants = undefined,
  states = [],
  extend,
  compose
}: CreateThemedComponentProps<
  TTheme & Partial<TExtends>,
  TVariants,
  TThemeBreakpoint,
  TProps,
  TExtends
>): React.FC<TComponentProps & TProps> {
  const ThemedComponent: React.FC<TComponentProps & TProps> = props => {
    const theme = get(props, 'theme', useContext(ThemeContext)) as Theme;
    const variantPropKeys = Object.keys(defaultVariants || {});
    let variant = defaultsDeep(
      pick(props, variantPropKeys) as TVariants,
      defaultVariants
    );

    // define convenience methods passed along to each prop / style mapping
    const helperMethods = {
      theme,
      contrastColor: (color: string) => contrastColor({ color, theme })
    } as ThemeExtensionHelperMethods;

    const {
      Component,
      defaultStyleMapping,
      mapPropsToStyle,
      cascadeStateProps = {},
      variantMapping = {}
    } = compose({ ...helperMethods, variant });

    variant = defaultsDeep(variant, defaultVariants);

    const extendThemePropKeys = [
      ...Object.keys(defaultStyleMapping.xs),
      ...breakpointKeys,
      ...states
    ];

    const extendTheme = pick(props, extendThemePropKeys) as TExtendedTheme;

    // apply variants to extended theme
    // TODO: make this happen at every breakpoint
    for (const [variantKey, variantMap] of Object.entries(variantMapping)) {
      const variantMapArgs = {
        // [variantKey]: variant[variantKey as keyof typeof variant]
        ...variant
      };

      const genVariant = variantMap as ValuesType<
        VariantMap<TVariants, TTheme>
      >;
      const variantVal = genVariant(variantMapArgs);

      defaultStyleMapping.xs = defaultsDeep(variantVal, defaultStyleMapping.xs);
    }

    const componentPropKeys = difference(Object.keys(props), [
      ...extendThemePropKeys,
      ...variantPropKeys
    ]) as Array<keyof TProps>;
    const componentProps = pick(props, componentPropKeys) as TProps;

    const applyThemeBreakpoint = (theme: Theme, props: TThemeBreakpoint) =>
      applyBreakpointStyles<TThemeBreakpoint, TExtends, TProps>({
        theme,
        props,
        helperMethods,
        apply: { ...mapPropsToStyle, ...(extend ? extend(helperMethods) : {}) },
        cascade: cascadeStateProps,
        componentProps
      });

    const componentCss = applyComponentTheme<TThemeBreakpoint>({
      theme,
      defaultComponentTheme: defaultStyleMapping,
      extendTheme,
      applyThemeBreakpoint
    });

    // the logic of the component might need information about the variant
    return (
      <Component componentCss={componentCss} {...variant} {...componentProps} />
    );
  };

  return ThemedComponent;
}
