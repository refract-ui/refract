import React from 'react';
import styled, { css } from 'styled-components';
import map from 'lodash/map';
import { Borders, applyBorderStyle } from '@refract-ui/core/src/theme/borders';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.themeColorShades.primary400};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BorderComponent: React.FC<Borders> = ({ borders }) => (
  <Wrapper>
    {map(borders, (v, k) => {
      return (
        <Box key={k} style={{ ...v }}>
          <span>{k}</span>
        </Box>
      );
    })}
  </Wrapper>
);

export default BorderComponent;
