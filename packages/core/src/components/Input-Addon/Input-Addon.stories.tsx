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
import InputAddon from './index';
import InputIcon from '../Input-Icon';
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

storiesOf('InputAddons', module).add('Input Addon New', () => (
  <OuterWrapper>
    <SectionWrapper>
      <InputWrapper>
        <InputLabel htmlFor="input-1">Label</InputLabel>
        <InputGroup>
          <InputAddon>
            <Icon name="Person" color="secondary" />
          </InputAddon>
          <InputAddon>
            <Icon name="Person" color="secondary" />
          </InputAddon>
          <TextInput
            placeholder="Placeholder Input"
            id="input-1"
            noBorderLeft
          />
          <InputAddon>
            <Button
              bg="blue"
              icon={{ icon: 'SimpleArrowDown', position: 'right' }}
              variant="addon"
            >
              Download
            </Button>
          </InputAddon>
          <InputAddon>
            <Icon name="Person" color="secondary" />
          </InputAddon>
        </InputGroup>
        <InputHelpText>Some Description</InputHelpText>
      </InputWrapper>
    </SectionWrapper>
  </OuterWrapper>
));