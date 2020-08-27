import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import TextInput from './index';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInputWrapper = styled.div`
  border: 1px solid rgba(243, 245, 250, 1);
  border-radius: 16px;
  box-shadow: 0 7px 11px 0 rgba(45, 45, 49, 0.1);
  display: flex;
  margin: 1rem;
  padding: 1rem;
`;

const STextInput = styled(TextInput)`
  opacity: 0.7;
`;

storiesOf('TextInput', module)
  .add('Blank Big Input', () => (
    <OuterWrapper>
      <TextInputWrapper>
        <TextInput placeholder="Placeholder Input" />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput placeholder="Outline Placeholder" />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput placeholder="Filled Placeholder" filled />
      </TextInputWrapper>
    </OuterWrapper>
  ))
  .add('Test', () => (
    <>
      <TextInput />

      <br />

      <TextInput
        _hover={{ backgroundColor: props => props.theme.white }}
        _active={{ backgroundColor: props => props.theme.white }}
        placeholder="Placeholder Input"
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
