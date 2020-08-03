import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Icons } from './index';

import Icon from '../index';

const icons: Array<keyof Icons> = ['add', 'back'];

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-top: 0;
  }
`;

storiesOf('Icon', module)
  .add('all icons', () => (
    <IconWrapper>
      {icons.map(icon => (
        <>
          <Icon name={icon} key={icon} />
          <p>{icon}</p>
        </>
      ))}
    </IconWrapper>
  ))
  .add('sizes', () => (
    <IconWrapper>
      <Icon name="add" />
      <p>20px</p>
      <Icon name="add" size="sm" />
      <p>14px</p>
      <Icon name="add" size={12} />
      <p>small</p>
      <Icon name="add" size={20} />
      <p>medium</p>
    </IconWrapper>
  ));
