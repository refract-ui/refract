import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import InputWrapper from './index';
import TextInput from './../Text-Input';

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
        <TextInput placeholder="Placeholder Input" />
      </InputWrapper>
    </SectionWrapper>
    <SectionWrapper>
      <InputWrapper>
        <TextInput placeholder="Placeholder Input" />
      </InputWrapper>
    </SectionWrapper>
    <SectionWrapper>
      <InputWrapper>
        <TextInput placeholder="Placeholder Input" />
      </InputWrapper>
    </SectionWrapper>
  </OuterWrapper>
));
