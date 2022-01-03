import { css } from 'styled-components';

// mostly copied from [1] normalize.css and [2] bootstrap
// 1. https://github.com/necolas/normalize.css
// 2. https://github.com/twbs/bootstrap

const reset = css`
  /**
  * Change from 'box-sizing: content-box' so that 'width' is not affected by 'padding' or 'border'.
  */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /**
  * 1. correct the line height in all browsers.
  * 2. prevent adjustments of font size after orientation changes in ios.
  */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /**
  * 1. Remove the margin in all browsers.
  * 2. Prevent adjustments of font size after orientation changes in iOS.
  * 3. Change the default tap highlight to be completely transparent in iOS.
  */

  body {
    margin: 0; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -webkit-tap-highlight-color: rgba($black, 0); /* 3 */
  }

  /**
  * Render the 'main' element consistently in IE.
  */

  main {
    display: block;
  }

  /**
  * 1. Add the correct box sizing in Firefox.
  * 2. Show the overflow in Edge and IE.
  */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
  * Future-proof rule: in browsers that support :focus-visible, suppress the focus outline
  * on elements that programmatically receive focus but wouldn't normally show a visible
  * focus outline. In general, this would mean that the outline is only applied if the
  * interaction that led to the element receiving programmatic focus was a keyboard interaction,
  * or the browser has somehow determined that the user is primarily a keyboard user and/or
  * wants focus outlines to always be presented.
  * See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
  * and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/
  */

  [tabindex='-1']:focus:not(:focus-visible) {
    outline: 0 !important;
  }

  /**
  * 1. Change the font styles in all browsers.
  * 2. Remove the margin in Firefox and Safari.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
  * Show the overflow in IE.
  * 1. Show the overflow in Edge.
  */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
  * Remove the inheritance of text transform in Edge, Firefox, and IE.
  * 1. Remove the inheritance of text transform in Firefox.
  */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
  * Correct the inability to style clickable types in iOS and Safari.
  */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  /**
  * Remove the inner border and padding in Firefox.
  */

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
  * Correct the padding in Firefox.
  */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
  * 1. Correct the text wrapping in Edge and IE.
  * 2. Correct the color inheritance from 'fieldset' elements in IE.
  * 3. Remove the padding so developers are not caught out when they zero out
  *    'fieldset' elements in all browsers.
  */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
  * Add the correct vertical alignment in Chrome, Firefox, and Opera.
  */

  progress {
    vertical-align: baseline;
  }

  /**
  * Remove the default vertical scrollbar in IE 10+.
  */

  textarea {
    overflow: auto;
  }

  /**
  * 1. Add the correct box sizing in IE 10.
  * 2. Remove the padding in IE 10.
  */

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
  * Correct the cursor style of increment and decrement buttons in Chrome.
  */

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  /**
  * 1. Correct the odd appearance in Chrome and Safari.
  * 2. Correct the outline style in Safari.
  */

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
  * Remove the inner padding in Chrome and Safari on macOS.
  */

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
  * 1. Correct the inability to style clickable types in iOS and Safari.
  * 2. Change font properties to 'inherit' in Safari.
  */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /*
  * Add the correct display in Edge, IE 10+, and Firefox.
  */

  details {
    display: block;
  }

  /*
  * Add the correct display in all browsers.
  */

  summary {
    display: list-item;
  }

  /**
  * Add the correct display in IE 10+.
  */

  template {
    display: none;
  }

  /**
  * Add the correct display in IE 10.
  */

  [hidden] {
    display: none;
  }

  /**
  * Abbreviations
  * 1. Duplicate behavior to the data-* attribute for our tooltip plugin
  * 2. Add the correct text decoration in Chrome, Edge, Opera, and Safari.
  * 3. Add explicit cursor to indicate changed behavior.
  * 4. Prevent the text-decoration to be skipped.
  */

  abbr[title],
  abbr[data-original-title] /* 1 */ {
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
    cursor: help; // 3
    text-decoration-skip-ink: none; /* 4 */
  }

  /**
  * address
  */

  address {
    font-style: normal;
    line-height: inherit;
  }

  /**
  * definition tags
  */
  dt {
    font-weight: $dt-font-weight;
  }

  /**
  * Sub and Sup
  * Prevent 'sub' and 'sup' elements from affecting the line height in all
  * browsers
  */

  sub,
  sup {
    position: relative;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /**
  * anchors
  * Undo these styles for placeholder links/named anchors (without href).
  * It would be more straightforward to just use a[href] in previous block, but that
  * causes specificity issues in many other styles that are too complex to fix.
  * See https://github.com/twbs/bootstrap/issues/19402
  */

  a:not([href]):not([class]) {
    &,
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

  /**
  * code
  *
  * 1. Don't allow content to break outside
  * 2. Disable auto-hiding scrollbar in legacy Edge to avoid overlap,
  *    making it impossible to interact with the content
  */

  pre {
    display: block;
    overflow: auto; // 1
    -ms-overflow-style: scrollbar; // 2

    // Account for some code outputs that place code tags in pre tags
    code {
      color: inherit;
      word-break: normal;
    }
  }

  code {
    word-wrap: break-word;

    /**
    * Streamline the style when inside anchors to avoid broken underline and
    * more
    */
    a > & {
      color: inherit;
    }
  }

  kbd {
    kbd {
      padding: 0;
    }
  }

  /**
  * Images and content
  */

  img,
  svg {
    vertical-align: middle;
  }

  /**
  * Tables
  */

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    text-align: left;
  }

  /**
  * 1. Matches default '<td>' alignment by inheriting 'text-align'.
  * 2. Fix alignment for Safari
  */

  th {
    text-align: inherit; /* 1 */
    text-align: -webkit-match-parent; /* 2 */
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  /**
  * Forms
  * 1. Allow labels to use 'margin' for spacing.
  */

  label {
    display: inline-block; /* 1 */
  }

  /**
  * Remove the default 'border-radius' that macOS Chrome adds.
  * See https://github.com/twbs/bootstrap/issues/24093
  */

  button {
    border-radius: 0;
  }

  /**
  * Work around a Firefox bug where the transparent 'button' background
  * results in a loss of the default 'button' focus styles.
  * Credit https://github.com/suitcss/base/
  */

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  /**
  * 1. Remove the margin in Firefox and Safari
  */

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0; /* 1 */
    font-family: inherit;
    line-height: inherit;
  }

  /**
  * Show the overflow in Edge
  */

  button,
  input {
    overflow: visible;
  }

  /**
  * Remove the inheritance of text transform in Firefox
  */

  button,
  select {
    text-transform: none;
  }

  /**
  * Set the cursor for non-'<button>' buttons
  *
  * Details at https://github.com/twbs/bootstrap/pull/30562
  */

  [role='button'] {
    cursor: pointer;
  }

  /**
  * Remove the inheritance of word-wrap in Safari.
  * See https://github.com/twbs/bootstrap/issues/24990
  */

  select {
    word-wrap: normal;
  }

  /**
  * Remove the dropdown arrow in Chrome from inputs built with datalists.
  * See https://stackoverflow.com/a/54997118
  */

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  /**
  * 1. Prevent a WebKit bug where (2) destroys native 'audio' and 'video'
  *    controls in Android 4.
  * 2. Correct the inability to style clickable types in iOS and Safari.
  * 3. Opinionated: add "hand" cursor to non-disabled button elements.
  */

  button,
  [type="button"], /* 1 */
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button; /* 2 */

    &:not(:disabled) {
      cursor: pointer; /* 3 */
    }
  }

  /**
  * 1. Textareas should really only resize vertically so they don't break their
  *    (horizontal) containers.
  */

  textarea {
    resize: vertical; /* 1 */
  }

  /**
  * 1. Browsers set a default 'min-width: min-content;' on fieldsets,
  *    unlike e.g. '<div>'s, which have 'min-width: 0;' by default.
  *    So we reset that to ensure fieldsets behave more like a standard block element.
  *    See https://github.com/twbs/bootstrap/issues/12359
  *    and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements
  * 2. Reset the default outline behavior of fieldsets so they don't affect page layout.
  */

  fieldset {
    min-width: 0; /* 1 */
    padding: 0; /* 2 */
    margin: 0; /* 2 */
    border: 0; /* 2 */
  }

  /**
  * 1. By using 'float: left', the legend will behave like a block element.
  *    This way the border of a fieldset wraps around the legend if present.
  * 2. Correct the text wrapping in Edge.
  * 3. Fix wrapping bug.
  *    See https://github.com/twbs/bootstrap/issues/29712
  */

  legend {
    float: left; /* 1 */
    width: 100%;
    padding: 0;
    line-height: inherit;
    white-space: normal; /* 2 */

    + * {
      clear: left; /* 3 */
    }
  }

  /**
  * Fix height of inputs with a type of datetime-local, date, month, week, or time
  * See https://github.com/twbs/bootstrap/issues/18842
  */

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  /**
  * 1. Correct the outline style in Safari.
  * 2. This overrides the extra rounded corners on search inputs in iOS so that our
  *    '.form-control' class can properly style them. Note that this cannot simply
  *    be added to '.form-control' as it's not specific enough. For details, see
  *    https://github.com/twbs/bootstrap/issues/11586.
  */

  [type='search'] {
    outline-offset: -2px; // 1
    -webkit-appearance: textfield; // 2
  }

  /**
  * Remove the inner padding in Chrome and Safari on macOS.
  */

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
  * Remove padding around color pickers in webkit browsers
  */

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  /**
  * 1. Change font properties to 'inherit' in Safari.
  * 2. Correct the inability to style clickable types in iOS and Safari.
  */

  ::-webkit-file-upload-button {
    font: inherit; /* 1 */
    -webkit-appearance: button; /* 2 */
  }

  /**
  * Correct element displays
  */

  output {
    display: inline-block;
  }

  /**
  * Remove border from iframe
  */

  iframe {
    border: 0;
  }

  /**
  * Summary
  *
  * 1. Add the correct display in all browsers
  */

  summary {
    display: list-item; /* 1 */
    cursor: pointer;
  }

  /**
  * Progress
  *
  * Add the correct vertical alignment in Chrome, Firefox, and Opera.
  */

  progress {
    vertical-align: baseline;
  }

  /**
  * Hidden attribute
  *
  * Always hide an element with the 'hidden' HTML attribute.
  */

  [hidden] {
    display: none !important;
  }
`;

export default reset;
