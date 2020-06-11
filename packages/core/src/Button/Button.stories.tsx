import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

storiesOf('Button', module).add('test', () => (
  <Button onClick={action('clicked!')}>test</Button>
));
