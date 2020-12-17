import React from 'react';
import styled, { css } from 'styled-components';
import { get, isObject } from 'lodash';
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
import InputAddon from './../Input-Addon';

type InputRightAddonTheme = {
  border?: Partial<BorderBreakpointStyle>;
};

type InputRightAddonProps = {
  children?: React.ReactNode;
  content?: any;
};

type InputRightAddonVariants = {
  isMaterial?: boolean;
};

type InputRightAddonStates = '_hover';

function InputRightAddonFunction({
  children,
  content,
  ...props
}: InputRightAddonProps & InputRightAddonVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <div className={className}>
      {content.map((itm: string, idx: number) => (
        <InputAddon key={`input-addon-${idx}`}>{itm}</InputAddon>
      ))}
    </div>
  );
}

InputRightAddonFunction.defaultProps = {
  children: null,
  content: []
};

const InputRightAddonComponent = styled(InputRightAddonFunction)<
  ThemeComponent & InputRightAddonProps
>`
  ${({ componentCss }) => componentCss};
  border-left: 0;
  display: flex;
`;

const InputRightAddon = createThemedComponent<
  InputRightAddonTheme,
  InputRightAddonVariants,
  InputRightAddonStates,
  InputRightAddonProps,
  Container
>({
  defaultVariants: {
    isMaterial: false
  },
  states: [],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: InputRightAddonComponent,

      variantMapping: {
        isMaterial: ({ isMaterial }) => {
          if (isMaterial) {
            return {
              border: {
                ...theme.borders.md,
                borderWidth: `0 0 2px 0`,
                borderRadius: `0`
              }
            };
          }
        }
      },

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          border: {
            ...theme.borders.md,
            borderColor: theme['secondary'],
            borderRadius: `0 ${theme.spacing[2]} ${theme.spacing[2]} 0`,
            borderWidth: `2px`
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

export default InputRightAddon;
