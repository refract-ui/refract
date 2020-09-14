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

type InputHelpTextTheme = {};

type InputHelpTextProps = {
  children?: string;
};

type InputHelpTextVariants = {};

type InputHelpTextStates = '_hover' | '_active' | '_focus';

function InputHelpTextFunction({
  children,
  ...props
}: InputHelpTextProps & InputHelpTextVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <p className={className}>{children}</p>;
}

const InputHelpTextComponent = styled(InputHelpTextFunction)<
  ThemeComponent & InputHelpTextProps
>`
  ${({ componentCss }) => componentCss};
`;

const InputHelpText = createThemedComponent<
  InputHelpTextTheme,
  InputHelpTextVariants,
  InputHelpTextStates,
  InputHelpTextProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    console.log('In index.tsx, this is theme: ', theme);
    return {
      Component: InputHelpTextComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: 'none',
          // textColor: ({ contrastColor, bg }) => contrastColor(bg),
          // h: '42px',
          border: theme.borders.md,
          // px: `${theme.spacing['3']}`,
          my: `0`,
          py: `0`,
          w: '100%'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {}
    };
  }
});

export default InputHelpText;
