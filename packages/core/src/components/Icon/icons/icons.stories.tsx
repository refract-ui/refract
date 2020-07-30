import React from 'react';
import { TestIcon } from './TestIcon';
import { storiesOf } from '@storybook/react';

import Icon from '../index';

export default {
  title: 'Icons'
};

storiesOf('Icon', module)
  .add('test', () => <TestIcon />)
  .add('prop', () => <Icon name="test" />);
