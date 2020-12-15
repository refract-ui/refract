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

type InputLeftAddonTheme = {
  border?: Partial<BorderBreakpointStyle>;
};

type InputLeftAddonProps = {
  children?: React.ReactNode;
  content?: any;
};

type InputLeftAddonVariants = {};

type InputLeftAddonStates = '_hover';

function InputLeftAddonFunction({
  children,
  content,
  ...props
}: InputLeftAddonProps & InputLeftAddonVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <div className={className}>
      {content.map((itm: string, idx: number) => (
        <InputAddon key={`input-addon-${idx}`}>{itm}</InputAddon>
      ))}
    </div>
  );
}

InputLeftAddonFunction.defaultProps = {
  children: null
};

const InputLeftAddonComponent = styled(InputLeftAddonFunction)<
  ThemeComponent & InputLeftAddonProps
>`
  ${({ componentCss }) => componentCss};
  display: flex;
  font-family: 'Work Sans', sans serif;
  overflow: hidden;
  border-right: 0;
`;

const InputLeftAddon = createThemedComponent<
  InputLeftAddonTheme,
  InputLeftAddonVariants,
  InputLeftAddonStates,
  InputLeftAddonProps,
  Container
>({
  defaultVariants: {},
  states: [],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: InputLeftAddonComponent,

      variantMapping: {},

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          border: {
            ...theme.borders.md,
            borderColor: theme['secondary'],
            borderRadius: `${theme.spacing[2]} 0 0 ${theme.spacing[2]}`
          }
        }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {
        border: ({ border }) => {
          // console.log('In border, this is border: ', border);
          return applyBorderStyle(border);
        }
      }
    };
  }
});

export default InputLeftAddon;
