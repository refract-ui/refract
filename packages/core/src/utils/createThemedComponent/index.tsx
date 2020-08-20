import React, { useContext } from 'react';
import { get, pick, defaultsDeep, difference } from 'lodash';
import { ThemeContext } from 'styled-components';
import { ValuesType, PickByValue } from 'utility-types';
import { Theme, ThemeComponent } from '../../theme';
import { breakpointKeys } from '../../theme/mediaQueries';
import applyComponentTheme from '../../utils/applyComponentTheme';
import {
  ThemeBreakpoints,
  ThemeExtension,
  ComponentThemeBreakpoint,
  ExtendTheme,
  PseudoClass
} from '../../utils/componentThemeBreakpoints';
import applyBreakpointStyles, {
  ThemePropStyleMapping,
  CascadeStateSettings
} from '../../utils/applyBreakpointStyles';

export type WithTheme = {
  theme: Theme;
};

type VariantMapProps<TVariants> = {
  [P in keyof TVariants]: TVariants[P];
};

type VariantMap<TVariants, TTheme> = {
  [P in keyof TVariants]: (
    props: VariantMapProps<TVariants>
  ) => Partial<TTheme>;
};

interface ComponentGeneratorProps<TTheme, TVariants, TThemeBreakpoint, TProps> {
  Component: React.FC<ThemeComponent & TProps>;
  defaultStyleMapping: ThemeBreakpoints<TThemeBreakpoint>;
  mapPropsToStyle: ThemePropStyleMapping<TThemeBreakpoint>;
  cascadeStateProps: CascadeStateSettings<
    TThemeBreakpoint,
    ThemeExtension<TThemeBreakpoint>
  >;
  variantMapping: VariantMap<TVariants, TTheme>;
}

type CreateThemedComponentProps<TTheme, TVariants, TThemeBreakpoint, TProps> = {
  defaultVariants: TVariants;
  states: Array<keyof PickByValue<TThemeBreakpoint, PseudoClass<TTheme>>>;
  compose: ({
    theme,
    variant
  }: WithTheme & { variant: TVariants }) => ComponentGeneratorProps<
    TTheme,
    TVariants,
    TThemeBreakpoint,
    TProps
  >;
};

export default function createThemedComponent<
  TTheme,
  TVariants,
  TStates extends string,
  TProps,
  TThemeBreakpoint = ComponentThemeBreakpoint<TTheme, TStates>,
  TExtendedTheme = ExtendTheme<TThemeBreakpoint>,
  TComponentProps = Partial<WithTheme & TExtendedTheme & TVariants>
>({
  defaultVariants,
  states,
  compose
}: CreateThemedComponentProps<
  TTheme,
  TVariants,
  TThemeBreakpoint,
  TProps
>): React.FC<TComponentProps & TProps> {
  const ThemedComponent: React.FC<TComponentProps & TProps> = props => {
    const theme = get(props, 'theme', useContext(ThemeContext)) as Theme;
    const variantPropKeys = Object.keys(defaultVariants);
    let variant = defaultsDeep(
      pick(props, variantPropKeys) as TVariants,
      defaultVariants
    );

    const {
      Component,
      defaultStyleMapping,
      mapPropsToStyle,
      cascadeStateProps,
      variantMapping
    } = compose({ theme, variant });

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
        // previously:
        // [variantKey]: variant[variantKey as keyof typeof variant]

        // revision:
        // i think we want access to all variant values for these functions
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
      applyBreakpointStyles<TThemeBreakpoint>({
        theme,
        props,
        apply: mapPropsToStyle,
        cascade: cascadeStateProps
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
