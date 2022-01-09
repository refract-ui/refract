import React from 'react';
import type { FlowElement, ElementId, Edge } from 'react-flow-renderer';
import { linkTo } from '@storybook/addon-links';
import styled, { css } from 'styled-components';

import { elements } from './ThemeDiagram';

const BreadCrumbNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const UnorderedList = styled.ul<{ next?: boolean }>`
  margin: 0;
  padding: 0;
  list-style: none;
  ${({ next }: any) =>
    next &&
    css`
      text-align: right;
    `}
`;

const CurrentToken = styled.span`
  text-align: center;
`;

const LinkButton = styled.button`
  border: none;
  background: transparent;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

interface BreadCrumbProps {
  token: string;
  storyPath?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  token,
  storyPath = 'core/theme'
}: {
  token: string;
  storyPath: string;
}) => {
  const prevTokens: FlowElement[] = elements.filter(
    (e: Edge) => (e?.target as ElementId) === token
  );
  const nextTokens: FlowElement[] = elements.filter(
    (e: Edge) => e?.source === token
  );

  return (
    <div>
      <BreadCrumbNav>
        <UnorderedList>
          {prevTokens?.map((t: Edge) => (
            <li key={t?.id}>
              &lt;
              <LinkButton onClick={linkTo(`${storyPath}/${t?.source}`)}>
                {t?.source}
              </LinkButton>
            </li>
          ))}
        </UnorderedList>
        <CurrentToken>{token}</CurrentToken>
        <UnorderedList>
          {nextTokens?.map((t: Edge) => (
            <li key={t?.id}>
              <LinkButton onClick={linkTo(`${storyPath}/${t?.target}`)}>
                {t?.target}
              </LinkButton>
              {' > '}
            </li>
          ))}
        </UnorderedList>
      </BreadCrumbNav>
      <hr />
    </div>
  );
};

export default BreadCrumb;
