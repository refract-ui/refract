import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import InputWrapper from './index';
import TextInput from './../Text-Input';
import InputLabel from './../Input-Label';

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
      <InputWrapper label="Input One">
        <InputLabel label="Test One" htmlFor="input-1" />
        <TextInput placeholder="Placeholder Input" id="input-1" />
      </InputWrapper>
    </SectionWrapper>
    <SectionWrapper>
      <InputWrapper label="Input Two">
        <InputLabel label="Test Two" htmlFor="input-2" />
        <TextInput placeholder="Placeholder Input" id="input-2" />
      </InputWrapper>
    </SectionWrapper>
    <SectionWrapper>
      <InputWrapper label="Input Three">
        <InputLabel label="Test Three" htmlFor="input-3" />
        <TextInput placeholder="Placeholder Input" id="input-3" />
      </InputWrapper>
    </SectionWrapper>
  </OuterWrapper>
));
