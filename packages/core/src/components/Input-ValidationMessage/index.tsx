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
import { Icons } from '../Icons/icons';
import Icon from '../Icons';

type InputValidationMessageTheme = {
  textColor?: string;
};

type InputValidationMessageProps = {
  children?: string;
  success?: boolean;
  error?: boolean;
};

type InputValidationMessageVariants = {};

type InputValidationMessageStates = '_hover' | '_active' | '_focus';

function InputValidationMessageFunction({
  children,
  success,
  error,
  ...props
}: InputValidationMessageProps & InputValidationMessageVariants): JSX.Element {
  const className = get(props, 'className', null);

  if (children && error) {
    return (
      <div className={className}>
        <Icon name="Info" size="sm" color="danger" />
        <div>{children}</div>
      </div>
    );
  }
  if (children && success) {
    return (
      <div className={className}>
        <Icon name="Check" size="sm" color="success" />
        <div>{children}</div>
      </div>
    );
  } else {
    return null;
  }
}

const InputValidationMessageComponent = styled(InputValidationMessageFunction)<
  ThemeComponent & InputValidationMessageProps
>`
  ${({ componentCss }) => componentCss};
  display: flex;

  svg {
    margin-right: 7px;
  }
`;

const InputValidationMessage = createThemedComponent<
  InputValidationMessageTheme,
  InputValidationMessageVariants,
  InputValidationMessageStates,
  InputValidationMessageProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    console.log('In index.tsx, this is theme: ', theme);
    return {
      Component: InputValidationMessageComponent,
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
        textColor: ({ textColor, componentProps: { success, error } }) => {
          if (success) {
            return css`
              color: ${theme['success']};
              font-size: 0.75rem;
            `;
          }
          if (error) {
            return css`
              color: ${theme['danger']};
              font-size: 0.75rem;
            `;
          }
          return css`
            color: ${textColor};
            font-size: 0.75rem;
          `;
        }
      }
    };
  }
});

export default InputValidationMessage;
