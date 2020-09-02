import React from 'react';
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

storiesOf('TextInputMaterial', module).add('Blank Input', () => (
  <OuterWrapper>
    <TextInputMaterialWrapper>
      <TextInputMaterial placeholder="Placeholder Input" />
    </TextInputMaterialWrapper>
    <TextInputMaterialWrapper>
      <TextInputMaterial
        placeholder="Outline Placeholder"
        value="Pre-Filled In Text"
      />
    </TextInputMaterialWrapper>
    <TextInputMaterialWrapper>
      <TextInputMaterial
        placeholder="Placeholder Input"
        value="Success State"
        success
      />
    </TextInputMaterialWrapper>
    <TextInputMaterialWrapper>
      <TextInputMaterial
        placeholder="Placeholder Input"
        value="Error State"
        error
      />
    </TextInputMaterialWrapper>
  </OuterWrapper>
));
