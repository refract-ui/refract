import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import DropdownButton from '../Dropdown-Button';
import Dropdown from './index';
import DropdownList from '../Dropdown-List';
import DropdownItem from '../Dropdown-Item';
import Icon from '../Icon';
import DropdownDivider from '../Dropdown-Divider';
import DropdownGroup from '../Dropdown-Group';

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

storiesOf('Dropdown', module)
  .add('Default', () => (
    <OuterWrapper>
      <ComponentWrapper>
        <Dropdown>
          <DropdownButton
            color="secondary"
            icon={{ icon: 'SimpleArrowDown', position: 'right' }}
          >
            Open
          </DropdownButton>
          <DropdownList>
            <DropdownItem onClick={() => alert('clicked')}>
              A First One
            </DropdownItem>
            <DropdownItem>Boom Second</DropdownItem>
            <DropdownItem>Cool Third</DropdownItem>
            <DropdownItem isSelected>Delicate Fourth</DropdownItem>
            <DropdownItem>Eager Five</DropdownItem>
          </DropdownList>
        </Dropdown>
      </ComponentWrapper>
      <ComponentWrapper>
        <Dropdown>
          <DropdownButton
            color="secondary"
            icon={{ icon: 'SimpleArrowDown', position: 'right' }}
          >
            Open
          </DropdownButton>
          <DropdownList>
            <DropdownItem>
              <Icon name="Person" />
              <span>A First One</span>
            </DropdownItem>
            <DropdownItem>
              <Icon name="Calendar" />
              <span>Boom Second</span>
            </DropdownItem>
            <DropdownItem>
              <Icon name="Eye" />
              <span>Cool Third</span>
            </DropdownItem>
            <DropdownItem isSelected>
              <Icon name="Image" />
              <span>Delicate Fourth</span>
            </DropdownItem>
            <DropdownItem>
              <Icon name="Image" />
              <span>Eager Five</span>
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </ComponentWrapper>
      <ComponentWrapper>
        <Dropdown>
          <DropdownButton
            color="secondary"
            icon={{ icon: 'SimpleArrowDown', position: 'right' }}
          >
            Open
          </DropdownButton>
          <DropdownList>
            <DropdownItem>
              <span>A First One</span>
              <Icon name="Person" />
            </DropdownItem>
            <DropdownItem>
              <span>Boom Second</span>
              <Icon name="Calendar" />
            </DropdownItem>
            <DropdownItem>
              <span>Cool Third</span>
              <Icon name="Eye" />
            </DropdownItem>
            <DropdownItem isSelected>
              <span>Delicate Fourth</span>
              <Icon name="Image" />
            </DropdownItem>
            <DropdownItem>
              <span>Eager Five</span>
              <Icon name="Image" />
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </ComponentWrapper>
      <ComponentWrapper>
        <Dropdown>
          <DropdownButton color="dark">Items</DropdownButton>
          <DropdownList>
            <DropdownItem>
              <Icon name="Person" />
              <span>A First One</span>
            </DropdownItem>
            <DropdownItem>
              <Icon name="Calendar" />
              <span>Boom Second</span>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem>
              <Icon name="Eye" />
              <span>Cool Third</span>
            </DropdownItem>
            <DropdownItem>
              <Icon name="Image" />
              <span>Delicate Fourth</span>
            </DropdownItem>
            <DropdownItem>
              <Icon name="Image" />
              <span>Eager Five</span>
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </ComponentWrapper>
      <ComponentWrapper>
        <Dropdown>
          <DropdownButton>Entries</DropdownButton>
          <DropdownList>
            <DropdownItem>
              <span>A First One</span>
              <Icon name="Person" />
            </DropdownItem>
            <DropdownItem>
              <span>Boom Second</span>
              <Icon name="Calendar" />
            </DropdownItem>
            <DropdownItem>
              <span>Cool Third</span>
              <Icon name="Eye" />
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem>
              <span>Delicate Fourth</span>
              <Icon name="Image" />
            </DropdownItem>
            <DropdownItem>
              <span>Eager Five</span>
              <Icon name="Image" />
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </ComponentWrapper>
    </OuterWrapper>
  ))
  .add('Dropdown w/ Groups', () => (
    <OuterWrapper>
      <ComponentWrapper>
        <Dropdown>
          <DropdownButton>Groups</DropdownButton>
          <DropdownList xs={{ maxH: '360px' }}>
            <DropdownGroup title="Group One">
              <DropdownItem>A first group element, hover</DropdownItem>
              <DropdownItem>Beware of the second element</DropdownItem>
              <DropdownItem>Can be a third element</DropdownItem>
              <DropdownItem isSelected>
                Delicate fourth element, active
              </DropdownItem>
              <DropdownItem>Eager fifth element</DropdownItem>
              <DropdownDivider />
              <DropdownGroup title="Group Two">
                <DropdownItem>Element of the second group</DropdownItem>
                <DropdownItem>A second group element, hover</DropdownItem>
                <DropdownItem>Beware of the second element</DropdownItem>
                <DropdownItem>Can be a third element</DropdownItem>
              </DropdownGroup>
            </DropdownGroup>
          </DropdownList>
        </Dropdown>
      </ComponentWrapper>
    </OuterWrapper>
  ));
