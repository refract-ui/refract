import React from 'react';
import { ThemeProvider } from 'styled-components';
import { range } from 'lodash';
import { Theme } from '@refract-ui/core';
import faker from 'faker';
import Section from './Section';

interface StyleGuideProps {
  theme?: Theme;
}

const StyleGuide: React.FC<StyleGuideProps> = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    {children}

    <Section title="headings">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </Section>

    <Section title="display headings">
      <h1 className="display-1">Display 1</h1>
      <h2 className="display-2">Display 2</h2>
      <h3 className="display-3">Display 3</h3>
      <h4 className="display-4">Display 4</h4>
    </Section>

    <Section title="paragraphs">
      {range(3).map(i => (
        <p key={i}>{faker.lorem.paragraph()}</p>
      ))}
    </Section>

    <Section title="unordered lists">
      <ul>
        {range(3).map(i => (
          <li key={i}>{faker.lorem.sentence()}</li>
        ))}
      </ul>
    </Section>

    <Section title="ordered lists">
      <ol>
        {range(3).map(i => (
          <li key={i}>{faker.lorem.sentence()}</li>
        ))}
      </ol>
    </Section>

    <Section title="small / large text">
      <p>
        <span>{faker.lorem.sentence()}</span>
        <small>
          <b>small</b> {faker.lorem.sentence()}
        </small>
        <span>{faker.lorem.sentence()}</span>
        <span className="large">
          <b>large</b> {faker.lorem.sentence()}
        </span>
        <span>{faker.lorem.sentence()}</span>
      </p>
    </Section>

    <Section title="code">
      <label>pre</label>
      <pre>{faker.lorem.paragraph()}</pre>

      <label>kbd</label>
      <p>
        Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd>
      </p>
    </Section>

    <Section title="description lists">
      <label>dl, dd, dt</label>
      <dl>
        <dt>{faker.lorem.word()}</dt>
        <dd>{faker.lorem.word()}</dd>
        <dt>{faker.lorem.word()}</dt>
        <dd>{faker.lorem.word()}</dd>
      </dl>
    </Section>
  </ThemeProvider>
);

export default StyleGuide;
