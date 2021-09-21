import React from 'react';
import { map, isUndefined } from 'lodash';
import styled from 'styled-components';
import { ThemePropDefinition } from '../lib/themeProps';

export interface ThemePropListProps {
  title?: string;
  definitions: {
    [p: string]: ThemePropDefinition;
  };
}

const Container = styled.div`
  margin: 1rem 0;

  th {
    text-align: right;
    vertical-align: top;
  }
`;

const Description = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ThemePropList: React.FC<ThemePropListProps> = ({
  title,
  definitions,
  children
}) => (
  <Container>
    {title && <h1>{title}</h1>}

    {children && <Description>{children}</Description>}

    {map(definitions, ({ alias, link, definition, defaultValue }, key) => (
      <details key={key}>
        <summary>
          {key}
          {!isUndefined(defaultValue) && (
            <>
              : <code>{defaultValue}</code>
            </>
          )}
        </summary>
        <table>
          <tbody>
            {alias && (
              <tr>
                <th>alias for</th>
                <td>{link ? <a href={link}>{alias}</a> : alias}</td>
              </tr>
            )}

            {link && (
              <tr>
                <th>spec</th>
                <td>
                  <a href={link}>{link}</a>
                </td>
              </tr>
            )}

            {!isUndefined(defaultValue) && (
              <tr>
                <th>default value</th>
                <td>
                  <code>{defaultValue}</code>
                </td>
              </tr>
            )}
            <tr>
              <th>definition</th>
              <td>{definition}</td>
            </tr>
          </tbody>
        </table>
      </details>
    ))}
  </Container>
);

export default ThemePropList;
