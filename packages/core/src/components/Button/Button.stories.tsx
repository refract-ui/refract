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
    margin-bottom: 1rem;
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
  .add('small', () => (
    <ButtonWrapper>
      {colors.map(color => (
        <Button color={color} key={color} size="sm">
          {color}
        </Button>
      ))}
    </ButtonWrapper>
  ))
  .add('overview md', () => (
    <>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color}>
            solid {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} variant="subtle">
            subtle {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} variant="outline">
            outline {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} icon="Close">
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} variant="subtle" icon="Close">
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} variant="outline" icon="Close">
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            key={color}
            icon={{ icon: 'SimpleArrowDown', position: 'right' }}
          >
            trailing icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            key={color}
            variant="subtle"
            icon={{ icon: 'SimpleArrowDown', position: 'right' }}
          >
            trailing icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            key={color}
            variant="outline"
            icon={{ icon: 'SimpleArrowDown', position: 'right' }}
          >
            trailing icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} icon="Danger" />
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} variant="subtle" icon="Danger" />
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} variant="outline" icon="Danger" />
        ))}
      </ButtonWrapper>
    </>
  ))
  .add('overview sm', () => (
    <>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} size="sm">
            solid {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} variant="subtle" size="sm">
            subtle {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} variant="outline" size="sm">
            outline {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} icon="Close" size="sm">
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            key={color}
            variant="subtle"
            icon="Close"
            size="sm"
          >
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            key={color}
            variant="outline"
            icon="Close"
            size="sm"
          >
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            key={color}
            icon={{ icon: 'SimpleArrowDown', position: 'right' }}
            size="sm"
          >
            trailing icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            key={color}
            variant="subtle"
            icon={{ icon: 'SimpleArrowDown', position: 'right' }}
            size="sm"
          >
            trailing icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            key={color}
            variant="outline"
            icon={{ icon: 'SimpleArrowDown', position: 'right' }}
            size="sm"
          >
            trailing icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} icon="Danger" size="sm" />
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            key={color}
            variant="subtle"
            icon="Danger"
            size="sm"
          />
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            key={color}
            variant="outline"
            icon="Danger"
            size="sm"
          />
        ))}
      </ButtonWrapper>
    </>
  ));
