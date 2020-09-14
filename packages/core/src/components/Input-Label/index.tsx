import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import { Colors } from '../../theme/colors';
import { ThemeColors } from '../../theme/themeColors';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import lightenOrDarken from '../../utils/lightenOrDarken';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type InputLabelTheme = {};

type InputLabelProps = {
  label?: string;
  htmlFor?: string;
};

type InputLabelVariants = {};

type InputLabelStates = '_hover' | '_active' | '_focus';

function InputLabelFunction({
  htmlFor,
  label,
  ...props
}: InputLabelProps & InputLabelVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <label htmlFor={htmlFor}>{label}</label>;
}

const InputLabelComponent = styled(InputLabelFunction)<
  ThemeComponent & InputLabelProps
>`
  ${({ componentCss }) => componentCss};
`;

const InputLabel = createThemedComponent<
  InputLabelTheme,
  InputLabelVariants,
  InputLabelStates,
  InputLabelProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: InputLabelComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: 'none',
          // textColor: ({ contrastColor, bg }) => contrastColor(bg),
          // h: '42px',
          border: theme.borders.md,
          // px: `${theme.spacing['3']}`,
          py: `0`,
          w: '100%'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {}
    };
  }
});

export default InputLabel;
