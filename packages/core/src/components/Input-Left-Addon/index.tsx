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
import InputAddonItem from '../Input-Addon-Item';

type InputLeftAddonTheme = {
  border?: Partial<BorderBreakpointStyle>;
};

type InputLeftAddonProps = {
  children?: React.ReactNode;
  content?: Array<string | React.ReactNode>;
};

type InputLeftAddonVariants = {
  isMaterial?: boolean;
};

type InputLeftAddonStates = '_hover';

function InputLeftAddonFunction({
  content,
  ...props
}: InputLeftAddonProps & InputLeftAddonVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <div className={className}>
      {content.map((itm: string, idx: number) => {
        return (
          <InputAddonItem
            key={`input-addon-${idx}`}
            content={itm}
          ></InputAddonItem>
        );
      })}
    </div>
  );
}

InputLeftAddonFunction.defaultProps = {
  children: null,
  content: []
};

const InputLeftAddonComponent = styled(InputLeftAddonFunction)<
  ThemeComponent & InputLeftAddonProps
>`
  ${({ componentCss }) => componentCss};
  display: flex;
  font-family: 'Work Sans', sans serif;
`;

const InputLeftAddon = createThemedComponent<
  InputLeftAddonTheme,
  InputLeftAddonVariants,
  InputLeftAddonStates,
  InputLeftAddonProps,
  Container
>({
  defaultVariants: {
    isMaterial: false
  },
  states: [],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: InputLeftAddonComponent,

      variantMapping: {
        isMaterial: ({ isMaterial }) => {
          if (isMaterial) {
            return {
              border: {
                ...theme.borders.md,
                borderRadius: `0`,
                borderWidth: `0 0 2px 0`
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
            borderRadius: `${theme.spacing[2]} 0 0 ${theme.spacing[2]}`,
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

export default InputLeftAddon;
