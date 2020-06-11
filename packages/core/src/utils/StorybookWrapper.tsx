import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '..';
// alias above

const StoryWrapper = styled.div`
  padding: 1rem;
`;

type Props = {
  story: function;
};

function StorybookWrapper({ story }: Props): React.ReactNode {
  return (
    <ThemeProvider theme={theme}>
      <StoryWrapper>{story}</StoryWrapper>
    </ThemeProvider>
  );
}

export default StorybookWrapper;
