import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import lightenOrDarken from '../../utils/lightenOrDarken';

type CollapsingSectionTheme = {
  textColor?: string;
  iconColor?: string;
};

type CollapsingSectionProps = {
  children?: any;
  title?: string;
};

type CollapsingSectionVariants = {};

type CollapsingSectionStates = '_hover' | '_active' | '_focus';

function CollapsingSectionFunction({
  children,
  title,
  ...props
}: CollapsingSectionProps & CollapsingSectionVariants): JSX.Element {
  const className = get(props, 'className', null);

  const [isSectionOpen, setIsSectionOpen] = useState(false);

  return (
    <div
      onClick={e => {
        e.stopPropagation();
        setIsSectionOpen(!isSectionOpen);
      }}
    >
      {title && <p className={className}>{title}</p>}
      {isSectionOpen && children}
    </div>
  );
}

const CollapsingSectionComponent = styled(CollapsingSectionFunction)<
  ThemeComponent & CollapsingSectionProps
>`
  ${({ componentCss }) => componentCss};
  font-family: 'Work Sans', sans serif;
  font-weight: 300;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const CollapsingSection = createThemedComponent<
  CollapsingSectionTheme,
  CollapsingSectionVariants,
  CollapsingSectionStates,
  CollapsingSectionProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: CollapsingSectionComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: theme.components.dropdowns.bg,
          border: {
            ...theme.borders.xs,
            borderWidth: '0'
          },
          fontSize: '1rem',
          px: theme.spacing['3'],
          py: theme.spacing['2'],
          textColor: ({ contrastColor, bg }) => contrastColor(bg),
          iconColor: ({ textColor }) =>
            lightenOrDarken({ color: textColor, amount: 30 }),
          w: '100%',
          opacity: '1',
          pointerEvents: 'auto'
        }
      },
      cascadeStateProps: {
        textColor: {
          _hover: ({ contrastColor, bg }) => {
            return contrastColor(bg);
          }
        }
      },
      mapPropsToStyle: {
        textColor: ({ textColor }) => {
          return css`
            color: ${textColor};
          `;
        }
      }
    };
  }
});

export default CollapsingSection;
