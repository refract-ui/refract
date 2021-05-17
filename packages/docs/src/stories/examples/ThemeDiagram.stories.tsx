import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeDiagram from '../../components/ThemeDiagram';

storiesOf('docs/ThemeDiagram', module).add('overview', () => <ThemeDiagram />);

export default {
  title: 'docs/ThemeDiagram',
  component: ThemeDiagram
};
