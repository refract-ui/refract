import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './../../../core/src/components/Button';

const ButtonWrapper = styled.div`
  display: flex;
`;

const ModalWrapper = styled.div`
  border: 1px dotted red;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
`;

const ModalScene = ({ theme }) => {
  console.log('In ModalScene.tsx, this is theme: ', theme);

  return (
    <ThemeProvider theme={theme}>
      <ModalWrapper>
        <StyledInput />
        <ButtonWrapper>
          <Button>Cancel</Button>
          <Button>Submit</Button>
        </ButtonWrapper>
      </ModalWrapper>
    </ThemeProvider>
  );
};

export default ModalScene;
