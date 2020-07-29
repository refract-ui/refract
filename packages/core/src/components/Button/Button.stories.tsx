import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';

const SButton = styled(Button)`
  opacity: 0.7;
`;

storiesOf('Button', module).add('test', () => (
  <>
    <Button>default</Button>

    <br />

    <Button color="dark">warning</Button>

    <br />

    <Button backgroundColor="crimson">extended</Button>

    <br />

    <Button mdOnly={{ backgroundColor: 'pink' }}>pink at md</Button>

    <br />

    <Button
      backgroundColor={props => props.theme.cyan200}
      mdOnly={{
        backgroundColor: props => props.theme.red900,
        _hover: {
          backgroundColor: props => props.theme.cyan300
        },
        _active: {
          backgroundColor: 'chartreuse'
        }
      }}
    >
      variant states
    </Button>

    <br />

    <SButton>translucent</SButton>
  </>
));
