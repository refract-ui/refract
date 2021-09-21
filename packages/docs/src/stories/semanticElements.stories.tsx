import React from 'react';
import { theme, BlockElements } from '@refract-ui/core';
import { pick, reduce, isArray, has } from 'lodash';
import ThemePropList from '../components/ThemePropList';
import ThemeConfigExample from '../components/ThemeConfigExample';
import { nativeElementPropDefinitions } from '../lib/nativeElements';
import { globalStyleSettings } from '../lib/themeDefaultSettings';
import {
  ThemePropDefinition,
  TypographyContainerPropDefinitions,
  ContainerPropDefinitions,
  typograhyContainerPropDefinitions,
  containerPropDefinitions
} from '../lib/themeProps';

export default {
  title: 'docs/Semantic Elements',
  component: ThemePropList
};

const defaultTheme = theme();
const nativeElementStyles: any = defaultTheme.components.globalStyles.xs;

type PropDefKeyTypes = TypographyContainerPropDefinitions &
  ContainerPropDefinitions;

type DefinitionType = {
  [p in keyof PropDefKeyTypes]: ThemePropDefinition;
};

const propDefKeys: {
  [key: string]: ThemePropDefinition;
} = {
  ...typograhyContainerPropDefinitions,
  ...containerPropDefinitions
};

type NativeElementProps = {
  [p: string]: string;
};

export const SelectSemanticElement = ({
  tagName
}: {
  tagName: string;
}): React.ReactElement => {
  const props = nativeElementStyles[tagName] as any;
  const definitions: Partial<DefinitionType> = reduce(
    props,
    (memo: any, val: any, key: keyof PropDefKeyTypes) => {
      if (isArray(val)) {
        val = val.join(', ');
      }

      if (propDefKeys[key as string] as ThemePropDefinition) {
        memo[key] = {
          ...propDefKeys[key],
          defaultValue: val
        } as any;
      }

      return memo;
    },
    {}
  );

  const { definition, link } =
    (nativeElementPropDefinitions[tagName as string] as ThemePropDefinition) ||
    {};

  const defaultPropConfig = reduce(
    globalStyleSettings,
    (memo: any, prop: any, key: any) => {
      const [setting, path] = key.split('.');
      if (path) {
        if (!memo[setting]) {
          memo[setting] = [];
        }

        memo[setting].push({ path, prop });
      } else {
        memo[setting] = prop;
      }

      return memo;
    },
    {}
  );

  return (
    <>
      <ThemePropList title={tagName} definitions={definitions}>
        {link && (
          <p>
            <a href={link} target="_blank" rel="noreferrer">
              spec
            </a>
          </p>
        )}
        {definition && <p>{definition}</p>}

        <h2>Default props:</h2>
      </ThemePropList>

      <ThemeConfigExample
        theme={defaultTheme}
        componentName="globalStyles"
        settings={pick(defaultPropConfig, tagName)}
      />

      {has(BlockElements, tagName) && (
        <ThemePropList
          definitions={{
            ...containerPropDefinitions,
            ...definitions
          }}
        >
          <h2>All configurable props</h2>

          <p>
            The complete set of properties that can be configured globally for
            this tag. The default values are listed next to the property names
            if defined.
          </p>
        </ThemePropList>
      )}
    </>
  );
};
SelectSemanticElement.args = { tagName: 'h1' };
SelectSemanticElement.argTypes = {
  tagName: {
    name: 'Tag Name',
    control: { type: 'select' },
    options: Object.keys(nativeElementStyles).map(i => i)
  }
};
