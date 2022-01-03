import React, { useContext } from 'react';
import { get, pick, defaultsDeep, difference } from 'lodash';
import { ThemeContext } from 'styled-components';
import { PickByValue } from 'utility-types';
import contrastColor from '../../utils/contrastColor';
import { CoreTheme, ThemeComponent } from '../../theme';
import { breakpointKeys } from '../../theme/mediaQueries';
import applyComponentTheme from '../../utils/applyComponentTheme';
import {
  ThemeBreakpoints,
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

type GenVariantFn<TVariants, TTheme> = (
  props: VariantMapProps<TVariants>
) => Partial<TTheme>;

// TODO: figure out how to do this without generic Function
export type SansFunctions<T> = {
  /* eslint-disable @typescript-eslint/ban-types */
  [P in keyof T]: Exclude<T[P], Function>;
  /* eslint-enable @typescript-eslint/ban-types */
};

interface ComponentGeneratorProps<
  TTheme,
  TVariants,
  TThemeBreakpoint,
  TProps,
  TBaseElementProps
> {
  Component: React.FC<Partial<TBaseElementProps> & ThemeComponent & TProps>;
  defaultStyleMapping: ThemeBreakpoints<TThemeBreakpoint>;
  mapPropsToStyle: ThemePropStyleMapping<
    TThemeBreakpoint,
    TBaseElementProps & TProps
  >;
  cascadeStateProps?: CascadeStateSettings<TThemeBreakpoint>;
  variantMapping?: VariantMap<TVariants, TTheme>;
}

type CreateThemedComponentProps<
  TTheme,
  TVariants,
  TThemeBreakpoint,
  TProps,
  TExtends,
  BaseElementProps
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
  }) => ComponentGeneratorProps<
    TTheme,
    TVariants,
    TThemeBreakpoint,
    TProps,
    BaseElementProps
  >;
};

export default function createThemedComponent<
  TTheme,
  TVariants = unknown,
  TStates extends string = '',
  TProps = unknown,
  TExtends = unknown,
  TBaseElement = unknown,
  TBaseElementProps = TBaseElement,
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
  TExtends,
  TBaseElementProps
>): React.FC<TBaseElementProps & TComponentProps & TProps> {
  const ThemedComponent: React.FC<
    TBaseElementProps & TComponentProps & TProps
  > = props => {
    const theme = get(props, 'theme', useContext(ThemeContext)) as CoreTheme;
    const variantPropKeys = Object.keys(defaultVariants || {});
    let variant = defaultsDeep(
      pick(props, variantPropKeys) as TVariants,
      defaultVariants
    ) as TVariants;

    // define convenience methods passed along to each prop / style mapping
    const helperMethods = {
      theme,
      contrastColor: (color: string) =>
        contrastColor({ color, themeColors: theme.themeColors })
    } as ThemeExtensionHelperMethods;

    const {
      Component,
      defaultStyleMapping,
      mapPropsToStyle,
      cascadeStateProps = {},
      variantMapping = {}
    } = compose({ ...helperMethods, variant });

    variant = defaultsDeep(variant, defaultVariants) as TVariants;

    const extendThemePropKeys = [
      ...Object.keys(defaultStyleMapping.xs),
      ...breakpointKeys,
      ...states
    ];

    const extendTheme = pick(props, extendThemePropKeys) as TExtendedTheme;

    // apply variants to extended theme
    // TODO: make this happen at every breakpoint
    for (const [, variantMap] of Object.entries(variantMapping)) {
      const genVariant = variantMap as GenVariantFn<TVariants, TTheme>;
      const variantVal = genVariant(variant);
      defaultStyleMapping.xs = defaultsDeep(variantVal, defaultStyleMapping.xs);
    }

    const componentPropKeys = difference(Object.keys(props), [
      ...extendThemePropKeys,
      ...variantPropKeys
    ]) as Array<keyof TProps>;
    const componentProps = pick(props, componentPropKeys) as TProps;

    const applyThemeBreakpoint = (theme: CoreTheme, props: TThemeBreakpoint) =>
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

    return <Component componentCss={componentCss} {...componentProps} />;
  };

  return ThemedComponent;
}
