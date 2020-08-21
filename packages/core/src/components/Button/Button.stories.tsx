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
  margin-bottom: 1rem;
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

      <Button backgroundColor="crimson">extended</Button>

      <br />

      <Button mdOnly={{ backgroundColor: 'pink' }}>pink at md</Button>

      <br />

      <Button
        backgroundColor={props => props.theme.cyan200}
        _hover={{ backgroundColor: props => props.theme.blue }}
        mdOnly={{
          backgroundColor: props => props.theme.red900,
          _hover: {
            backgroundColor: props => props.theme.cyan300
          },
          _active: {
            backgroundColor: 'chartreuse'
          }
        }}
      >
        variant states
      </Button>

      <br />

      <SButton>translucent</SButton>
    </>
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
          <Button color={color} key={color} iconLeft="Close">
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} variant="subtle" iconLeft="Close">
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} variant="outline" iconLeft="Close">
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color} iconRight="SimpleArrowDown">
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
            iconRight="SimpleArrowDown"
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
            iconRight="SimpleArrowDown"
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
          <Button color={color} size="sm" key={color}>
            solid {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} size="sm" key={color} variant="subtle">
            subtle {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} size="sm" key={color} variant="outline">
            outline {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} size="sm" key={color} iconLeft="Close">
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            size="sm"
            key={color}
            variant="subtle"
            iconLeft="Close"
          >
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            size="sm"
            key={color}
            variant="outline"
            iconLeft="Close"
          >
            leading icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            size="sm"
            key={color}
            iconRight="SimpleArrowDown"
          >
            trailing icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            size="sm"
            key={color}
            variant="subtle"
            iconRight="SimpleArrowDown"
          >
            trailing icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            size="sm"
            key={color}
            variant="outline"
            iconRight="SimpleArrowDown"
          >
            trailing icon {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} size="sm" key={color} icon="Danger" />
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            size="sm"
            key={color}
            variant="subtle"
            icon="Danger"
          />
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button
            color={color}
            size="sm"
            key={color}
            variant="outline"
            icon="Danger"
          />
        ))}
      </ButtonWrapper>
    </>
  ))
  .add('big & small', () => (
    <>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={color}>
            {color}
          </Button>
        ))}
      </ButtonWrapper>
      <ButtonWrapper>
        {colors.map(color => (
          <Button color={color} key={`${color}-sm`} size="sm">
            {color}
          </Button>
        ))}
      </ButtonWrapper>
    </>
  ))
  .add('icons', () => (
    <ButtonWrapper>
      <Button color="primary" iconLeft="Calendar" variant="outline">
        With Icon
      </Button>
      <Button color="primary" iconLeft="Calendar" />
      <Button color="primary" iconLeft="Calendar" variant="outline" />
      <Button color="warning" iconLeft="DotsVertical" variant="outline">
        With Icon
      </Button>
      <Button backgroundColor="crimson" iconLeft="Add" variant="outline">
        With Icon
      </Button>
    </ButtonWrapper>
  ));
