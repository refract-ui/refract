import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  title: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  border: solid ${({ theme }) => theme.themeColorOpacities.fg40} 1px;
  border-radius: 4px;
  margin: 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.themeColorOpacities.fg10};
  padding: 0.5rem 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0.5rem;
`;

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <Container>
    <Header>{title}</Header>
    <Content>{children}</Content>
  </Container>
);

export default Section;
