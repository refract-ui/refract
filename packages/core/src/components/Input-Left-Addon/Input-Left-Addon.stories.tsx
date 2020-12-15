import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import InputWrapper from './../Input-Wrapper';
import InputGroup from './../Input-Group';
import TextInput from './../Text-Input';
import InputLabel from './../Input-Label';
import InputHelpText from './../Input-HelpText';
import TextInputMaterial from './../Text-Input-Material';
import InputValidationMessage from './../Input-ValidationMessage';
import InputIcon from './../Input-Icon';
import InputLeftAddon from './../Input-Left-Addon';

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

storiesOf('InputLeftAddon', module).add('One Addon', () => (
  <OuterWrapper>
    <SectionWrapper>
      <InputWrapper>
        <InputLabel htmlFor="input-1">Label</InputLabel>
        <InputGroup>
          <InputLeftAddon content={['$', '0.00']} />
          <TextInput
            placeholder="Placeholder Input"
            id="input-1"
            noBorderLeft
          />
        </InputGroup>
        <InputHelpText>Some Description</InputHelpText>
      </InputWrapper>
    </SectionWrapper>
  </OuterWrapper>
));
