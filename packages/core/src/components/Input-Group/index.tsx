import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';

type InputGroupTheme = {
  border: Partial<BorderBreakpointStyle>;
};

type InputGroupProps = {
  children?: React.ReactNode;
  success?: boolean;
  error?: boolean;
};

type InputGroupVariants = {
  filled?: boolean;
};

type InputGroupStates = '_hover' | '_focus-within' | '_disabled';

function InputGroupFunction({
  children,
  ...props
}: InputGroupProps & InputGroupVariants): JSX.Element {
  const className = get(props, 'className', null);
  return <div className={`${className} input-group`}>{children}</div>;
}

const InputGroupComponent = styled(InputGroupFunction)<
  ThemeComponent & InputGroupProps
>`
  ${({ componentCss }) => componentCss};
  display: flex;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;

  .gfx-input-addon + .gfx-text-input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .gfx-text-input:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .gfx-text-input {
    border: 0;
  }

  .gfx-input-addon {
    border-top: 0;
    border-bottom: 0;

    :first-child {
      border-left: 0;
    }

    :last-child {
      border-right: 0;
    }
  }
`;

const InputGroup = createThemedComponent<
  InputGroupTheme,
  InputGroupVariants,
  InputGroupStates,
  InputGroupProps,
  Container
>({
  defaultVariants: {
    filled: false
  },
  states: [],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: InputGroupComponent,

      variantMapping: {
        filled: ({ filled }) => {
          if (filled) {
            return {
              bg: theme['gray300'],
              border: {
                borderColor: 'transparent'
              }
            };
          } else {
            return {
              bg: 'transparent',
              textColor: theme['dark'],
              border: {
                borderColor: theme.components.inputs.borders.borderColor
              }
            };
          }
        }
      },

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          border: theme.components.inputs.borders,
          py: `0`
        }
      },

      cascadeStateProps: {
        border: {
          _hover: () => {
            return {
              borderColor: theme['dark']
            };
          },
          ['_focus-within']: () => {
            return {
              borderColor: theme['primary']
            };
          }
        }
      },

      mapPropsToStyle: {
        border: ({
          componentProps: { success, error },
          border: { borderColor, borderWidth, borderStyle, borderRadius }
        }) => {
          if (success) {
            return applyBorderStyle({
              borderColor: theme['success'],
              borderWidth,
              borderStyle,
              borderRadius
            });
          }
          if (error) {
            return applyBorderStyle({
              borderColor: theme['danger'],
              borderWidth,
              borderStyle,
              borderRadius
            });
          }
          return applyBorderStyle({
            borderColor,
            borderWidth,
            borderStyle,
            borderRadius
          });
        }
      }
    };
  }
});

export default InputGroup;
