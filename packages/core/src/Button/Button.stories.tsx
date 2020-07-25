import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

const SButton = styled(Button)`
  opacity: 0.7;
`;

storiesOf('Button', module).add('test', () => (
  <>
    <Button>default</Button>

    <br />

    <Button color="dark">warning</Button>

    <br />

    <Button extendTheme={{ backgroundColor: 'crimson' }}>extended</Button>

    <br />

    <Button extendTheme={{ mdOnly: { backgroundColor: 'pink' } }}>
      pink at md
    </Button>

    <br />

    <Button
      extendTheme={{
        mdOnly: {
          backgroundColor: 'pink',
          _hover: {
            backgroundColor: 'purple'
          },
          _active: {
            backgroundColor: 'chartreuse'
          }
        }
      }}
    >
      variant states
    </Button>

    <br />

    <SButton>translucent</SButton>
  </>
));
