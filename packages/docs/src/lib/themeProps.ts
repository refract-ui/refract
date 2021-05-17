import {
  Container,
  AlignedContainer,
  FlexContainer,
  GridContainer,
  TypographyThemeMapping,
  FontVariant
} from '@refract-ui/core';

export type ThemePropDefinition = {
  definition: string;
  alias?: string;
  link?: string;
  defaultValue?: string;
  themeConfigPath?: string;
};

export type TypographyContainerPropDefinitions = {
  [p in keyof FontVariant & TypographyThemeMapping]: ThemePropDefinition;
};

export type ContainerPropDefinitions = {
  [p in keyof Container]: ThemePropDefinition;
};

type AlignedContainerPropDefinitions = {
  [p in keyof AlignedContainer]: ThemePropDefinition;
};

type FlexContainerPropDefinitions = {
  [p in keyof FlexContainer]: ThemePropDefinition;
};

type GridContainerPropDefinitions = {
  [p in keyof GridContainer]: ThemePropDefinition;
};

export const typograhyContainerPropDefinitions: TypographyContainerPropDefinitions = {
  stack: {
    alias: 'font-family',
    link: 'https://drafts.csswg.org/css-fonts-3/#font-family-prop',
    definition:
      'The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element. The stack property is a string array of fonts that will combine into the font-family CSS property.'
  },

  weight: {
    alias: 'font-weight',
    link: 'https://drafts.csswg.org/css-fonts-3/#font-weight-prop',
    definition:
      'The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.'
  },

  style: {
    alias: 'font-style',
    link: 'https://drafts.csswg.org/css-fonts-3/#font-style-prop',
    definition:
      'The font-style CSS property sets whether a font should be styled with a normal, italic, or oblique face from its font-family.'
  },

  lineHeight: {
    alias: 'line-height',
    link: 'https://www.w3.org/TR/CSS2/visudet.html#propdef-line-height',
    definition:
      "The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height."
  },

  letterSpacing: {
    alias: 'letter-spacing',
    link: 'https://drafts.csswg.org/css-text-3/#letter-spacing-property',
    definition:
      'The letter-spacing CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of letter-spacing causes characters to spread farther apart, while negative values of letter-spacing bring characters closer together.'
  },

  color: {
    alias: 'color',
    link: 'https://drafts.csswg.org/css-color-3/#color',
    definition:
      "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color."
  }
};

export const containerPropDefinitions: ContainerPropDefinitions = {
  m: {
    alias: 'margin',
    link: 'https://drafts.csswg.org/css-box-3/#margin',
    definition:
      'The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.'
  },

  mt: {
    alias: 'margin-top',
    link: 'https://drafts.csswg.org/css-box-3/#margin',
    definition:
      'The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.'
  },
  mb: {
    alias: 'margin-bottom',
    link: 'https://drafts.csswg.org/css-box-3/#margin',
    definition:
      'The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.'
  },
  ml: {
    alias: 'margin-left',
    link: 'https://drafts.csswg.org/css-box-3/#margin',
    definition:
      'The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.'
  },
  mr: {
    alias: 'margin-right',
    link: 'https://drafts.csswg.org/css-box-3/#margin',
    definition:
      'The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.'
  },
  mx: {
    alias: 'margin-left, margin-right',
    link: 'https://drafts.csswg.org/css-box-3/#margin',
    definition:
      'The margin-left and margin-right CSS properties sets the margin area on the left and right sides of an element. A positive value places it farther from its neighbors, while a negative value places it closer.'
  },
  my: {
    alias: 'margin-top, margin-bottom',
    link: 'https://drafts.csswg.org/css-box-3/#margin',
    definition:
      'The margin-top and margin-bottom CSS properties sets the margin area on the top and bottom sides of an element. A positive value places it farther from its neighbors, while a negative value places it closer.'
  },
  p: {
    alias: 'padding',
    link: 'https://drafts.csswg.org/css-box-3/#padding',
    definition:
      'The padding CSS shorthand property sets the padding area on all four sides of an element at once.'
  },
  pt: {
    alias: 'padding-top',
    link: 'https://drafts.csswg.org/css-box-3/#padding',
    definition:
      'The padding-top CSS property sets the height of the padding area on the top of an element.'
  },
  pb: {
    alias: 'padding-bottom',
    link: 'https://drafts.csswg.org/css-box-3/#padding',
    definition:
      'The padding-bottom CSS property sets the height of the padding area on the bottom of an element.'
  },
  pl: {
    alias: 'padding-left',
    link: 'https://drafts.csswg.org/css-box-3/#padding',
    definition:
      'The padding-left CSS property sets the width of the padding area to the left of an element.'
  },
  pr: {
    alias: 'padding-right',
    link: 'https://drafts.csswg.org/css-box-3/#padding',
    definition:
      'The padding-right CSS property sets the width of the padding area on the right of an element.'
  },
  px: {
    alias: 'padding-left, padding-right',
    link: 'https://drafts.csswg.org/css-box-3/#padding',
    definition:
      'The padding-left and padding-right CSS properties sets the width of the padding area on the left and right of an element.'
  },
  py: {
    alias: 'padding-top, padding-bottom',
    link: 'https://drafts.csswg.org/css-box-3/#padding',
    definition:
      'The padding-top and padding-bottom CSS properties sets the width of the padding area on the top and bottom of an element.'
  },
  opacity: {
    link: 'https://drafts.csswg.org/css-color-3/#opacity',
    definition:
      'The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.'
  },
  textAlign: {
    alias: 'text-align',
    link: 'https://drafts.csswg.org/css-text-3/#text-align-property',
    definition:
      'The text-align CSS property sets the horizontal alignment of the content inside a block element or table-cell box.'
  },
  w: {
    alias: 'width',
    link: 'https://www.w3.org/TR/CSS2/visudet.html#the-width-property',
    definition:
      "The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area."
  },
  h: {
    alias: 'height',
    link: 'https://www.w3.org/TR/CSS2/visudet.html#the-height-property',
    definition:
      'The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.'
  },
  minW: {
    alias: 'min-width',
    link: 'https://drafts.csswg.org/css-flexbox-1/#min-size-auto',
    definition:
      'The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.'
  },
  minH: {
    alias: 'min-height',
    definition:
      'The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.'
  },
  minSize: {
    alias: 'min-width, min-height',
    definition:
      'The minSize property sets the minimum height and width of an element. It prevents the used value of the width and height properties from becoming smaller than the value specified for minSize.'
  },
  maxW: {
    alias: 'max-width',
    link: 'https://www.w3.org/TR/CSS2/visudet.html#min-max-heights',
    definition:
      'The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.'
  },
  maxH: {
    alias: 'max-height',
    link: 'https://www.w3.org/TR/CSS2/visudet.html#min-max-heights',
    definition:
      'The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.'
  },
  maxSize: {
    alias: 'max-width, max-height',
    definition:
      'The maxSize property sets the maximum height and width of an element. It prevents the used value of the width and height properties from becoming larger than the value specified for maxSize.'
  },
  verticalAlign: {
    alias: 'vertical-align',
    link: 'https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align',
    definition:
      'The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.'
  },
  bg: {
    alias: 'background-color',
    link: 'https://drafts.csswg.org/css-backgrounds-3/#background-color',
    definition:
      'The background-color CSS property sets the background color of an element.'
  },
  bgSize: {
    alias: 'background-size',
    link: 'https://drafts.csswg.org/css-backgrounds-3/#the-background-size',
    definition:
      "The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space."
  },
  bgPos: {
    alias: 'background-position',
    link: 'https://drafts.csswg.org/css-backgrounds-3/#background-position',
    definition:
      'The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin.'
  },
  bgRepeat: {
    alias: 'background-repeat',
    link: 'https://drafts.csswg.org/css-backgrounds-3/#the-background-repeat',
    definition:
      'The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.'
  },
  bgAttachment: {
    alias: 'background-attachment',
    link:
      'https://drafts.csswg.org/css-backgrounds-3/#the-background-attachment',
    definition:
      "The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block."
  },
  area: {
    alias: 'grid-area',
    link: 'https://drafts.csswg.org/css-grid/#propdef-grid-area',
    definition:
      'The grid-area CSS shorthand property specifies a grid item’s size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.'
  },
  border: {
    definition: ''
  }
};

export const alignedContainerPropDefinitions: AlignedContainerPropDefinitions = {
  ...containerPropDefinitions,
  alignItems: {
    alias: 'align-items',
    definition:
      'The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.',
    link: 'https://drafts.csswg.org/css-flexbox-1/#propdef-align-items'
  },
  alignContent: {
    alias: 'align-content',
    definition:
      "The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.",
    link: 'https://drafts.csswg.org/css-flexbox-1/#align-content-property'
  },
  alignSelf: {
    alias: 'align-self',
    definition:
      "The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.",
    link: 'https://drafts.csswg.org/css-flexbox-1/#propdef-align-self'
  },
  justifyItems: {
    alias: 'justify-items',
    definition:
      'The CSS justify-items property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.',
    link: 'https://drafts.csswg.org/css-align-3/#propdef-justify-items'
  },
  justifyContent: {
    alias: 'justify-content',
    definition:
      'The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.',
    link: 'https://drafts.csswg.org/css-flexbox-1/#propdef-justify-content'
  },
  justifySelf: {
    alias: 'justify-self',
    definition:
      'The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.',
    link: 'https://drafts.csswg.org/css-align-3/#propdef-justify-self'
  }
};

export const flexContainerPropDefinitions: FlexContainerPropDefinitions = {
  ...alignedContainerPropDefinitions,
  wrap: {
    alias: 'flex-wrap',
    definition:
      'The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.',
    link: 'https://drafts.csswg.org/css-flexbox-1/#flex-wrap-property'
  },
  flex: {
    definition:
      'The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.',
    link: 'https://drafts.csswg.org/css-flexbox-1/#flex-property'
  },
  grow: {
    alias: 'flex-grow',
    definition:
      "The flex-grow CSS property sets the flex grow factor of a flex item's main size.",
    link: 'https://drafts.csswg.org/css-flexbox-1/#flex-grow-property'
  },
  shrink: {
    alias: 'flex-shrink',
    definition:
      'The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.',
    link: 'https://drafts.csswg.org/css-flexbox-1/#flex-shrink-property'
  },
  basis: {
    alias: 'flex-basis',
    definition:
      'The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.',
    link: 'https://drafts.csswg.org/css-flexbox-1/#propdef-flex-basis'
  },
  order: {
    definition:
      'The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.',
    link: 'https://drafts.csswg.org/css-flexbox-1/#order-property'
  }
};

export const gridContainerPropDefinitions: GridContainerPropDefinitions = {
  ...alignedContainerPropDefinitions,

  gap: {
    definition:
      'The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.',
    link: 'https://drafts.csswg.org/css-align-3/#propdef-gap'
  },
  rowGap: {
    alias: 'row-gap',
    definition:
      "The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.",
    link: 'https://drafts.csswg.org/css-align-3/#propdef-row-gap'
  },
  columnGap: {
    alias: 'column-gap',
    definition:
      "The column-gap CSS property sets the size of the gap (gutter) between an element's columns.",
    link: 'https://drafts.csswg.org/css-grid/#gutters'
  },
  column: {
    alias: 'grid-column',
    definition:
      "The grid-column CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.",
    link: 'https://drafts.csswg.org/css-grid/#propdef-grid-column'
  },
  row: {
    alias: 'grid-row',
    definition:
      'The grid-row CSS shorthand property specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.',
    link: 'https://drafts.csswg.org/css-grid/#propdef-grid-row'
  },
  autoFlow: {
    alias: 'grid-auto-flow',
    definition:
      'The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.',
    link: 'https://drafts.csswg.org/css-grid/#propdef-grid-auto-flow'
  },
  autoRows: {
    alias: 'grid-auto-rows',
    definition:
      'The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.',
    link: 'https://drafts.csswg.org/css-grid/#propdef-grid-auto-rows'
  },
  autoColumns: {
    alias: 'grid-auto-columns',
    definition:
      'The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.',
    link: 'https://drafts.csswg.org/css-grid/#propdef-grid-auto-columns'
  },
  templateRows: {
    alias: 'grid-template-rows',
    definition:
      'The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.',
    link: 'https://drafts.csswg.org/css-grid/#propdef-grid-template-rows'
  },
  templateColumns: {
    alias: 'grid-template-columns',
    definition:
      'The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.',
    link: 'https://drafts.csswg.org/css-grid/#propdef-grid-template-columns'
  },
  templateAreas: {
    alias: 'grid-template-areas',
    definition:
      'The grid-template-areas CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.',
    link: 'https://drafts.csswg.org/css-grid/#propdef-grid-template-areas'
  }
};
