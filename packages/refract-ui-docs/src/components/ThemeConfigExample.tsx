import { theme } from '@refract-ui/react';
import { isArray, map, get, range } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type ThemeConfigValue = {
  path: string;
  prop: string;
};

type ThemeConfigSetting = {
  name: string;
  props: Array<ThemeConfigValue>;
};

interface ThemeConfigExampleProps {
  theme: Theme;
  componentName: string;
  settings: {
    [p: string]: Array<ThemeConfigSetting>;
  };
}

const Container = styled.div`
  margin: 1rem 0;
`;

const functionConfigTemplate = (
  componentName: string,
  settings: {
    [p: string]: string | Array<ThemeConfigSetting>;
  }
) => {
  return `
import { theme } from '@refract-ui/react';

const appTheme = theme({
  ${componentName}: (config) => ({
    xs: {
      ${map(
        settings,
        (props: ThemeConfigValue | Array<ThemeConfigValue>, name: string) =>
          isArray(props)
            ? `${name}: {
        ${props
          .map(({ path, prop }) => `${path}: config.${prop}`)
          .join(',\n        ')}
      }`
            : `${name}: config.${props}`
      )}
    }
  })
});
  `;
};

function indentJson(obj: any, spaces: number) {
  const indents: string = range(spaces)
    .map(() => ' ')
    .join('');
  return JSON.stringify(obj, null, 2).split('\n').join(`\n${indents}`);
}

const staticConfigTemplate = (
  theme: Theme,
  componentName: string,
  settings: {
    [p: string]: string | Array<ThemeConfigSetting>;
  }
) => {
  return `
import { theme } from '@refract-ui/react';

const appTheme = theme({
  ${componentName}: {
    xs: {
      ${map(settings, (props: string | Array<ThemeConfigValue>, name: string) =>
        isArray(props)
          ? `${name}: {
        ${props
          .map(({ path, prop }) => `${path}: '${get(theme, prop)}'`)
          .join(',\n        ')}
      }`
          : `${name}: ${indentJson(get(theme, props as string), 6)}`
      )}
    }
  }
})
  `;
};

const ThemeConfigExample: React.FC<ThemeConfigExampleProps> = ({
  theme,
  componentName,
  settings
}) => (
  <Container>
    <h2>Theme Configuration</h2>

    <p>
      The following examples show how to set the global properties for this
      element.
    </p>

    <h3>Using Function Values</h3>
    <SyntaxHighlighter language="javascript" style={darcula}>
      {functionConfigTemplate(componentName, settings)}
    </SyntaxHighlighter>

    <h3>Using Static Values</h3>
    <SyntaxHighlighter language="javascript" style={darcula}>
      {staticConfigTemplate(theme, componentName, settings)}
    </SyntaxHighlighter>
  </Container>
);

export default ThemeConfigExample;
