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

type CheckboxTheme = {};

type CheckboxProps = {};

type CheckboxVariants = {};

type CheckboxStates = '_hover' | '_active' | '_focus' | '_disabled';

function CheckboxFunction({
  ...props
}: CheckboxProps & CheckboxVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <input type="checkbox" />;
}

const CheckboxComponent = styled(CheckboxFunction)<
  ThemeComponent & CheckboxProps
>`
  ${({ componentCss }) => componentCss};
`;

const Checkbox = createThemedComponent<
  CheckboxTheme,
  CheckboxVariants,
  CheckboxStates,
  CheckboxProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: CheckboxComponent,

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

export default Checkbox;
