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

type InputAddonTheme = {
  border?: Partial<BorderBreakpointStyle>;
};

type InputAddonProps = {
  children?: React.ReactNode;
};

type InputAddonVariants = {};

type InputAddonStates = '_hover';

function InputAddonFunction({
  children,
  ...props
}: InputAddonProps & InputAddonVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={`${className} gfx-input-addon`}>{children}</div>;
}

const InputAddonComponent = styled(InputAddonFunction)<
  ThemeComponent & InputAddonProps
>`
  ${({ componentCss }) => componentCss};
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;

  &:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  &:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }

  > *:not(button) {
    padding-left: ${({ theme }) => theme.spacing[2]};
    padding-right: ${({ theme }) => theme.spacing[2]};
  }

  button {
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0;
  }
`;

const InputAddon = createThemedComponent<
  InputAddonTheme,
  InputAddonVariants,
  InputAddonStates,
  InputAddonProps,
  Container
>({
  defaultVariants: {},
  states: [],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: InputAddonComponent,

      variantMapping: {},

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          border: {
            ...theme.borders.md,
            borderColor: theme['secondary'],
            borderRadius: `0`,
            borderWidth: '2px'
          }
        }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {
        border: ({ border }) => {
          return applyBorderStyle(border);
        }
      }
    };
  }
});

export default InputAddon;
