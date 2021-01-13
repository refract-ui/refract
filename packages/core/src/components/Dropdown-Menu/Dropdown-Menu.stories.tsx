import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import DropdownButton from '../Dropdown-Button';
import DropdownMenu from './index';
import DropdownList from '../Dropdown-List';
import DropdownItem from '../Dropdown-Item';

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

storiesOf('DropdownMenu', module).add('Default', () => (
  <OuterWrapper>
    <ComponentWrapper>
      <DropdownMenu>
        <DropdownButton
          color="secondary"
          icon={{ icon: 'SimpleArrowDown', position: 'right' }}
        >
          Open
        </DropdownButton>
        <DropdownList />
      </DropdownMenu>
    </ComponentWrapper>
    <ComponentWrapper>
      <DropdownMenu>
        <DropdownButton color="dark">Items</DropdownButton>
        <DropdownList />
      </DropdownMenu>
    </ComponentWrapper>
    <ComponentWrapper>
      <DropdownMenu>
        <DropdownButton>Entries</DropdownButton>
        <DropdownList />
      </DropdownMenu>
    </ComponentWrapper>
  </OuterWrapper>
));
