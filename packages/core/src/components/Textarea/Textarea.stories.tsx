import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Textarea from './index';
import InputWrapper from '../Input-Wrapper';
import InputGroup from '../Input-Group';
import InputLabel from '../Input-Label';
import InputHelpText from '../Input-HelpText';
import InputAddon from '../Input-Addon';
import Icon from '../Icons';
import Button from '../Button';
import InputValidationMessage from './../Input-ValidationMessage';
import TextCounter from '../Text-Counter';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComponentWrapper = styled.div`
  border: 1px solid rgba(243, 245, 250, 1);
  border-radius: 16px;
  box-shadow: 0 7px 11px 0 rgba(45, 45, 49, 0.1);
  display: flex;
  margin: 1rem;
  padding: 1rem;
`;

storiesOf('Textarea', module)
  .add('Textarea', () => (
    <OuterWrapper>
      <ComponentWrapper>
        <Textarea />
      </ComponentWrapper>
      <ComponentWrapper>
        <Textarea filled />
      </ComponentWrapper>
      <ComponentWrapper>
        <Textarea isFullWidth />
      </ComponentWrapper>
      <ComponentWrapper>
        <Textarea filled isFullWidth />
      </ComponentWrapper>
    </OuterWrapper>
  ))
  .add('Textarea - In Wrapper', () => (
    <OuterWrapper>
      <ComponentWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <Textarea id="input-1" placeholder="Enter Text Here" />
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </ComponentWrapper>
      <ComponentWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-2">Label</InputLabel>
          <Textarea id="input-2" placeholder="Enter Text Here" filled />
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </ComponentWrapper>
      <ComponentWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-3">Label</InputLabel>
          <Textarea id="input-3" placeholder="Enter Text Here" success />
          <InputHelpText>Some Description</InputHelpText>
          <InputValidationMessage success>Success</InputValidationMessage>
        </InputWrapper>
      </ComponentWrapper>
      <ComponentWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-3">Label</InputLabel>
          <Textarea id="input-3" placeholder="Enter Text Here" error />
          <InputHelpText>Some Description</InputHelpText>
          <InputValidationMessage error>Error</InputValidationMessage>
        </InputWrapper>
      </ComponentWrapper>
    </OuterWrapper>
  ))
  .add('Textarea - w/ Addons', () => (
    <OuterWrapper>
      <ComponentWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <InputAddon>
              <Icon name="Menu" />
            </InputAddon>
            <Textarea id="input-1" placeholder="Enter Text Here" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </ComponentWrapper>
      <ComponentWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-2">Label</InputLabel>
          <InputGroup>
            <Textarea id="input-2" placeholder="Enter Text Here" />
            <InputAddon>
              <Icon name="Person" />
            </InputAddon>
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </ComponentWrapper>
      <ComponentWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-3">Label</InputLabel>
          <InputGroup>
            <InputAddon>
              <Button bg="grey" icon={{ icon: 'Menu', position: 'right' }}>
                Select
              </Button>
            </InputAddon>
            <Textarea id="input-3" placeholder="Enter Text Here" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </ComponentWrapper>
      <ComponentWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-4">Label</InputLabel>
          <InputGroup>
            <InputAddon>
              <Icon name="Website" />
            </InputAddon>
            <Textarea id="input-4" placeholder="Enter Text Here" />
            <InputAddon>
              <Button bg="#bada55" icon={{ icon: 'Mail', position: 'right' }}>
                Send
              </Button>
            </InputAddon>
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </ComponentWrapper>
    </OuterWrapper>
  ))
  .add('Textarea - w/ Counter', () => {
    function Parent({ children }: any): any {
      const [state, setState] = useState({ value: '' });
      return <div>{children(state, setState)}</div>;
    }

    return (
      <OuterWrapper>
        <Parent>
          {(state: any, setState: any) => (
            <ComponentWrapper>
              <InputGroup>
                <Textarea
                  onChange={e => setState({ value: e.currentTarget.value })}
                  value={state.value}
                  maxLength={8}
                />
                <InputAddon>
                  <TextCounter
                    currentLength={state.value ? state.value.length : 0}
                    maxLength={8}
                  />
                </InputAddon>
              </InputGroup>
            </ComponentWrapper>
          )}
        </Parent>
      </OuterWrapper>
    );
  });
