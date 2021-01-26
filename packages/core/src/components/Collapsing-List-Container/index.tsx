import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type CollapsingListContainerTheme = {
  maxH?: string;
};

type CollapsingListContainerProps = {
  children?: React.ReactNode;
};

type CollapsingListContainerVariants = {
  isSectionOpen?: boolean;
};

type CollapsingListContainerStates = '_hover';

function CollapsingListContainerFunction({
  children,
  ...props
}: CollapsingListContainerProps &
  CollapsingListContainerVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={className}>{children}</div>;
}

const CollapsingListContainerComponent = styled(
  CollapsingListContainerFunction
)<ThemeComponent & CollapsingListContainerProps>`
  ${({ componentCss }) => componentCss};
  overflow: hidden;
`;

const CollapsingListContainer = createThemedComponent<
  CollapsingListContainerTheme,
  CollapsingListContainerVariants,
  CollapsingListContainerStates,
  CollapsingListContainerProps,
  Container
>({
  defaultVariants: {
    isSectionOpen: false
  },
  states: ['_hover'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: CollapsingListContainerComponent,
      variantMapping: {
        isSectionOpen: ({ isSectionOpen }) => {
          if (isSectionOpen) {
            return {
              maxH: '1000px'
            };
          }
        }
      },
      defaultStyleMapping: {
        xs: {
          bg: theme.components.dropdowns.bg,
          ml: theme.spacing['3'],
          maxH: '0'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {}
    };
  }
});

export default CollapsingListContainer;
