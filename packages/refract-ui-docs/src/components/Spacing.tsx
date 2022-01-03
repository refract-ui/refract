import React from 'react';
import styled, { css } from 'styled-components';
import map from 'lodash/map';

const Spacer = styled.div`
  height: 14px;
  width: ${({ width }) => width};
  ${({ theme: { themeColorShades } }) => css`
    background-color: ${themeColorShades.primary400};
  `}
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const THead = styled.thead`
  ${({ theme: { colorShades } }) => css`
    background-color: ${colorShades.gray400};
    border-bottom: 1px solid ${colorShades.gray600};
  `}
`;

const TD = styled.td`
  padding: 0.25rem;
  ${({ theme: { colorShades } }) => css`
    border-bottom: 1px solid ${colorShades.gray600};
  `}
`;

const TH = styled.th`
  padding: 0.25rem;
  text-align: left;
  ${({ theme: { colorShades } }) => css`
    border-bottom: 1px solid ${colorShades.gray600};
  `}
`;

const TR = styled.tr``;

function convertRemToPx(rem: string): string {
  if (typeof rem === 'string' && rem.includes('rem')) {
    const val = rem.replace('rem', '');
    return `${val * 16}px`;
  }
  return rem;
}

export interface SpacingProps {
  spacing: {
    [k: number]: string;
  };
  color: string;
}

const SpacingComponent: React.FC<SpacingProps> = ({ spacing }) => (
  <Table>
    <THead>
      <TR>
        <TH>Key</TH>
        <TH>Space</TH>
        <TH>Pixels</TH>
        <TH></TH>
      </TR>
    </THead>
    <tbody>
      {map(spacing, (v: string, k: number) => (
        <TR key={k} width={v}>
          <TD>{k}</TD>
          <TD>{v}</TD>
          <TD>{convertRemToPx(v)}</TD>
          <TD>
            <Spacer width={v} />
          </TD>
        </TR>
      ))}
    </tbody>
  </Table>
);

export default SpacingComponent;
