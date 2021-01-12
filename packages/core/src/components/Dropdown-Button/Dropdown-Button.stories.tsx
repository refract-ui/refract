import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import DropdownButton from './index';
import DropdownMenu from '../Dropdown-Menu';

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

storiesOf('DropdownButton', module).add('Default', () => (
  <OuterWrapper>
    <ComponentWrapper>
      <DropdownMenu>
        <DropdownButton />
      </DropdownMenu>
    </ComponentWrapper>
  </OuterWrapper>
));
