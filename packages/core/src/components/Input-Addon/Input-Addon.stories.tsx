import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import InputWrapper from '../Input-Wrapper';
import InputGroup from '../Input-Group';
import TextInput from '../Text-Input';
import InputLabel from '../Input-Label';
import InputHelpText from '../Input-HelpText';
import InputAddon from './index';
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

storiesOf('InputAddons', module)
  .add('Input Addons - Left Side', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <InputAddon>
              <Button
                bg="saddlebrown"
                icon={{ icon: 'SimpleArrowDown', position: 'right' }}
              >
                Download
              </Button>
            </InputAddon>
            <TextInput placeholder="Placeholder Input" id="input-1" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <InputAddon>
              <Icon name="Mail" color="secondary" />
            </InputAddon>
            <InputAddon xs={{ border: { borderWidth: '0' } }}>
              <Icon name="Person" color="secondary" />
            </InputAddon>
            <TextInput placeholder="Placeholder Input" id="input-1" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-3">Label</InputLabel>
          <InputGroup>
            <InputAddon>
              <Button
                bg="grey"
                icon={{ icon: 'SimpleArrowDown', position: 'right' }}
              >
                Help
              </Button>
              <Button
                bg="navajowhite"
                icon={{ icon: 'Menu', position: 'right' }}
              ></Button>
            </InputAddon>
            <TextInput placeholder="Placeholder Input" id="input-3" />
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('Input Addons - Right Side', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-1" />
            <InputAddon>
              <Button
                bg="saddlebrown"
                icon={{ icon: 'SimpleArrowDown', position: 'right' }}
              >
                Download
              </Button>
            </InputAddon>
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-1" />
            <InputAddon>
              <Icon name="Mail" color="secondary" />
            </InputAddon>
            <InputAddon xs={{ border: { borderWidth: '0' } }}>
              <Icon name="Person" color="secondary" />
            </InputAddon>
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-3">Label</InputLabel>
          <InputGroup>
            <TextInput placeholder="Placeholder Input" id="input-3" />
            <InputAddon>
              <Button
                bg="grey"
                icon={{ icon: 'SimpleArrowDown', position: 'right' }}
              >
                Help
              </Button>
              <Button
                bg="navajowhite"
                icon={{ icon: 'Menu', position: 'right' }}
              ></Button>
            </InputAddon>
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('Input Addons - Both Sides', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <InputAddon xs={{ border: { borderWidth: '0' } }}>
              <Icon name="Person" color="secondary" />
            </InputAddon>
            <InputAddon>
              <span>Addon Text</span>
            </InputAddon>
            <TextInput placeholder="Placeholder Input" id="input-1" />
            <InputAddon>
              <Button
                bg="deepskyblue"
                icon={{ icon: 'SimpleArrowDown', position: 'right' }}
              >
                Download
              </Button>
            </InputAddon>
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <InputAddon>
              <Icon name="Mail" color="secondary" />
            </InputAddon>
            <TextInput placeholder="Placeholder Input" id="input-1" />
            <InputAddon>
              <Button
                bg="blue"
                icon={{ icon: 'SimpleArrowDown', position: 'right' }}
              >
                Download
              </Button>
            </InputAddon>
            <InputAddon xs={{ border: { borderWidth: '0' } }}>
              <Icon name="Person" color="secondary" />
            </InputAddon>
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <InputGroup>
            <InputAddon>
              <Icon name="Mail" color="secondary" />
            </InputAddon>
            <TextInput placeholder="Placeholder Input" id="input-1" />
            <InputAddon>
              <Icon name="Person" color="secondary" />
            </InputAddon>
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-20">Label</InputLabel>
          <InputGroup>
            <InputAddon xs={{ border: { borderWidth: '0' } }}>
              <Icon name="Mail" color="secondary" />
            </InputAddon>
            <TextInput placeholder="Placeholder Input" id="input-20" />
            <InputAddon xs={{ border: { borderWidth: '0' } }}>
              <Icon name="Person" color="secondary" />
            </InputAddon>
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-21">Label</InputLabel>
          <InputGroup>
            <InputAddon xs={{ border: { borderWidth: '0' } }}>
              <Icon name="Mail" color="secondary" />
            </InputAddon>
            <TextInput placeholder="Placeholder Input" id="input-21" />
            <InputAddon xs={{ border: { borderWidth: '0' } }}>
              <Button
                bg="grey"
                icon={{ icon: 'SimpleArrowDown', position: 'right' }}
              >
                Download
              </Button>
            </InputAddon>
          </InputGroup>
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ));
