import { BlockElements, TypographyTags } from '@refract-ui/core';
import { ThemePropDefinition } from './themeProps';

export type NativeElementProps =
  | keyof typeof BlockElements
  | keyof typeof TypographyTags;

export type NativeElementPropDefinitions = {
  [p in NativeElementProps]: ThemePropDefinition;
};

export const nativeElementPropDefinitions: NativeElementPropDefinitions = {
  heading: {
    link:
      'https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements',
    definition:
      'The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.',
    alias: 'h1, h2, h3, h4, h5, h6'
  },
  p: {
    link: 'https://html.spec.whatwg.org/multipage/semantics.html#the-p-element',
    definition:
      'The HTML <p> element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.'
  },
  pre: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-pre-element',
    definition:
      'The HTML <pre> element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional ("monospace") font. Whitespace inside this element is displayed as written.'
  },
  kbd: {
    link:
      'https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element',
    definition:
      'The HTML Keyboard Input element (<kbd>) represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a <kbd> element using its default monospace font, although this is not mandated by the HTML standard.'
  },
  figure: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-figure-element',
    definition:
      'The HTML <figure> (Figure With Optional Caption) element represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element. The figure, its caption, and its contents are referenced as a single unit.'
  },
  table: {
    link:
      'https://html.spec.whatwg.org/multipage/tables.html#the-table-element',
    definition:
      'The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.'
  },
  label: {
    link: 'https://html.spec.whatwg.org/multipage/forms.html#the-label-element',
    definition:
      'The HTML <label> element represents a caption for an item in a user interface.'
  },
  legend: {
    link:
      'https://html.spec.whatwg.org/multipage/forms.html#the-legend-element',
    definition:
      'The HTML <legend> element represents a caption for the content of its parent <fieldset>.'
  },
  ol: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-ol-element',
    definition:
      'The HTML <ol> element represents an ordered list of items — typically rendered as a numbered list.'
  },
  ul: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-ul-element',
    definition:
      'The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.'
  },
  li: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-li-element',
    definition:
      'The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.'
  },
  address: {
    link:
      'https://html.spec.whatwg.org/multipage/sections.html#the-address-element',
    definition:
      'The HTML <address> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.'
  },
  dt: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-dt-element',
    definition:
      'The HTML <dt> element specifies a term in a description or definition list, and as such must be used inside a <dl> element. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element.'
  },
  dd: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-dd-element',
    definition:
      'The HTML <dd> element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>).'
  },
  blockquote: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-blockquote-element',
    definition:
      'The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element.'
  },

  h1: {
    link:
      'https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements',
    definition:
      'The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.'
  },
  h2: {
    link:
      'https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements',
    definition:
      'The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.'
  },
  h3: {
    link:
      'https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements',
    definition:
      'The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.'
  },
  h4: {
    link:
      'https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements',
    definition:
      'The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.'
  },
  h5: {
    link:
      'https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements',
    definition:
      'The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.'
  },
  h6: {
    link:
      'https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements',
    definition:
      'The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.'
  },
  a: {
    link:
      'https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-delivery-referrer-attribute',
    definition:
      "The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address. Content within each <a> should indicate the link's destination. If the href attribute is present, pressing the enter key while focused on the <a> element will activate it."
  },
  display1: {
    definition:
      'The display classes ("display-1" - "display-4") represent four levels of large, attention-grabbing headings. "display-1" is the highest level and "display-4" is the lowest.',
    alias: 'class="display-1"'
  },
  display2: {
    definition:
      'The display classes ("display-1" - "display-4") represent four levels of large, attention-grabbing headings. "display-1" is the highest level and "display-4" is the lowest.',
    alias: 'class="display-2"'
  },
  display3: {
    definition:
      'The display classes ("display-1" - "display-4") represent four levels of large, attention-grabbing headings. "display-1" is the highest level and "display-4" is the lowest.',
    alias: 'class="display-3"'
  },
  display4: {
    definition:
      'The display classes ("display-1" - "display-4") represent four levels of large, attention-grabbing headings. "display-1" is the highest level and "display-4" is the lowest.',
    alias: 'class="display-4"'
  },
  default: {
    definition: 'This is the default font treatment applied to the body class',
    alias: 'body'
  },
  button: {
    link:
      'https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element',
    definition:
      'The HTML <button> element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality. By default, HTML buttons are presented in a style resembling the platform the user agent runs on, but you can change buttons’ appearance with CSS.'
  },
  listItem: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-li-element',
    definition:
      'The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.',
    alias: 'li'
  },
  small: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-small-element',
    definition:
      'The HTML <small> element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small.'
  },
  large: {
    definition: 'A class that increases the font-size of the wrapped text.',
    alias: 'class="large"'
  },
  code: {
    link:
      'https://html.spec.whatwg.org/multipage/semantics.html#the-code-element',
    definition:
      "The HTML <code> element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font."
  }
};
