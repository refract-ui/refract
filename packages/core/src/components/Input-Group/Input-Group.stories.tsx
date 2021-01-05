import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import InputWrapper from './../Input-Wrapper';
import InputGroup from './index';
import TextInput from './../Text-Input';
import InputLabel from './../Input-Label';
import InputHelpText from './../Input-HelpText';

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

storiesOf('InputGroup', module)
  .add('w/ Left Icons', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-1" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-2">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-2" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-3">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-3" filled />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-4">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-4" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-3">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-3" filled />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('w/ Right Icons', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-4">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-1" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-5">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-5" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-6">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-6" filled />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-4">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-4" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-3">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-3" filled />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('w/ Both Icons', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-7">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-7" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-7-filled">Label</InputLabel>
          <InputGroup>
            <TextInput
              placeholder="Placeholder Input"
              id="input-7-filled"
              filled
            />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-8">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-8" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-8-filled">Label</InputLabel>
          <InputGroup>
            <TextInput
              placeholder="Placeholder Input"
              id="input-8-filled"
              filled
            />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-9">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Not a Valid Date" id="input-9" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-9-filled">Label</InputLabel>
          <InputGroup>
            <TextInput
              placeholder="Not a Valid Date"
              id="input-9-filled"
              filled
            />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ));
