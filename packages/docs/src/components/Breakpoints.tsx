import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Breakpoints } from '@refract-ui/core/src/theme/breakpoints';

const Box = styled.div`
  width: ${({ maxWidth }: any) => `${maxWidth}px`};
  max-width: 100%;
  min-width: 100px;
  background-color: ${({ theme }) => theme.themeColorShades.primary400};
  padding: 20px 0 20px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

function BreakpointComponent({ breakpoints }: any): React.FC<Breakpoints> {
  const [windowWidth, setWindowWidth] = useState(undefined);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sortedBreakPoints = Object.entries(breakpoints).sort(
    ([_, v], [_, bv]) => v - bv // eslint-disable-line
  );
  const currentBP = Object.entries(breakpoints)
    .sort(([_, v], [_, bv]) => bv - v) // eslint-disable-line
    .find(([_, v]) => windowWidth > v); // eslint-disable-line

  return (
    <>
      <p>Window Width: {windowWidth && `${windowWidth}px`}</p>
      <p>Current Breakpoint: {currentBP && `${currentBP[0]}`}</p>
      <Wrapper>
        {sortedBreakPoints.map(([k, v]) => (
          <Box key={k} maxWidth={v}>
            <span>
              {k} - {v}px
            </span>
          </Box>
        ))}
      </Wrapper>
    </>
  );
}

export default BreakpointComponent;
