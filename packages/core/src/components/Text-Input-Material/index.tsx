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

type TextInputMaterialTheme = {
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
};

type TextInputMaterialProps = {
  placeholder?: string;
  value?: string;
};

type TextInputMaterialVariants = {
  size: 'sm' | 'md';
};

type TextInputMaterialStates = '_hover' | '_active' | '_focus';

function TextInputMaterialFunction({
  placeholder,
  value,
  ...props
}: TextInputMaterialProps & TextInputMaterialVariants): JSX.Element {
  const className = get(props, 'className', null);
  return (
    <input className={className} placeholder={placeholder} value={value} />
  );
}

const TextInputMaterialComponent = styled(TextInputMaterialFunction)<
  ThemeComponent & TextInputMaterialProps
>`
  ${({ componentCss }) => componentCss};
  border-bottom-width: 1px;
  border-left: none;
  border-right: none;
  border-top: none;
  font-family: 'Work Sans', sans serif;
  font-weight: 300;

  :focus,
  :active {
    outline: none;
  }
`;

const TextInputMaterial = createThemedComponent<
  TextInputMaterialTheme,
  TextInputMaterialVariants,
  TextInputMaterialStates,
  TextInputMaterialProps,
  Container
>({
  defaultVariants: {
    size: 'md'
  },
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    console.log('At top of materialcompose: , this is variant: ', variant);
    console.log('At top of materialcompose: , this is theme: ', theme);
    return {
      Component: TextInputMaterialComponent,

      variantMapping: {
        size: ({ size }) => {
          if (size === 'sm') {
            return {
              py: `${theme.spacing['0']}`
            };
          } else {
            return {
              py: `${theme.spacing['1']}`
            };
          }
        }
      },

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          textColor: theme['dark'],
          border: {
            borderRadius: '0',
            borderColor: theme['secondary']
          },
          h: '42px',
          px: `${theme.spacing['3']}`,
          py: `0`,
          w: '100%'
        },

        sm: {
          w: '320px'
        },

        md: {
          px: `${theme.spacing['4']}`,
          w: '320px'
        }
      },

      // hover, active state handling here:
      cascadeStateProps: {
        border: {
          _focus: () => ({
            borderColor: theme['primary']
          }),
          _hover: () => {
            return {
              borderColor: theme['dark']
            };
          }
        }
      },

      mapPropsToStyle: {
        textColor: ({ textColor }) => {
          return css`
            color: ${textColor};
            font-size: 1rem;
            line-height: 19px;
          `;
        },
        border: props => {
          return css`
            border-bottom-color: ${props.border.borderColor};
          `;
        }
      }
    };
  }
});

export default TextInputMaterial;
