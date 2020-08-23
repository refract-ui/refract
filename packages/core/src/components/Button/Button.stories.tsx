import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeColors } from '../../theme/themeColors';

import Button from './index';

const colors: Array<keyof ThemeColors> = [
  'primary',
  'secondary',
  'danger',
  'warning',
  'success'
];

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    margin-right: 1rem;
  }
`;

const SButton = styled(Button)`
  opacity: 0.7;
`;

storiesOf('Button', module)
  .add('test', () => (
    <>
      <Button>default</Button>

      <br />

      <Button color="dark">warning</Button>

      <br />

      <Button bg="crimson">extended</Button>

      <br />

      <Button mdOnly={{ bg: 'pink' }}>pink at md</Button>

      <br />

      <Button
        bg={props => props.theme.cyan200}
        _hover={{ bg: props => props.theme.blue }}
        mdOnly={{
          bg: props => props.theme.red900,
          _hover: {
            bg: props => props.theme.cyan300
          },
          _active: {
            bg: 'chartreuse'
          }
        }}
      >
        variant states
      </Button>

      <br />

      <SButton>translucent</SButton>
    </>
  ))
  .add('big', () => (
    <ButtonWrapper>
      {colors.map(color => (
        <Button color={color} key={color}>
          {color}
        </Button>
      ))}
    </ButtonWrapper>
  ));
