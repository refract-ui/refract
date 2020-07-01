import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Button from './Button';

const ButtonWrapper = styled.div`
  display: flex;
  button {
    margin: 1rem;
  }
`;

const colors = ['primary', 'secondary', 'danger'];

storiesOf('Button', module)
  .add('test', () => (
    <ButtonWrapper>
      {colors.map(color => (
        <Button
          key={color}
          color={color}
          size="md"
          variant="default"
          onClick={action('clicked!')}
        >
          test
        </Button>
      ))}
    </ButtonWrapper>
  ))
  .add('sm', () => (
    <ButtonWrapper>
      {colors.map(color => (
        <Button
          key={color}
          color={color}
          size="sm"
          variant="default"
          onClick={action('clicked!')}
        >
          test
        </Button>
      ))}
    </ButtonWrapper>
  ));
