import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import InputWrapper from '../Input-Wrapper';
import InputGroup from '../Input-Group';
import TextInput from '../Text-Input';
import InputLabel from '../Input-Label';
import InputHelpText from '../Input-HelpText';
import TextInputMaterial from '../Text-Input-Material';
import InputValidationMessage from '../Input-ValidationMessage';
import InputAddon from '../Input-Addon';
import InputIcon from '../Input-Icon';
import Icon from '../Icons';
import Button from '../Button';
import TextCounter from './index';

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

storiesOf('TextCounter', module).add('Text Counter - Controlled', () => {
  function Parent({ children }: any): any {
    const [state, setState] = useState({ value: '' });
    return <div>{children(state, setState)}</div>;
  }

  return (
    <OuterWrapper>
      <Parent>
        {(state: any, setState: any) => (
          <SectionWrapper>
            <InputWrapper>
              <InputLabel htmlFor="input-1">Label</InputLabel>

              <InputGroup>
                <InputAddon xs={{ border: { borderWidth: '0' } }}>
                  <Icon name="Person" color="secondary" />
                </InputAddon>
                <TextInput
                  placeholder="Placeholder Input"
                  id="input-1"
                  onChange={e => setState({ value: e.currentTarget.value })}
                  value={state.value}
                  maxLength={8}
                />
                <InputAddon xs={{ border: { borderWidth: '0' } }}>
                  <Icon name="Person" color="secondary" />
                </InputAddon>
                <InputAddon xs={{ border: { borderWidth: '0' } }}>
                  <TextCounter
                    maxLength={8}
                    currentLength={state.value ? state.value.length : 0}
                  />
                </InputAddon>
              </InputGroup>

              <InputHelpText>Some Description</InputHelpText>
            </InputWrapper>
          </SectionWrapper>
        )}
      </Parent>
    </OuterWrapper>
  );
});
