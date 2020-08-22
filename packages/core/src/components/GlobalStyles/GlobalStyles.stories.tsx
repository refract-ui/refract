import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { range } from 'lodash';
import genTheme, { Theme } from '../../theme';
import GlobalStyles from './index';

interface SectionProps {
  title: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  border: solid rgba(0, 0, 0, 0.3) 1px;
  border-radius: 4px;
  margin: 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
`;

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <Container>
    <Header>{title}</Header>
    <Content>{children}</Content>
  </Container>
);

interface StyleGuideProps {
  theme?: Theme;
}

const StyleGuide: React.FC<StyleGuideProps> = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

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
    </ThemeProvider>
  );
};

storiesOf('GlobalStyles', module).add('default', () => (
  <StyleGuide theme={genTheme()} />
));
// .add('overrides', () => (
// <StyleGuide
// theme={genTheme({
// globalStyles: {
// h1: { size: '2.6rem' }
// }
// })}
// />
// ))
// .add('media queries', () => (
// <StyleGuide
// theme={genTheme({
// globalStyles: {
// h1: { mdOnly: '2.6rem' }
// }
// })}
// />
// ));
