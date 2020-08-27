import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import TextInputMaterial from './index';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInputMaterialWrapper = styled.div`
  border: 1px solid rgba(243, 245, 250, 1);
  border-radius: 16px;
  box-shadow: 0 7px 11px 0 rgba(45, 45, 49, 0.1);
  margin: 1rem;
  padding: 1rem;
  display: flex;
`;

const STextInput = styled(TextInputMaterial)`
  opacity: 0.7;
`;

storiesOf('TextInputMaterial', module)
  .add('Blank Big Input', () => (
    <OuterWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial placeholder="Placeholder Input" />
      </TextInputMaterialWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial
          placeholder="Outline Placeholder"
          value="Pre-Filled In Text"
        />
      </TextInputMaterialWrapper>
    </OuterWrapper>
  ))
  .add('Test', () => (
    <>
      <TextInputMaterial />

      <br />

      <TextInputMaterial
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

      <TextInputMaterial
        color="red"
        border={{
          borderRadius: '50%',
          borderColor: 'orange',
          borderWidth: '3px'
        }}
      />

      <br />

      <TextInputMaterial backgroundColor="crimson" />

      <br />

      <TextInputMaterial mdOnly={{ backgroundColor: 'pink' }} />

      <br />

      <TextInputMaterial
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
