import React from 'react';
import type { FlowElement } from 'react-flow-renderer';
import { linkTo } from '@storybook/addon-links';
import styled, { css } from 'styled-components';

import { elements } from './ThemeDiagram';

const BreadCrumbNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const UnorderedList = styled('ul')<{ next?: boolean }>`
  margin: 0;
  padding: 0;
  list-style: none;
  ${({ next }) =>
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

type TokenElement = {
  id: string;
  target?: string;
  source?: string;
};

function BreadCrumb({
  token,
  storyPath = 'core/theme'
}: {
  token: string;
  storyPath: string;
}): React.ReactElement {
  const prevTokens: any = elements.filter((e: any) => e?.target === token);
  const nextTokens: any = elements.filter((e: any) => e?.source === token);

  return (
    <>
      <BreadCrumbNav>
        <UnorderedList>
          {prevTokens &&
            prevTokens.map((t: TokenElement) => (
              <li key={t.id}>
                {' < '}
                <LinkButton onClick={linkTo(`${storyPath}/${t.source}`)}>
                  {t.source}
                </LinkButton>
              </li>
            ))}
        </UnorderedList>
        <CurrentToken>{token}</CurrentToken>
        <UnorderedList next>
          {nextTokens &&
            nextTokens.map((t: TokenElement) => (
              <li key={t.id}>
                <LinkButton onClick={linkTo(`${storyPath}/${t.target}`)}>
                  {t.target}
                </LinkButton>
                {' > '}
              </li>
            ))}
        </UnorderedList>
      </BreadCrumbNav>
      <hr />
    </>
  );
}

export default BreadCrumb;
