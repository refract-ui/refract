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

type InputRightAddonTheme = {
  border?: Partial<BorderBreakpointStyle>;
};

type InputRightAddonProps = {
  children?: React.ReactNode;
  content?: Array<string | React.ReactNode>;
};

type InputRightAddonVariants = {
  isMaterial?: boolean;
};

type InputRightAddonStates = '_hover';

function InputRightAddonFunction({
  content,
  ...props
}: InputRightAddonProps & InputRightAddonVariants): JSX.Element {
  const className = get(props, 'className', null);
  console.log('In index.tsx, this is content: ', content);

  return (
    <div className={className}>
      {content.map((itm: string | React.ReactNode, idx: number) => {
        console.log('In index.tsx, this is itm: ', typeof itm);

        return (
          <InputAddonItem
            key={`input-addon-${idx}`}
            content={itm}
            xs={typeof itm === 'object' ? { px: `0` } : null}
          ></InputAddonItem>
        );
      })}
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
  overflow: hidden;
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
