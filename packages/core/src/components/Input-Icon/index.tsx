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
import { Icons } from '../Icons/icons';
import Icon from '../Icons';

type InputIconTheme = {
  right?: string;
};

type IconObject = {
  icon: keyof Icons;
  position: 'left' | 'right' | null;
};

type InputIconProps = {
  children?: React.ReactNode;
  icon?: keyof Icons | IconObject | null;
};

type InputIconVariants = {};

type InputIconStates = '_hover' | '_disabled';

function InputIconFunction({
  children,
  icon,
  ...props
}: InputIconProps & InputIconVariants): JSX.Element {
  const className = get(props, 'className', null);

  const useIcon = isObject(icon) ? get(icon, 'icon', null) : icon;
  const iconPosition = isObject(icon) ? get(icon, 'position', 'left') : 'left';

  return (
    <div className={className}>
      <Icon name={useIcon as keyof Icons} />
    </div>
  );
}

InputIconFunction.defaultProps = {
  children: null,
  icon: null
};

const InputIconComponent = styled(InputIconFunction)<
  ThemeComponent & InputIconProps
>`
  ${({ componentCss }) => componentCss};
  align-items: center;
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: 4px 0 4px 4px;
  position: absolute;
`;

const InputIcon = createThemedComponent<
  InputIconTheme,
  InputIconVariants,
  InputIconStates,
  InputIconProps,
  Container
>({
  defaultVariants: {},
  states: [],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: InputIconComponent,

      variantMapping: {},

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          border: theme.borders.md,
          py: `0`,
          right: 'auto'
        }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {
        right: ({ componentProps }) => {
          const { icon } = componentProps;
          const iconPosition = get(icon, 'position', 'left');

          if (iconPosition === 'right') {
            return css`
              left: auto;
              right: 0;
            `;
          } else {
            return;
          }
        }
      }
    };
  }
});

export default InputIcon;
