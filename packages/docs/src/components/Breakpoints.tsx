import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Breakpoints } from '@refract-ui/core/src/theme/breakpoints';

interface BoxProps {
  maxWidth: number;
}

const Box = styled.div<BoxProps>`
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

interface BreakpointComponentProps {
  breakpoints: Breakpoints;
}

const BreakpointComponent: React.FC<BreakpointComponentProps> = ({
  breakpoints
}) => {
  const [windowWidth, setWindowWidth] = useState(undefined);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sortedBreakPoints = Object.entries(breakpoints).sort(
    ([k, v], [bk, bv]) => Number(v) - Number(bv) // eslint-disable-line
  );
  const currentBP = Object.entries(breakpoints)
    .sort(([k, v], [bk, bv]) => Number(bv) - Number(v)) // eslint-disable-line
    .find(([k, v]) => windowWidth > v); // eslint-disable-line

  return (
    <>
      <p>Window Width: {windowWidth && `${windowWidth}px`}</p>
      <p>Current Breakpoint: {currentBP && `${currentBP[0]}`}</p>
      <Wrapper>
        {sortedBreakPoints.map(([k, v]) => (
          <Box key={k} maxWidth={Number(v)}>
            <span>
              {k} - {v}px
            </span>
          </Box>
        ))}
      </Wrapper>
    </>
  );
};

export default BreakpointComponent;
