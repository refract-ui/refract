import React from 'react';
import styled, { css } from 'styled-components';
import { get, find, pick } from 'lodash';
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
import InputIcon from './../Input-Icon';

type TextInputMaterialTheme = {
  border: Partial<BorderBreakpointStyle>;
  textColor?: string;
  iconStyle?: string;
};

type IconObject = {
  icon: keyof Icons;
  position: 'left' | 'right' | null;
  color?: keyof ThemeColors;
  onClick?: (ev: any) => void;
};

type TextInputMaterialProps = {
  placeholder?: string;
  value?: string;
  success?: boolean;
  error?: boolean;
  id?: string;
  onChange?: (ev: any) => void;
  disabled?: boolean;
  icons?: Array<IconObject | null>;
  type?: string;
};

type TextInputMaterialVariants = {
  size: 'sm' | 'md';
};

type TextInputMaterialStates = '_hover' | '_active' | '_focus' | '_disabled';

function TextInputMaterialFunction({
  placeholder,
  value,
  id,
  onChange,
  disabled,
  icons,
  type,
  ...props
}: TextInputMaterialProps & TextInputMaterialVariants): JSX.Element {
  const className = get(props, 'className', null);
  if (icons) {
    return (
      <>
        {icons &&
          icons.map((ic, idx) => {
            const icon = pick(ic, ['icon', 'position']);
            return (
              <InputIcon
                icon={icon}
                key={`input-group-icon-${idx}`}
                color={ic.color}
                iconStyle="material"
                onClick={ic.onClick}
              />
            );
          })}
        <input
          className={className}
          placeholder={placeholder}
          value={value}
          id={id}
          onChange={onChange}
          disabled={disabled}
          type={type}
        />
      </>
    );
  } else {
    return (
      <input
        className={className}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
        disabled={disabled}
        type={type}
      />
    );
  }
}

const TextInputMaterialComponent = styled(TextInputMaterialFunction)<
  ThemeComponent & TextInputMaterialProps
>`
  ${({ componentCss }) => componentCss};
  border-left: none;
  border-right: none;
  border-top: none;
  box-sizing: border-box;
  font-family: 'Work Sans', sans serif;
  font-weight: 300;

  :focus,
  :active {
    outline: none;
  }

  :disabled {
    opacity: 0.5;
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
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
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
            borderColor: theme['secondary'],
            borderWidth: theme.borders.md.borderWidth
          },
          h: '42px',
          px: `0`,
          py: `0`,
          w: '100%',
          iconStyle: '0'
        },

        sm: {
          w: '320px'
        },

        md: {
          w: '320px'
        }
      },

      // hover, active state handling here:
      cascadeStateProps: {
        border: {
          _hover: () => {
            return {
              borderColor: theme['dark']
            };
          },
          _focus: () => ({
            borderColor: theme['primary'],
            borderWidth: '2px'
          }),
          _disabled: props => {
            return {
              borderColor: theme['secondary']
            };
          }
        },
        bg: {
          _disabled: () => 'none'
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
        iconStyle: ({ componentProps: { icons } }) => {
          if (
            icons &&
            find(icons, ['position', 'left']) &&
            !find(icons, ['position', 'right'])
          ) {
            return css`
              padding-left: 2.5rem !important;
            `;
          }
          if (
            icons &&
            find(icons, ['position', 'left']) &&
            find(icons, ['position', 'right'])
          ) {
            return css`
              padding-left: 2.5rem !important;
              padding-right: 2.5rem !important;
            `;
          }
          if (
            icons &&
            find(icons, ['position', 'right']) &&
            !find(icons, ['position', 'left'])
          ) {
            return css`
              padding-right: 2.5rem !important;
            `;
          }
          return css``;
        },
        border: ({
          componentProps: { success, error },
          border: { borderColor, borderWidth }
        }) => {
          if (success) {
            return css`
              border-bottom-color: ${theme['success']};
              border-bottom-width: ${borderWidth};
            `;
          }
          if (error) {
            return css`
              border-bottom-color: ${theme['danger']};
              border-bottom-width: ${borderWidth};
            `;
          } else {
            return css`
              border-bottom-color: ${borderColor};
              border-bottom-width: ${borderWidth};
            `;
          }
        }
      }
    };
  }
});

export default TextInputMaterial;
