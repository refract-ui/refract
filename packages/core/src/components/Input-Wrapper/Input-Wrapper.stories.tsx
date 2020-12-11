import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import InputWrapper from './index';
import TextInput from './../Text-Input';
import InputLabel from './../Input-Label';
import InputHelpText from './../Input-HelpText';
import TextInputMaterial from './../Text-Input-Material';
import InputValidationMessage from './../Input-ValidationMessage';
import InputGroup from './../Input-Group';
import Button from './../Button';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OuterWrapperCentered = styled(OuterWrapper)`
  justify-content: center;
  height: 100vh;
`;

const SectionWrapper = styled.div`
  border: 1px solid rgba(243, 245, 250, 1);
  border-radius: 16px;
  box-shadow: 0 7px 11px 0 rgba(45, 45, 49, 0.1);
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  padding: 1rem;
`;

const LoginWrapper = styled(SectionWrapper)`
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const HalfWidthDiv = styled.div`
  width: calc(50% - 8px);

  &:first-child {
    margin-right: 1rem;
  }
`;

const FullWidthDiv = styled.div`
  width: 100%;
`;

storiesOf('InputWrapper', module)
  .add('Input Wrapper - Md Inputs', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-1">Label</InputLabel>
          <TextInput placeholder="Placeholder Input" id="input-1" type="text" />
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-2">Label</InputLabel>
          <TextInput placeholder="Placeholder Input" id="input-2" size="sm" />
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-3">Label</InputLabel>
          <TextInput placeholder="Placeholder Input" id="input-3" />
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-4">Label</InputLabel>
          <TextInputMaterial placeholder="Placeholder Input" id="input-4" />
          <InputHelpText>Some Description</InputHelpText>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-4a">Label</InputLabel>
          <TextInputMaterial
            placeholder="Placeholder Input"
            id="input-4a"
            error
          />
          <InputHelpText>Some Description</InputHelpText>
          <InputValidationMessage error>
            Error Description
          </InputValidationMessage>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-4b">Label</InputLabel>
          <TextInputMaterial
            placeholder="Placeholder Input"
            id="input-4b"
            success
          />
          <InputHelpText>Some Description</InputHelpText>
          <InputValidationMessage success>
            Error Description
          </InputValidationMessage>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-5">Label</InputLabel>
          <TextInput placeholder="Placeholder Error Input" id="input-5" error />
          <InputHelpText>Some Description</InputHelpText>
          <InputValidationMessage error>
            Error Description
          </InputValidationMessage>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-6">Label</InputLabel>
          <TextInput
            placeholder="Placeholder Success Input"
            id="input-6"
            success
          />
          <InputHelpText>Some Description</InputHelpText>
          <InputValidationMessage success>
            Success Description
          </InputValidationMessage>
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-7">Label</InputLabel>
          <TextInput
            placeholder="Placeholder Empty Validation"
            id="input-7"
            success
          />
          <InputHelpText>Some Description</InputHelpText>
          <InputValidationMessage success></InputValidationMessage>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('Horizontal Inputs', () => (
    <OuterWrapper>
      <SectionWrapper>
        <InputWrapper horizontal>
          <InputLabel htmlFor="input-10">Horizontal Input</InputLabel>
          <TextInput placeholder="Input Text" id="input-10" />
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper horizontal>
          <InputLabel htmlFor="input-12">Horizontal Input</InputLabel>
          <TextInput placeholder="Input Text" id="input-12" filled />
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper horizontal>
          <InputLabel htmlFor="input-11">Horizontal Input</InputLabel>
          <TextInputMaterial placeholder="Input Text" id="input-11" />
        </InputWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <InputWrapper horizontal>
          <InputLabel htmlFor="input-12">Horizontal Input</InputLabel>
          <InputGroup>
            <TextInput placeholder="Input Text" id="input-12" />
          </InputGroup>
        </InputWrapper>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('Login', () => (
    <OuterWrapperCentered>
      <LoginWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-13">User Name</InputLabel>
          <TextInput placeholder="Username" id="input-13" type="text" />
        </InputWrapper>

        <InputWrapper>
          <InputLabel htmlFor="input-14">Password</InputLabel>
          <TextInput placeholder="Password" id="input-14" type="password" />
        </InputWrapper>

        <Button>Login</Button>
      </LoginWrapper>
    </OuterWrapperCentered>
  ))
  .add('Login - Filled', () => (
    <OuterWrapperCentered>
      <LoginWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-100">User Name</InputLabel>
          <TextInput placeholder="Username" id="input-13" type="text" filled />
        </InputWrapper>

        <InputWrapper>
          <InputLabel htmlFor="input-101">Password</InputLabel>
          <TextInput
            placeholder="Password"
            id="input-101"
            type="password"
            filled
          />
        </InputWrapper>

        <Button>Login</Button>
      </LoginWrapper>
    </OuterWrapperCentered>
  ))
  .add('Login - Material', () => (
    <OuterWrapperCentered>
      <LoginWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-15">User Name</InputLabel>
          <TextInputMaterial placeholder="Username" id="input-15" type="text" />
        </InputWrapper>

        <InputWrapper>
          <InputLabel htmlFor="input-16">Password</InputLabel>
          <TextInputMaterial
            placeholder="Password"
            id="input-16"
            type="password"
          />
        </InputWrapper>

        <Button color="success">Login</Button>
      </LoginWrapper>
    </OuterWrapperCentered>
  ))
  .add('Login w/ Icons', () => (
    <OuterWrapperCentered>
      <LoginWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-17">User Name</InputLabel>
          <InputGroup>
            <TextInput
              placeholder="Username"
              id="input-17"
              type="text"
              icons={[{ icon: 'Person', position: 'left' }]}
            />
          </InputGroup>
        </InputWrapper>

        <InputWrapper>
          <InputLabel htmlFor="input-18">Password</InputLabel>
          <InputGroup>
            <TextInput
              placeholder="Password"
              id="input-18"
              type="password"
              icons={[{ icon: 'DotsHorizontal', position: 'left' }]}
            />
          </InputGroup>
        </InputWrapper>

        <Button color="info">Login</Button>
      </LoginWrapper>
    </OuterWrapperCentered>
  ))
  .add('Login w/ Icons - Material', () => (
    <OuterWrapperCentered>
      <LoginWrapper>
        <InputWrapper>
          <InputLabel htmlFor="input-15">User Name</InputLabel>
          <InputGroup>
            <TextInputMaterial
              placeholder="Username"
              id="input-15"
              type="text"
              icons={[{ icon: 'Person', position: 'left' }]}
            />
          </InputGroup>
        </InputWrapper>

        <InputWrapper>
          <InputLabel htmlFor="input-16">Password</InputLabel>
          <InputGroup>
            <TextInputMaterial
              placeholder="Password"
              id="input-16"
              type="password"
              icons={[{ icon: 'DotsHorizontal', position: 'left' }]}
            />
          </InputGroup>
        </InputWrapper>

        <Button color="warning">Login</Button>
      </LoginWrapper>
    </OuterWrapperCentered>
  ))
  .add('Form Ex', () => (
    <OuterWrapper>
      <SectionWrapper>
        <HalfWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-firstname">First Name</InputLabel>
            <TextInput
              placeholder=""
              id="input-firstname"
              type="text"
              isFullWidth
            />
          </InputWrapper>
        </HalfWidthDiv>

        <HalfWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-lastname">Last Name</InputLabel>
            <TextInput
              placeholder=""
              id="input-lastname"
              type="text"
              isFullWidth
            />
          </InputWrapper>
        </HalfWidthDiv>

        <FullWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-email">Email</InputLabel>
            <TextInput
              placeholder=""
              id="input-email"
              type="email"
              isFullWidth
            />
          </InputWrapper>
        </FullWidthDiv>

        <FullWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-reason">Reason For Contact</InputLabel>
            <TextInput
              placeholder=""
              id="input-reason"
              type="text"
              isFullWidth
            />
          </InputWrapper>
        </FullWidthDiv>

        <Button color="success" icon={{ icon: 'Forward', position: 'right' }}>
          Submit
        </Button>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('Form Ex - Material', () => (
    <OuterWrapper>
      <SectionWrapper>
        <HalfWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-firstname">First Name</InputLabel>
            <TextInputMaterial
              placeholder=""
              id="input-firstname"
              type="text"
              isFullWidth
            />
          </InputWrapper>
        </HalfWidthDiv>

        <HalfWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-lastname">Last Name</InputLabel>
            <TextInputMaterial
              placeholder=""
              id="input-lastname"
              type="text"
              isFullWidth
            />
          </InputWrapper>
        </HalfWidthDiv>

        <FullWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-email">Email</InputLabel>
            <TextInputMaterial
              placeholder=""
              id="input-email"
              type="email"
              isFullWidth
            />
          </InputWrapper>
        </FullWidthDiv>

        <FullWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-reason">Reason For Contact</InputLabel>
            <TextInputMaterial
              placeholder=""
              id="input-reason"
              type="text"
              isFullWidth
            />
          </InputWrapper>
        </FullWidthDiv>

        <Button color="success" icon={{ icon: 'Forward', position: 'right' }}>
          Submit
        </Button>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('Form Ex w/ Icons', () => (
    <OuterWrapper>
      <SectionWrapper>
        <HalfWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-firstname">First Name</InputLabel>
            <InputGroup>
              <TextInput
                placeholder=""
                id="input-firstname"
                type="text"
                icons={[{ icon: 'Person', position: 'left' }]}
                isFullWidth
              />
            </InputGroup>
          </InputWrapper>
        </HalfWidthDiv>

        <HalfWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-lastname">Last Name</InputLabel>
            <InputGroup>
              <TextInput
                placeholder=""
                id="input-lastname"
                type="text"
                icons={[{ icon: 'Person', position: 'left' }]}
                isFullWidth
              />
            </InputGroup>
          </InputWrapper>
        </HalfWidthDiv>

        <FullWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-email">Email</InputLabel>
            <InputGroup>
              <TextInput
                placeholder=""
                id="input-email"
                type="email"
                icons={[{ icon: 'Mail', position: 'left' }]}
                isFullWidth
              />
            </InputGroup>
          </InputWrapper>
        </FullWidthDiv>

        <FullWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-reason">Reason For Contact</InputLabel>
            <InputGroup>
              <TextInput
                placeholder=""
                id="input-reason"
                type="text"
                icons={[{ icon: 'Expand', position: 'left' }]}
                isFullWidth
              />
            </InputGroup>
          </InputWrapper>
        </FullWidthDiv>

        <Button color="success" icon={{ icon: 'Forward', position: 'right' }}>
          Submit
        </Button>
      </SectionWrapper>
    </OuterWrapper>
  ))
  .add('Form Ex w/ Icons - Material', () => (
    <OuterWrapper>
      <SectionWrapper>
        <HalfWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-firstname">First Name</InputLabel>
            <InputGroup>
              <TextInputMaterial
                placeholder=""
                id="input-firstname"
                type="text"
                icons={[{ icon: 'Person', position: 'left' }]}
                isFullWidth
              />
            </InputGroup>
          </InputWrapper>
        </HalfWidthDiv>

        <HalfWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-lastname">Last Name</InputLabel>
            <InputGroup>
              <TextInputMaterial
                placeholder=""
                id="input-lastname"
                type="text"
                icons={[{ icon: 'Person', position: 'left' }]}
                isFullWidth
              />
            </InputGroup>
          </InputWrapper>
        </HalfWidthDiv>

        <FullWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-email">Email</InputLabel>
            <InputGroup>
              <TextInputMaterial
                placeholder=""
                id="input-email"
                type="email"
                icons={[{ icon: 'Mail', position: 'left' }]}
                isFullWidth
              />
            </InputGroup>
          </InputWrapper>
        </FullWidthDiv>

        <FullWidthDiv>
          <InputWrapper>
            <InputLabel htmlFor="input-reason">Reason For Contact</InputLabel>
            <InputGroup>
              <TextInputMaterial
                placeholder=""
                id="input-reason"
                type="text"
                icons={[{ icon: 'Expand', position: 'left' }]}
                isFullWidth
              />
            </InputGroup>
          </InputWrapper>
        </FullWidthDiv>

        <Button color="success" icon={{ icon: 'Forward', position: 'right' }}>
          Submit
        </Button>
      </SectionWrapper>
    </OuterWrapper>
  ))
