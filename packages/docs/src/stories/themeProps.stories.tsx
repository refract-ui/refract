import React from 'react';
import ThemePropList from '../components/ThemePropList';
import {
  containerPropDefinitions,
  typograhyContainerPropDefinitions,
  alignedContainerPropDefinitions,
  flexContainerPropDefinitions,
  gridContainerPropDefinitions
} from '../lib/themeProps';

export default {
  title: 'docs/Containers',
  component: ThemePropList
};

export const AllContainers = (): React.ReactElement => (
  <ThemePropList
    title="All Containers"
    definitions={containerPropDefinitions}
  />
);

export const AlignedContainers = (): React.ReactElement => (
  <ThemePropList
    title="Aligned Containers"
    definitions={alignedContainerPropDefinitions}
  />
);

export const FlexContainers = (): React.ReactElement => (
  <ThemePropList
    title="Flex Containers"
    definitions={flexContainerPropDefinitions}
  />
);

export const GridContainers = (): React.ReactElement => (
  <ThemePropList
    title="Grid Containers"
    definitions={gridContainerPropDefinitions}
  />
);

export const TypographyContainers = (): React.ReactElement => (
  <ThemePropList
    title="Typography Containers"
    definitions={typograhyContainerPropDefinitions}
  />
);
