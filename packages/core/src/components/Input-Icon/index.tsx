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

type InputIconTheme = {};

type InputIconProps = {
  children?: React.ReactNode;
};

type InputIconVariants = {};

type InputIconStates = '_hover' | '_disabled';

function InputIconFunction({
  children,
  ...props
}: InputIconProps & InputIconVariants): JSX.Element {
  const className = get(props, 'className', null);
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '42px',
        justifyContent: 'center',
        padding: '4px 0 4px 4px',
        position: 'absolute'
      }}
    >
      <Icon name="Search" />
    </div>
  );
}

const InputIconComponent = styled(InputIconFunction)<
  ThemeComponent & InputIconProps
>`
  ${({ componentCss }) => componentCss};
  position: relative;
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
          py: `0`
        }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {},
    }
  }
})

export default InputIcon;
