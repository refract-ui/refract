import React from 'react';
import styled, { css } from 'styled-components';
import { get, isObject } from 'lodash';
import { ThemeComponent } from '../../theme';
import { ThemeColors } from '../../theme/themeColors';
import { ThemeColorShades } from '../../theme/themeColorShades';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import lightenOrDarken from '../../utils/lightenOrDarken';

type CheckboxWrapperTheme = {};

type CheckboxWrapperProps = {
  children?: any;
};

type CheckboxWrapperVariants = {};

type CheckboxWrapperStates = '_hover' | '_active' | '_focus' | '_disabled';

function CheckboxWrapperFunction({
  children,
  ...props
}: CheckboxWrapperProps & CheckboxWrapperVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={className}>{children}</div>;
}

const CheckboxWrapperComponent = styled(CheckboxWrapperFunction)<
  ThemeComponent & CheckboxWrapperProps
>`
  ${({ componentCss }) => componentCss};
`;

const CheckboxWrapper = createThemedComponent<
  CheckboxWrapperTheme,
  CheckboxWrapperVariants,
  CheckboxWrapperStates,
  CheckboxWrapperProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: CheckboxWrapperComponent,

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

export default CheckboxWrapper;
