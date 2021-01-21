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

  const { styles, attributes } = usePopper(
    ddCtx.referenceRef.current,
    ddCtx.popperRef.current,
    {
      placement: ddCtx.placement,
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
      ref={ddCtx.popperRef}
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
          bg: 'none'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {}
    };
  }
});

export default DropdownList;
