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

type InputLabelTheme = {
  textColor?: string;
};

type InputLabelProps = {
  htmlFor?: string;
  children?: string;
};

type InputLabelVariants = {};

type InputLabelStates = '_hover' | '_active' | '_focus';

function InputLabelFunction({
  htmlFor,
  children,
  ...props
}: InputLabelProps & InputLabelVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
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
          textColor: theme.secondary,
          border: theme.borders.md,
          mb: theme.spacing[2],
          py: `0`,
          w: '100%'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
        textColor: ({ textColor }) => {
          return css`
            color: ${textColor};
            font-size: 0.875rem;
          `;
        }
      }
    };
  }
});

export default InputLabel;
