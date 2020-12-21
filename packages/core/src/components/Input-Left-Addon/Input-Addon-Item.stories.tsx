import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import InputWrapper from '../Input-Wrapper';
import InputGroup from '../Input-Group';
import TextInput from '../Text-Input';
import InputLabel from '../Input-Label';
import InputHelpText from '../Input-HelpText';
import TextInputMaterial from '../Text-Input-Material';
import InputValidationMessage from '../Input-ValidationMessage';
import InputIcon from '../Input-Icon';
import InputLeftAddon from '.';
import InputRightAddon from '../Input-Right-Addon';
import Icon from '../Icons';
import Button from '../Button';

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

storiesOf('InputAddonItems', module)
  .add('Left Addons', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <InputLeftAddon
              content={[
                '$',
                '0.00',
                <Icon name="Person" key="icon-10" color="secondary" />
              ]}
            />
            <TextInput
              placeholder="Placeholder Input"
              id="input-1"
              noBorderLeft
            />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <InputLeftAddon content={['$', '0.00']} isMaterial />
            <TextInputMaterial placeholder="Placeholder Input" id="input-1" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('Right Addons', () => (
    <OuterWrapper>
      <SectionWrapper>
        {/* -------------------------------------------------------------------------------------- */}
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <TextInput
              placeholder="Placeholder Input"
              id="input-1"
              noBorderRight
            />
            <InputRightAddon
              content={[
                '$',
                '.00',
                <Icon name="Refresh" key="icon-11" />,
                <Button
                  key="bttn-12"
                  icon={{ icon: 'SimpleArrowDown', position: 'right' }}
                  bg="none"
                  variant="addon"
                >
                  Upload
                </Button>
              ]}
            />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
        {/* ---------------------------------------------------------------------------------------- */}
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <TextInputMaterial placeholder="Placeholder Input" id="input-1" />
            <InputRightAddon
              content={[
                <Icon name="Menu" key="icon-11" />,
                '$',
                '.00',
                <Button
                  key="bttn-12"
                  icon={{ icon: 'SimpleArrowDown', position: 'right' }}
                  bg="none"
                  variant="addon"
                >
                  Upload
                </Button>
              ]}
              isMaterial
            />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('Both Addons', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <InputLeftAddon content={['$']} />
            <TextInput
              placeholder="Enter Amount"
              id="input-1"
              noBorderRight
              noBorderLeft
            />
            <InputRightAddon content={['.00']} />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Email</InputLabel>
          <InputGroup>
            <InputLeftAddon content={[<Icon name="Mail" key="icon-11" />]} />
            <TextInput
              placeholder="..."
              id="input-1"
              noBorderRight
              noBorderLeft
            />
            <InputRightAddon content={['.com']} />
          </InputGroup>
          <InputHelpText>Enter Email Address</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <InputLeftAddon content={['$']} isMaterial />
            <TextInputMaterial placeholder="Placeholder Input" id="input-1" />
            <InputRightAddon content={['.00']} isMaterial />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ));
