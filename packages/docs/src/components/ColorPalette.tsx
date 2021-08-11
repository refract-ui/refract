import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';

const ColorGrid = styled.div`
  margin: 1rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, 120px);
`;

const ColorGridItem = styled.div`
  height: 120px;
  background-color: ${({ color }) => color};
  color: ${({ color, theme }) => theme.contrastColor({ color })};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 1px 6px -2px rgba(0, 0, 0, 0.5);
`;

export interface ColorPaletteProps {
  colors: {
    [k: string]: string;
  };
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => (
  <ColorGrid>
    {map(colors, (v: string, k: string) => (
      <ColorGridItem key={k} color={v}>
        {k}
      </ColorGridItem>
    ))}
  </ColorGrid>
);

export default ColorPalette;
