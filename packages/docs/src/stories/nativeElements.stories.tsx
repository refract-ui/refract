import React from 'react';
import { pick, reduce, forEach, isArray, has } from 'lodash';
import { storiesOf } from '@storybook/react';
import { theme, BlockElements } from '@refract-ui/core';
import ThemePropList from '../components/ThemePropList';
import { nativeElementPropDefinitions } from '../lib/nativeElements';
import {
  ThemePropDefinition,
  TypographyContainerPropDefinitions,
  ContainerPropDefinitions,
  typograhyContainerPropDefinitions,
  containerPropDefinitions
} from '../lib/themeProps';
import { globalStyleSettings } from '../lib/themeDefaultSettings';
import ThemeConfigExample from '../components/ThemeConfigExample';

const defaultTheme = theme();
const nativeElementStyles = defaultTheme.components.globalStyles.xs;
const stories = storiesOf('docs/global styles', module);

const propDefKeys = {
  ...typograhyContainerPropDefinitions,
  ...containerPropDefinitions
} as TypographyContainerPropDefinitions & ContainerPropDefinitions;

type NativeElementProps = {
  [p: string]: string;
};

forEach(nativeElementStyles, (props: NativeElementProps, tagName: string) => {
  const definitions = reduce(
    props,
    (memo, val: any, key: any) => {
      if (isArray(val)) {
        val = val.join(', ');
      }

      if (propDefKeys[key]) {
        memo[key] = {
          ...propDefKeys[key],
          defaultValue: val
        } as Partial<ThemePropDefinition>;
      }

      return memo;
    },
    {}
  );

  const { definition, link } = nativeElementPropDefinitions[tagName] || {};

  const defaultPropConfig = reduce(
    globalStyleSettings,
    (memo, prop, key) => {
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

  stories.add(tagName, () => (
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
  ));
});

export default {
  title: 'docs/global styles',
  component: ThemePropList
};
