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
  children,
  maxLength,
  tester,
  currentLength,
  ...props
}: TextCounterProps & TextCounterVariants): JSX.Element {
  const className = get(props, 'className', null);
  console.log('tester in TextCounter', tester);

  return <div className={className}>{`${currentLength} / ${maxLength}`}</div>;
}

const TextCounterComponent = styled(TextCounterFunction)<
  ThemeComponent & TextCounterProps
>`
  ${({ componentCss }) => componentCss};
  align-items: center;
  display: flex;
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
