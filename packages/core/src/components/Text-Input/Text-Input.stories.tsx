import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import TextInput from './index';

const STextInput = styled(TextInput)`
  opacity: 0.7;
`;

storiesOf('TextInput', module).add('test', () => (
  <>
    <TextInput />

    <br />

    <TextInput
      _hover={{ backgroundColor: props => props.theme.white }}
      _active={{ backgroundColor: props => props.theme.white }}
      placeholder="Hey"
      border={{
        borderRadius: '8px',
        borderColor: '#B0B9C9',
        borderWidth: '1px'
      }}
    />

    <br />

    <TextInput
      color="red"
      border={{
        borderRadius: '50%',
        borderColor: 'orange',
        borderWidth: '3px'
      }}
    />

    <br />

    <TextInput backgroundColor="crimson" />

    <br />

    <TextInput mdOnly={{ backgroundColor: 'pink' }} />

    <br />

    <TextInput
      backgroundColor={props => props.theme.cyan200}
      _hover={{ backgroundColor: props => props.theme.blue }}
      mdOnly={{
        backgroundColor: props => props.theme.red900,
        _hover: {
          backgroundColor: props => props.theme.cyan300
        },
        _active: {
          backgroundColor: 'chartreuse'
        }
      }}
    />

    <br />

    <STextInput />
  </>
));
