import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import InputWrapper from './index';
import TextInput from './../Text-Input';
import InputLabel from './../Input-Label';
import InputHelpText from './../Input-HelpText';
import TextInputMaterial from './../Text-Input-Material';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.div`
  border: 1px solid rgba(243, 245, 250, 1);
  border-radius: 16px;
  box-shadow: 0 7px 11px 0 rgba(45, 45, 49, 0.1);
  display: flex;
  margin: 1rem;
  padding: 1rem;
`;

storiesOf('InputWrapper', module).add('Input Wrapper - Md Inputs', () => (
  <OuterWrapper>
    <SectionWrapper>
      <InputWrapper>
        <InputLabel htmlFor="input-1">Label</InputLabel>
        <TextInput placeholder="Placeholder Input" id="input-1" />
        <InputHelpText>Some Description</InputHelpText>
      </InputWrapper>
    </SectionWrapper>

    <SectionWrapper>
      <InputWrapper>
        <InputLabel htmlFor="input-2">Label</InputLabel>
        <TextInput placeholder="Placeholder Input" id="input-2" size="sm" />
        <InputHelpText>Some Description</InputHelpText>
      </InputWrapper>
    </SectionWrapper>

    <SectionWrapper>
      <InputWrapper>
        <InputLabel htmlFor="input-3">Label</InputLabel>
        <TextInput placeholder="Placeholder Input" id="input-3" />
        <InputHelpText>Some Description</InputHelpText>
      </InputWrapper>
    </SectionWrapper>

    <SectionWrapper>
      <InputWrapper>
        <InputLabel htmlFor="input-4">Label</InputLabel>
        <TextInputMaterial placeholder="Placeholder Input" id="input-4" />
        <InputHelpText>Some Description</InputHelpText>
      </InputWrapper>
    </SectionWrapper>
  </OuterWrapper>
));