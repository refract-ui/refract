import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type TextCounterTheme = {
  textColor?: string;
};

type TextCounterProps = {
  children?: React.ReactNode;
  maxLength?: number;
  tester?: any;
  currentLength?: number | null;
};

type TextCounterVariants = {};

type TextCounterStates = '_hover' | '_active';

function TextCounterFunction({
  maxLength,
  tester,
  currentLength,
  ...props
}: TextCounterProps & TextCounterVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={className}>{`${currentLength} / ${maxLength}`}</div>;
}

TextCounterFunction.defaultProps = {
  currentLength: 0
};

const TextCounterComponent = styled(TextCounterFunction)<
  ThemeComponent & TextCounterProps
>`
  ${({ componentCss }) => componentCss};
  align-items: center;
  display: flex;
  font-family: 'Work Sans', sans serif;
  font-weight: 300;
  height: 100%;
  justify-content: center;
`;

const TextCounter = createThemedComponent<
  TextCounterTheme,
  TextCounterVariants,
  TextCounterStates,
  TextCounterProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: TextCounterComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: 'none',
          textColor: theme.secondary,
          px: theme.spacing[2]
        }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {
        textColor: ({ textColor }) => css`
          color: ${textColor};
          font-size: 1rem;
          line-height: 19px;
        `
      }
    };
  }
});

export default TextCounter;
