import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import TextInputMaterial from './index';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInputMaterialWrapper = styled.div`
  border: 1px solid rgba(243, 245, 250, 1);
  border-radius: 16px;
  box-shadow: 0 7px 11px 0 rgba(45, 45, 49, 0.1);
  display: flex;
  margin: 1rem;
  padding: 1rem;
`;

const STextInput = styled(TextInputMaterial)`
  opacity: 0.7;
`;

storiesOf('TextInputMaterial', module)
  .add('Blank Input', () => (
    <OuterWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial placeholder="Placeholder Input" />
      </TextInputMaterialWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial
          placeholder="Outline Placeholder"
          value="Pre-Filled In Text"
          onChange={console.log}
        />
      </TextInputMaterialWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial
          placeholder="Placeholder Input"
          value="Success State"
          onChange={console.log}
          success
        />
      </TextInputMaterialWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial
          placeholder="Placeholder Input"
          value="Error State"
          onChange={console.log}
          error
        />
      </TextInputMaterialWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial
          placeholder="Enter Text"
          onChange={console.log}
          type="text"
        />
      </TextInputMaterialWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial
          placeholder="Enter Password"
          onChange={console.log}
          type="password"
        />
      </TextInputMaterialWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial
          placeholder="Enter Email"
          onChange={console.log}
          type="email"
        />
      </TextInputMaterialWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial
          placeholder="Enter Phone"
          onChange={console.log}
          type="tel"
        />
      </TextInputMaterialWrapper>
    </OuterWrapper>
  ))
  .add('Controlled Input', () => {
    function Parent({ children }: any): any {
      const [state, setState] = useState({ value: '' });
      return <div>{children(state, setState)}</div>;
    }

    return (
      <Parent>
        {(state: any, setState: any) => (
          <OuterWrapper>
            <TextInputMaterialWrapper>
              <TextInputMaterial
                placeholder="OnChange Placeholder"
                onChange={e => setState({ value: e.currentTarget.value })}
                value={state.value}
              />
            </TextInputMaterialWrapper>
          </OuterWrapper>
        )}
      </Parent>
    );
  })
  .add('Disabled', () => (
    <OuterWrapper>
      <TextInputMaterialWrapper>
        <TextInputMaterial
          placeholder="Placeholder Input"
          disabled
          value="Disabled Input"
          onChange={console.log}
        />
      </TextInputMaterialWrapper>
    </OuterWrapper>
  ));
