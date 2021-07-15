import React from 'react';
import { theme as genTheme } from '@refract-ui/core';

import styled, { css, ThemeProvider } from 'styled-components';
import Button from './../../../core/src/components/Button';

const ButtonWrapper = styled.div`
  display: flex;
`;

const Heading = styled.h1`
  ${({
    theme: {
      fontTagMappings: { h3 },
      blockElementMappings: { heading }
    }
  }) => css`
    font-size: ${h3.size};
    font-weight: ${h3.weight};
    letter-spacing: ${h3.letterSpacing};
    line-height: ${h3.lineHeight};
    margin-bottom: ${heading.mb};
    margin-top: ${heading.mt};
  `};
`;

const ModalWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0 7px 11px 0 rgba(45, 45, 49, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing[4]};
  width: 100%;
`;

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  ${({
    theme: {
      fontTagMappings: { default: paragraph }
    }
  }) => css`
    font-size: ${paragraph.size};
    line-height: ${paragraph.lineHeight};
  `}
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
`;

const StyledLabel = styled.label`
  ${({
    theme: {
      blockElementMappings: { label }
    }
  }) => css`
    margin-bottom: ${label.mb};
    margin-top: ${label.mt};
  `}
`;

const ModalScene = ({ primary: primaryColor }) => {
  const theme = genTheme({ themeColors: { primary: primaryColor } });
  console.log('In ModalScene.tsx, this is genTheme: ', theme);

  return (
    <ThemeProvider theme={theme}>
      <OuterContainer>
        <ModalWrapper>
          <Heading>Modal Title</Heading>
          <P>
            Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub
            roof party. Meggings cred before they sold out messenger bag, ugh
            fasion axe Pitchfork tousled freegan asymmetrical literally.
          </P>
          <StyledLabel htmlFor="example">Label</StyledLabel>
          <StyledInput id="example" />
          <ButtonWrapper>
            <Button>Cancel</Button>
            <Button>Submit</Button>
          </ButtonWrapper>
        </ModalWrapper>
      </OuterContainer>
    </ThemeProvider>
  );
};

export default ModalScene;
