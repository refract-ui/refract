import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import DropdownButton from '../Dropdown-Button';
import Dropdown, { PlacementTypes } from './index';
import DropdownList from '../Dropdown-List';
import DropdownItem from '../Dropdown-Item';
import Icon from '../Icon';
import DropdownDivider from '../Dropdown-Divider';
import DropdownGroup from '../Dropdown-Group';
import { range } from 'lodash';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComponentWrapper = styled.div`
  border: 1px solid rgba(243, 245, 250, 1);
  border-radius: 16px;
  box-shadow: 0 7px 11px 0 rgba(45, 45, 49, 0.1);
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
`;

const LargeWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 400px;
  justify-content: space-between;
  width: 100%;
`;

const Header = styled.h1`
  border-bottom: 1px solid #575c64;
  color: #575c64;
  font-family: 'Work Sans', sans serif;
  font-size: 3rem;
  font-weight: 300;
`;

const dropdownFn = (placement?: PlacementTypes) => (
  <Dropdown placement={placement}>
    <DropdownButton
      color="info"
      activeIcon={{ icon: 'SimpleArrowUp', position: 'right' }}
      closedIcon={{ icon: 'SimpleArrowDown', position: 'right' }}
    >
      {placement ? placement : 'Default'}
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
);

const lazyDropdownFn = (isDeferred: boolean, text: string) => (
  <Dropdown isDeferred={isDeferred}>
    <DropdownButton
      color="info"
      activeIcon={{ icon: 'SimpleArrowUp', position: 'right' }}
      closedIcon={{ icon: 'SimpleArrowDown', position: 'right' }}
    >
      {text ? text : ''}
    </DropdownButton>
    <DropdownList xs={{ maxH: '300px' }}>
      {range(30).map(i => (
        <DropdownItem key={i} onClick={() => alert('clicked')}>
          <Icon name="Table" />
          <span>{faker.lorem.words(2)}</span>
        </DropdownItem>
      ))}
    </DropdownList>
  </Dropdown>
);

storiesOf('Dropdown', module)
  .add('Default', () => (
    <OuterWrapper>
      <ComponentWrapper>
        <Dropdown closeOnSelect={false}>
          <DropdownButton
            color="secondary"
            closedIcon={{ icon: 'SimpleArrowDown', position: 'right' }}
            ariaControls="dropdown-1"
          >
            Open
          </DropdownButton>
          <DropdownList id="dropdown-1">
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
            closedIcon={{ icon: 'SimpleArrowDown', position: 'right' }}
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
            closedIcon={{ icon: 'SimpleArrowDown', position: 'right' }}
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
  .add('w/ Groups', () => (
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

      <ComponentWrapper>
        <Dropdown closeOnSelect>
          <DropdownButton
            color="secondary"
            closedIcon={{ icon: 'SimpleArrowDown', position: 'right' }}
          >
            Click Me
          </DropdownButton>
          <DropdownList xs={{ maxH: '360px' }}>
            <DropdownGroup title="Group One">
              <DropdownItem onClick={() => alert('clicked')}>
                <Icon name="Person" />
                <span>A First One</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert('clicked')}>
                <Icon name="Calendar" />
                <span>Boom Second</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert('clicked')}>
                <Icon name="Eye" />
                <span>Cool Third</span>
              </DropdownItem>
              <DropdownItem isSelected onClick={() => alert('clicked')}>
                <Icon name="Image" />
                <span>Delicate Fourth</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert('clicked')}>
                <Icon name="Image" />
                <span>Eager Five</span>
              </DropdownItem>
              <DropdownDivider />
              <DropdownGroup title="Group Two">
                <DropdownItem>Element of the second group</DropdownItem>
                <DropdownItem>A second group element, hover</DropdownItem>
                <DropdownItem>Beware of the second element</DropdownItem>
                <DropdownItem>Can be a third element</DropdownItem>
              </DropdownGroup>
              <DropdownDivider />
              <DropdownGroup title="Group Three">
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
              </DropdownGroup>
            </DropdownGroup>
          </DropdownList>
        </Dropdown>
      </ComponentWrapper>
    </OuterWrapper>
  ))
  .add('w/ Positioning', () => (
    <OuterWrapper>
      <ComponentWrapper>
        <Header>Default / Bottom-Start</Header>
        <LargeWrapper>
          {dropdownFn()}
          {dropdownFn()}
          {dropdownFn()}
        </LargeWrapper>
        <LargeWrapper>
          {dropdownFn()}
          {dropdownFn()}
          {dropdownFn()}
        </LargeWrapper>
        <LargeWrapper>
          {dropdownFn()}
          {dropdownFn()}
          {dropdownFn()}
        </LargeWrapper>
      </ComponentWrapper>
      <ComponentWrapper>
        <Header>Top-Start</Header>
        <LargeWrapper>
          {dropdownFn('top-start')}
          {dropdownFn('top-start')}
          {dropdownFn('top-start')}
        </LargeWrapper>
        <LargeWrapper>
          {dropdownFn('top-start')}
          {dropdownFn('top-start')}
          {dropdownFn('top-start')}
        </LargeWrapper>
        <LargeWrapper>
          {dropdownFn('top-start')}
          {dropdownFn('top-start')}
          {dropdownFn('top-start')}
        </LargeWrapper>
      </ComponentWrapper>
      <ComponentWrapper>
        <Header>Right</Header>
        <LargeWrapper>
          {dropdownFn('right')}
          {dropdownFn('right')}
          {dropdownFn('right')}
        </LargeWrapper>
        <LargeWrapper>
          {dropdownFn('right')}
          {dropdownFn('right')}
          {dropdownFn('right')}
        </LargeWrapper>
        <LargeWrapper>
          {dropdownFn('right')}
          {dropdownFn('right')}
          {dropdownFn('right')}
        </LargeWrapper>
      </ComponentWrapper>
      <ComponentWrapper>
        <Header>Left</Header>
        <LargeWrapper>
          {dropdownFn('left')}
          {dropdownFn('left')}
          {dropdownFn('left')}
        </LargeWrapper>
        <LargeWrapper>
          {dropdownFn('left')}
          {dropdownFn('left')}
          {dropdownFn('left')}
        </LargeWrapper>
        <LargeWrapper>
          {dropdownFn('left')}
          {dropdownFn('left')}
          {dropdownFn('left')}
        </LargeWrapper>
      </ComponentWrapper>
    </OuterWrapper>
  ))
  .add('Lazy Loading', () => (
    <OuterWrapper>
      <ComponentWrapper>{lazyDropdownFn(false, 'Normal')}</ComponentWrapper>
      <ComponentWrapper>{lazyDropdownFn(true, 'Deferred')}</ComponentWrapper>
    </OuterWrapper>
  ))
  .add('Render Prop', () => (
    <OuterWrapper>
      <ComponentWrapper>
        <Dropdown>
          {({ isOpen }) => {
            console.log('isOpen', isOpen);
            return (
              <>
                <DropdownButton
                  color="info"
                  activeIcon={{ icon: 'SimpleArrowUp', position: 'right' }}
                  closedIcon={{ icon: 'SimpleArrowDown', position: 'right' }}
                >
                  {isOpen ? 'Open' : `Closed`}
                </DropdownButton>
                <DropdownList>
                  <DropdownItem>
                    <span>Item One</span>
                  </DropdownItem>
                  <DropdownItem>
                    <span>{isOpen ? 'Open Dropdown' : 'Closed Dropdown'}</span>
                  </DropdownItem>
                </DropdownList>
              </>
            );
          }}
        </Dropdown>
      </ComponentWrapper>
    </OuterWrapper>
  ));
