import React from 'react';
import ReactFlow from 'react-flow-renderer';
import type { FlowElement } from 'react-flow-renderer';
import styled from 'styled-components';

const Container = styled.div`
  height: 750px;
`;

function pos({ left, top }: { left: number; top: number }): {
  x: number;
  y: number;
} {
  return {
    x: 5 + left * 190,
    y: 5 + top * 70
  };
}

export const elements = [
  {
    id: 'colors',
    data: { label: 'Colors' },
    type: 'input',
    draggable: false,
    position: pos({ left: 0.5, top: 0 })
  },

  {
    id: 'colorShades',
    data: { label: 'Color Shades' },
    draggable: false,
    position: pos({ left: 0.5, top: 1 })
  },

  {
    id: 'subtleColors',
    data: { label: 'Subtle Colors' },
    draggable: false,
    position: pos({ left: 0, top: 2 })
  },

  {
    id: 'darkColors',
    data: { label: 'Dark Colors' },
    draggable: false,
    position: pos({ left: 1, top: 2 })
  },

  {
    id: 'themeColors',
    data: { label: 'Theme Colors' },
    draggable: false,
    position: pos({ left: 0.5, top: 3 })
  },

  {
    id: 'themeColorShades',
    data: { label: 'Theme Color Shades' },
    draggable: false,
    position: pos({ left: 0.5, top: 4 })
  },

  {
    id: 'borders',
    data: { label: 'Borders' },
    draggable: false,
    position: pos({ left: 0.5, top: 5 })
  },

  {
    id: 'breakpoints',
    data: { label: 'Breakpoints' },
    type: 'input',
    draggable: false,
    position: pos({ left: 2, top: 0 })
  },

  {
    id: 'mq',
    data: { label: 'Media Queries (mq)' },
    draggable: false,
    position: pos({ left: 2, top: 1 })
  },

  {
    id: 'spacing',
    data: { label: 'Spacing' },
    type: 'input',
    draggable: false,
    position: pos({ left: 3, top: 0 })
  },

  {
    id: 'fontStacks',
    data: { label: 'Font Stacks' },
    type: 'input',
    draggable: false,
    position: pos({ left: 4, top: 0 })
  },

  {
    id: 'fontFaces',
    data: { label: 'Font Faces' },
    draggable: false,
    position: pos({ left: 4, top: 1 })
  },

  {
    id: 'fontVariants',
    data: { label: 'Font Variants' },
    draggable: false,
    position: pos({ left: 4, top: 2 })
  },

  {
    id: 'fontTagMappings',
    data: { label: 'Font Tag Mappings' },
    draggable: false,
    position: pos({ left: 4, top: 3 })
  },

  {
    id: 'blockElementMappings',
    type: 'output',
    data: { label: 'Block Element Mappings' },
    draggable: false,
    position: pos({ left: 4, top: 7 })
  },

  {
    id: 'icons',
    data: { label: 'Icons' },
    type: 'output',
    draggable: false,
    position: pos({ left: 0, top: 7 })
  },

  {
    id: 'tables',
    data: { label: 'Tables' },
    type: 'output',
    draggable: false,
    position: pos({ left: 1, top: 7 })
  },

  {
    id: 'buttons',
    data: { label: 'Buttons' },
    type: 'output',
    draggable: false,
    position: pos({ left: 2, top: 7 })
  },

  {
    id: 'inputs',
    data: { label: 'Inputs' },
    draggable: false,
    position: pos({ left: 3, top: 7 })
  },

  {
    id: 'textInputs',
    data: { label: 'Text Inputs' },
    type: 'output',
    draggable: false,
    position: pos({ left: 1.5, top: 9 })
  },

  {
    id: 'dropdowns',
    data: { label: 'Dropdowns' },
    type: 'output',
    draggable: false,
    position: pos({ left: 2.5, top: 9 })
  },

  {
    id: 'checkboxes',
    data: { label: 'Checkboxes' },
    type: 'output',
    draggable: false,
    position: pos({ left: 3.5, top: 9 })
  },

  {
    id: 'radios',
    data: { label: 'Radios' },
    type: 'output',
    draggable: false,
    position: pos({ left: 4.5, top: 9 })
  },

  // edges
  {
    id: 'fontStacks-fontFaces',
    source: 'fontStacks',
    target: 'fontFaces',
    arrowHeadType: 'arrow'
  },

  {
    id: 'breakpoints-mq',
    source: 'breakpoints',
    target: 'mq',
    arrowHeadType: 'arrow'
  },

  {
    id: 'colors-colorShades',
    source: 'colors',
    target: 'colorShades',
    arrowHeadType: 'arrow'
  },

  {
    id: 'colorShades-subtleColors',
    source: 'colorShades',
    target: 'subtleColors',
    arrowHeadType: 'arrow'
  },

  {
    id: 'colorShades-darkColors',
    source: 'colorShades',
    target: 'darkColors',
    arrowHeadType: 'arrow'
  },

  {
    id: 'darkColors-themeColors',
    source: 'darkColors',
    target: 'themeColors',
    arrowHeadType: 'arrow'
  },

  {
    id: 'subtleColors-themeColors',
    source: 'subtleColors',
    target: 'themeColors',
    arrowHeadType: 'arrow'
  },

  {
    id: 'themeColors-themeColorShades',
    source: 'themeColors',
    target: 'themeColorShades',
    arrowHeadType: 'arrow'
  },

  {
    id: 'themeColorShades-borders',
    source: 'themeColorShades',
    target: 'borders',
    arrowHeadType: 'arrow'
  },

  {
    id: 'fontFaces-fontVariants',
    source: 'fontFaces',
    target: 'fontVariants',
    arrowHeadType: 'arrow'
  },

  {
    id: 'fontVariants-fontTagMappings',
    source: 'fontVariants',
    target: 'fontTagMappings',
    arrowHeadType: 'arrow'
  },

  {
    id: 'fontTagMappings-tables',
    source: 'fontTagMappings',
    target: 'tables',
    arrowHeadType: 'arrow'
  },

  {
    id: 'fontTagMappings-blockElementMappings',
    source: 'fontTagMappings',
    target: 'blockElementMappings',
    arrowHeadType: 'arrow'
  },

  {
    id: 'fontTagMappings-inputs',
    source: 'fontTagMappings',
    target: 'inputs',
    arrowHeadType: 'arrow'
  },

  {
    id: 'fontTagMappings-buttons',
    source: 'fontTagMappings',
    target: 'buttons',
    arrowHeadType: 'arrow'
  },

  {
    id: 'spacing-blockElementMappings',
    source: 'spacing',
    target: 'blockElementMappings',
    arrowHeadType: 'arrow'
  },

  {
    id: 'spacing-inputs',
    source: 'spacing',
    target: 'inputs',
    arrowHeadType: 'arrow'
  },

  {
    id: 'spacing-buttons',
    source: 'spacing',
    target: 'buttons',
    arrowHeadType: 'arrow'
  },

  {
    id: 'spacing-tables',
    source: 'spacing',
    target: 'tables',
    arrowHeadType: 'arrow'
  },

  {
    id: 'borders-tables',
    source: 'borders',
    target: 'tables',
    arrowHeadType: 'arrow'
  },

  {
    id: 'borders-buttons',
    source: 'borders',
    target: 'buttons',
    arrowHeadType: 'arrow'
  },

  {
    id: 'borders-inputs',
    source: 'borders',
    target: 'inputs',
    arrowHeadType: 'arrow'
  },

  {
    id: 'borders-blockElementMappings',
    source: 'borders',
    target: 'blockElementMappings',
    arrowHeadType: 'arrow'
  },

  {
    id: 'borders-icors',
    source: 'borders',
    target: 'icons',
    arrowHeadType: 'arrow'
  },

  {
    id: 'inputs-textInputs',
    source: 'inputs',
    target: 'textInputs',
    arrowHeadType: 'arrow'
  },

  {
    id: 'inputs-dropdowns',
    source: 'inputs',
    target: 'dropdowns',
    arrowHeadType: 'arrow'
  },

  {
    id: 'inputs-checkboxes',
    source: 'inputs',
    target: 'checkboxes',
    arrowHeadType: 'arrow'
  },

  {
    id: 'inputs-radios',
    source: 'inputs',
    target: 'radios',
    arrowHeadType: 'arrow'
  }
] as FlowElement[];

const ThemeDiagram: React.FC = () => (
  <Container>
    <ReactFlow elements={elements} onLoad={instance => instance.fitView()} />
  </Container>
);

export default ThemeDiagram;
