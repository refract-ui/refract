import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemePropList from '../components/ThemePropList';
import {
  containerPropDefinitions,
  typograhyContainerPropDefinitions,
  alignedContainerPropDefinitions,
  flexContainerPropDefinitions,
  gridContainerPropDefinitions
} from '../lib/themeProps';

storiesOf('docs/containers', module)
  .add('All Containers', () => (
    <ThemePropList
      title="All Containers"
      definitions={containerPropDefinitions}
    />
  ))
  .add('Aligned Containers', () => (
    <ThemePropList
      title="Aligned Containers"
      definitions={alignedContainerPropDefinitions}
    />
  ))
  .add('Flex Containers', () => (
    <ThemePropList
      title="Flex Containers"
      definitions={flexContainerPropDefinitions}
    />
  ))
  .add('Grid Containers', () => (
    <ThemePropList
      title="Grid Containers"
      definitions={gridContainerPropDefinitions}
    />
  ))
  .add('Typography Containers', () => (
    <ThemePropList
      title="Typography Containers"
      definitions={typograhyContainerPropDefinitions}
    />
  ));

export default {
  title: 'docs/containers',
  component: ThemePropList
};
