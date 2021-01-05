import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type InputHelpTextTheme = {
  textColor?: string;
};

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
    return {
      Component: InputHelpTextComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: 'none',
          textColor: theme.dark,
          border: theme.borders.md,
          mt: theme.spacing[2],
          mb: `0`,
          py: `0`,
          w: '100%'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
        textColor: ({ textColor }) => {
          return css`
            color: ${textColor};
            font-size: 0.75rem;
          `;
        }
      }
    };
  }
});

export default InputHelpText;
