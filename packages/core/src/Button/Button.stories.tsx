import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

storiesOf('Button', module).add('test', () => (
  <>
    <Button onClick={action('clicked!')}>default</Button>

    <br />

    <Button color="dark">warning</Button>

    <br />

    <Button extendTheme={{ backgroundColor: 'crimson' }}>extended</Button>

    <br />

    <Button extendTheme={{ mdOnly: { backgroundColor: 'pink' } }}>
      pink at md
    </Button>
  </>
));
