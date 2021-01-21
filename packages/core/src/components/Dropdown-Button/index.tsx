import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import Button from '../Button';
import { DropdownContext } from '../Dropdown';
import { Icons } from '../Icons/icons';
import { ThemeColors } from '../../theme/themeColors';

type DropdownButtonTheme = {};

type IconObject = {
  icon: keyof Icons;
  position: 'left' | 'right' | null;
};

type DropdownButtonProps = {
  icon?: keyof Icons | IconObject | null;
  color?: keyof ThemeColors;
  children?: string;
  ariaControls?: string;
};

type DropdownButtonVariants = {};

type DropdownButtonStates = '_hover' | '_active' | '_focus';

type DropdownCtx = {
  isOpen?: boolean;
  setIsOpen?: (arg0: boolean) => boolean;
  referenceRef?: any;
};

function DropdownButtonFunction({
  children,
  color,
  icon,
  ariaControls,
  ...props
}: DropdownButtonProps & DropdownButtonVariants): JSX.Element {
  const className = get(props, 'className', null);

  const ddCtx: DropdownCtx = useContext(DropdownContext);

  return (
    <Button
      icon={icon}
      color={color}
      onClick={() => ddCtx.setIsOpen(!ddCtx.isOpen)}
      ariaExpanded={ddCtx.isOpen}
      ariaControls={ariaControls}
    >
      {children}
    </Button>
  );
}

const DropdownButtonComponent = styled(DropdownButtonFunction)<
  ThemeComponent & DropdownButtonProps
>`
  ${({ componentCss }) => componentCss};
`;

const DropdownButton = createThemedComponent<
  DropdownButtonTheme,
  DropdownButtonVariants,
  DropdownButtonStates,
  DropdownButtonProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: DropdownButtonComponent,

      variantMapping: {},

      defaultStyleMapping: {
        xs: {
          bg: 'none',
          w: 'auto'
        }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {}
    };
  }
});

export default DropdownButton;
