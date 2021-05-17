import React from 'react';
import { css, createGlobalStyle } from 'styled-components';
import { ThemeComponent } from '../../theme';
import reset from '../../theme/reset';
import createThemedComponent from '../../utils/createThemedComponent';
import mapTypographyStyles from '../../utils/mapTypographyStyles';
import { mapBlockElementStyles } from '../../theme/containers';
import { GlobalStyleTheme } from '../../theme/globalStyles';

const GlobalStylesComponent = createGlobalStyle<ThemeComponent>`
  ${({ componentCss }) => css`
    ${reset};
    ${componentCss};
  `}
`;

const GlobalStylesFC: React.FC<ThemeComponent> = ({ componentCss }) => (
  <GlobalStylesComponent componentCss={componentCss} />
);

const GlobalStyles = createThemedComponent<GlobalStyleTheme>({
  compose: ({ theme }) => {
    return {
      Component: GlobalStylesFC,

      defaultStyleMapping: {
        xs: {
          // block elements
          heading: {
            ...theme.blockElementMappings.heading
          },
          p: {
            ...theme.blockElementMappings.p
          },
          pre: {
            ...theme.blockElementMappings.pre
          },
          kbd: {
            ...theme.blockElementMappings.kbd
          },
          figure: {
            ...theme.blockElementMappings.figure
          },
          table: {
            ...theme.blockElementMappings.table
          },
          label: {
            ...theme.blockElementMappings.label
          },
          legend: {
            ...theme.blockElementMappings.legend
          },
          ol: {
            ...theme.blockElementMappings.ol
          },
          ul: {
            ...theme.blockElementMappings.ul
          },
          li: {
            ...theme.blockElementMappings.li
          },
          address: {
            ...theme.blockElementMappings.address
          },
          dt: {
            ...theme.blockElementMappings.dt
          },
          dd: {
            ...theme.blockElementMappings.dd
          },
          blockquote: {
            ...theme.blockElementMappings.blockquote
          },

          // typography
          h1: {
            ...theme.fontTagMappings.h1,
            size: '3rem'
          },
          h2: {
            ...theme.fontTagMappings.h2,
            size: '2.5rem'
          },
          h3: {
            ...theme.fontTagMappings.h3,
            size: '1.75rem'
          },
          h4: {
            ...theme.fontTagMappings.h4,
            size: '1.5rem'
          },
          h5: {
            ...theme.fontTagMappings.h5,
            size: '1.25rem'
          },
          h6: {
            ...theme.fontTagMappings.h6,
            size: '1rem'
          },
          a: {
            ...theme.fontTagMappings.a,
            size: '1rem'
          },
          display1: {
            ...theme.fontTagMappings.display1,
            size: '6rem'
          },
          display2: {
            ...theme.fontTagMappings.display2,
            size: '5.5rem'
          },
          display3: {
            ...theme.fontTagMappings.display3,
            size: '4.5rem'
          },
          display4: {
            ...theme.fontTagMappings.display4,
            size: '3.5rem'
          },
          default: {
            ...theme.fontTagMappings.default,
            size: '1rem'
          },
          button: {
            ...theme.fontTagMappings.button,
            size: '1.25rem'
          },
          listItem: {
            ...theme.fontTagMappings.listItem,
            size: '100%'
          },
          small: {
            ...theme.fontTagMappings.small,
            size: '80%'
          },
          large: {
            ...theme.fontTagMappings.large,
            size: '120%'
          },
          code: {
            ...theme.fontTagMappings.code,
            size: '1rem'
          }
        }
      },

      mapPropsToStyle: {
        // block-only style mappings
        heading: ({ heading }) =>
          mapBlockElementStyles({
            tagMapping: heading,
            tagName: 'h1,h2,h3,h4,h5,h6'
          }),
        p: ({ p }) => mapBlockElementStyles({ tagMapping: p, tagName: 'p' }),
        pre: ({ pre }) =>
          mapBlockElementStyles({ tagMapping: pre, tagName: 'pre' }),
        kbd: ({ kbd }) =>
          mapBlockElementStyles({ tagMapping: kbd, tagName: 'kbd' }),
        figure: ({ figure }) =>
          mapBlockElementStyles({ tagMapping: figure, tagName: 'figure' }),
        table: ({ table }) =>
          mapBlockElementStyles({ tagMapping: table, tagName: 'table' }),
        label: ({ label }) =>
          mapBlockElementStyles({ tagMapping: label, tagName: 'label' }),
        legend: ({ legend }) =>
          mapBlockElementStyles({ tagMapping: legend, tagName: 'legend' }),
        ol: ({ ol }) =>
          mapBlockElementStyles({ tagMapping: ol, tagName: 'ol' }),
        ul: ({ ul }) =>
          mapBlockElementStyles({ tagMapping: ul, tagName: 'ul' }),
        li: ({ li }) =>
          mapBlockElementStyles({ tagMapping: li, tagName: 'li' }),
        address: ({ address }) =>
          mapBlockElementStyles({ tagMapping: address, tagName: 'address' }),
        dt: ({ dt }) =>
          mapBlockElementStyles({ tagMapping: dt, tagName: 'dt' }),
        dd: ({ dd }) =>
          mapBlockElementStyles({ tagMapping: dd, tagName: 'dd' }),
        blockquote: ({ blockquote }) =>
          mapBlockElementStyles({
            tagMapping: blockquote,
            tagName: 'blockquote'
          }),

        // text-only style mappings
        h1: ({ h1 }) => mapTypographyStyles({ tagMapping: h1, tagName: 'h1' }),
        h2: ({ h2 }) => mapTypographyStyles({ tagMapping: h2, tagName: 'h2' }),
        h3: ({ h3 }) => mapTypographyStyles({ tagMapping: h3, tagName: 'h3' }),
        h4: ({ h4 }) => mapTypographyStyles({ tagMapping: h4, tagName: 'h4' }),
        h5: ({ h5 }) => mapTypographyStyles({ tagMapping: h5, tagName: 'h5' }),
        h6: ({ h6 }) => mapTypographyStyles({ tagMapping: h6, tagName: 'h6' }),
        a: ({ a }) => mapTypographyStyles({ tagMapping: a, tagName: 'a' }),
        display1: ({ display1 }) =>
          mapTypographyStyles({ tagMapping: display1, tagName: '.display-1' }),
        display2: ({ display2 }) =>
          mapTypographyStyles({ tagMapping: display2, tagName: '.display-2' }),
        display3: ({ display3 }) =>
          mapTypographyStyles({ tagMapping: display3, tagName: '.display-3' }),
        display4: ({ display4 }) =>
          mapTypographyStyles({ tagMapping: display4, tagName: '.display-4' }),
        default: props =>
          mapTypographyStyles({ tagMapping: props.default, tagName: 'body' }),
        button: ({ button }) =>
          mapTypographyStyles({ tagMapping: button, tagName: 'button' }),
        listItem: ({ listItem }) =>
          mapTypographyStyles({ tagMapping: listItem, tagName: 'li' }),
        small: ({ small }) =>
          mapTypographyStyles({ tagMapping: small, tagName: 'small' }),
        large: ({ large }) =>
          mapTypographyStyles({ tagMapping: large, tagName: '.large' }),
        code: ({ code }) =>
          mapTypographyStyles({
            tagMapping: code,
            tagName: 'pre,code,kbd,samp'
          })
      }
    };
  }
});

export default GlobalStyles;
