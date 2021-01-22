import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import { DropdownContext, DropdownCtxTypes } from '../Dropdown';
import DropdownListWrapper from '../Dropdown-List-Wrapper';
import { usePopper } from 'react-popper';

type DropdownListTheme = {
  border?: Partial<BorderBreakpointStyle>;
};

type DropdownListProps = {
  children?: React.ReactNode;
  id?: string;
};

type DropdownListVariants = {};

type DropdownListStates = '_hover' | '_active' | '_focus';

function DropdownListFunction({
  children,
  id,
  ...props
}: DropdownListProps & DropdownListVariants): JSX.Element {
  const className = get(props, 'className', null);

  const ddCtx: DropdownCtxTypes = useContext(DropdownContext);

  const { referenceRef, popperRef, placement } = ddCtx;

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: placement,
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 0]
          }
        }
      ]
    }
  );

  return (
    <div
      className={className}
      ref={popperRef}
      style={styles.popper}
      {...attributes.popper}
    >
      <DropdownListWrapper id={id}>{children}</DropdownListWrapper>
    </div>
  );
}

DropdownListFunction.defaultProps = {
  placement: 'bottom-start'
};

const DropdownListComponent = styled(DropdownListFunction)<
  ThemeComponent & DropdownListProps
>`
  box-shadow: 0 2px 6px 0 rgba(45, 45, 49, 0.13);
  overflow-y: scroll;
  z-index: 1;
  ${({ componentCss }) => componentCss};
  ${() => {
    const ddCtx: DropdownCtxTypes = useContext(DropdownContext);
    if (ddCtx.isOpen) {
      return css`
        visibility: visible;
      `;
    } else {
      return css`
        visibility: hidden;
      `;
    }
  }}
`;

const DropdownList = createThemedComponent<
  DropdownListTheme,
  DropdownListVariants,
  DropdownListStates,
  DropdownListProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownListComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: theme.components.dropdowns.bg,
          border: {
            ...theme.borders.md,
            borderWidth: '0',
            py: theme.spacing['3']
          }
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
        border: ({ border }) => {
          return applyBorderStyle(border);
        }
      }
    };
  }
});

export default DropdownList;
