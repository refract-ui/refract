import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import Button from '../Button';
import { DropdownContext, DropdownCtxTypes } from '../Dropdown';
import { Icons } from '../Icons/icons';
import { ThemeColors } from '../../theme/themeColors';

type DropdownButtonTheme = {};

type IconObject = {
  icon: keyof Icons;
  position: 'left' | 'right' | null;
};

type IconType = keyof Icons | IconObject | null;

type DropdownButtonProps = {
  activeIcon?: IconType;
  closedIcon?: IconType;
  color?: keyof ThemeColors;
  children?: string;
  ariaControls?: string;
};

type DropdownButtonVariants = {};

type DropdownButtonStates = '_hover' | '_active' | '_focus';

function renderIcon(
  isOpen: boolean,
  closedIcon: IconType,
  activeIcon: IconType
): IconType {
  let icon;
  if (closedIcon && !activeIcon) {
    icon = closedIcon;
  }
  if (!isOpen && closedIcon && activeIcon) {
    icon = closedIcon;
  }
  if (isOpen && closedIcon && activeIcon) {
    icon = activeIcon;
  }
  return icon;
}

function DropdownButtonFunction({
  children,
  color,
  ariaControls,
  activeIcon,
  closedIcon,
  ...props
}: DropdownButtonProps & DropdownButtonVariants): JSX.Element {
  const ddCtx: DropdownCtxTypes = useContext(DropdownContext);

  const { isOpen, setIsOpen, referenceRef } = ddCtx;

  return (
    <Button
      icon={renderIcon(isOpen, closedIcon, activeIcon)}
      color={color}
      onClick={() => setIsOpen(!isOpen)}
      ariaExpanded={isOpen}
      ariaControls={ariaControls}
      buttonRef={referenceRef}
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
