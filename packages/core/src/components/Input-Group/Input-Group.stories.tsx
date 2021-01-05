import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import InputWrapper from './../Input-Wrapper';
import InputGroup from './index';
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
  ))
  .add('w/ Left Icons - Material', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-8">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-8" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-9">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-9" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-10">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-10" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-11">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-11" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-12">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Enter Text Here" id="input-12" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('w/ Right Icons - Material', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-11">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-11" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-12">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-12" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-13">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-13" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-14">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-14" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-15">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-15" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-16">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Enter Phone Number" id="input-16" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('w/ Both Icons - Material', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-100">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-100" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-101">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Enter First Name" id="input-101" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-102">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Enter First Name" id="input-102" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-103">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Enter Date" id="input-103" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ));
