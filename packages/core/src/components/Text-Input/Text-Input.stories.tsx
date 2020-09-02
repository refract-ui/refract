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
  .add('Md Inputs', () => (
    <OuterWrapper>
      <TextInputWrapper>
        <TextInput placeholder="Placeholder Input" />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput value="Pre-Filled In Text" />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput value="Success State" success />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput value="Error State" error />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput placeholder="Placeholder Input" filled />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput value="Pre-Filled In Text" filled />
      </TextInputWrapper>
    </OuterWrapper>
  ))
  .add('Sm Inputs', () => (
    <OuterWrapper>
      <TextInputWrapper>
        <TextInput placeholder="Placeholder Input" size="sm" />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput value="Pre-Filled In Text" size="sm" />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput placeholder="Placeholder Input" filled size="sm" />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput value="Pre-Filled In Text" filled size="sm" />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput value="Success State" success filled size="sm" />
      </TextInputWrapper>
      <TextInputWrapper>
        <TextInput value="Error State" error filled size="sm" />
      </TextInputWrapper>
    </OuterWrapper>
  ));
