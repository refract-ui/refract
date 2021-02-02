import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import theme, { ThemeComponent } from '../../theme';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import createThemedComponent from '../../utils/createThemedComponent';
import StyledCheckbox from './StyledCheckbox';
import HiddenCheckbox from './HiddenCheckbox';
import CheckboxLabel from './CheckboxLabel';
import { Icons } from '../Icons/icons';

type CheckboxTheme = {
  cursor?: string;
  labelOpacity?: string;
};

type CheckboxProps = {
  checkedColor?: string;
  children?: any;
  hasErrors?: boolean;
  iconColor?: string;
  iconName?: keyof Icons;
  isChecked?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  name?: string;
  onChange?: (event?: any) => void;
  size?: 'sm' | 'md' | 'lg';
  value?: string | number;
};

type CheckboxVariants = {};

type CheckboxStates = '_hover' | '_active' | '_focus' | '_disabled';

function CheckboxFunction({
  checkedColor,
  children,
  hasErrors,
  iconColor,
  iconName,
  isChecked,
  isDisabled,
  isIndeterminate,
  isReadOnly,
  isRequired,
  name,
  onChange,
  size,
  value,
  ...props
}: CheckboxProps & CheckboxVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <label className={className}>
      <HiddenCheckbox
        isIndeterminate={isIndeterminate}
        isChecked={isChecked}
        isDisabled={isDisabled}
        name={name}
        onChange={isReadOnly ? () => false : onChange}
        isRequired={isRequired}
        value={value}
      />
      <StyledCheckbox
        checkedColor={checkedColor}
        hasErrors={hasErrors}
        HiddenCheckbox={HiddenCheckbox}
        iconColor={iconColor}
        iconName={iconName}
        isChecked={isChecked}
        isDisabled={isDisabled}
        isIndeterminate={isIndeterminate}
        isRequired={isRequired}
        size={size}
      />
      <CheckboxLabel hasErrors={hasErrors} size={size}>
        {children}
      </CheckboxLabel>
    </label>
  );
}

CheckboxFunction.defaultProps = {
  isChecked: false,
  isDisabled: false,
  isRequired: false,
  size: 'md'
};

const CheckboxComponent = styled(CheckboxFunction)<
  ThemeComponent & CheckboxProps
>`
  ${({ componentCss }) => componentCss};
  align-items: center;
  display: inline-flex;
  font-family: 'Work Sans', sans serif;
  font-weight: 300;
  position: relative;
  user-select: none;
  vertical-align: top;
`;

const Checkbox = createThemedComponent<
  CheckboxTheme,
  CheckboxVariants,
  CheckboxStates,
  CheckboxProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    console.log('In index.tsx, this is theme: ', theme);
    return {
      Component: CheckboxComponent,

      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: 'none',
          cursor: 'pointer',
          labelOpacity: '1'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
        cursor: ({ cursor, componentProps: { isDisabled } }) => {
          let updatedCursor = cursor;
          if (isDisabled) {
            updatedCursor = 'not-allowed';
          }
          return css`
            &:hover {
              cursor: ${updatedCursor};
            }
          `;
        },
        labelOpacity: ({ labelOpacity, componentProps: { isDisabled } }) => {
          return css`
            & > div {
              opacity: ${isDisabled ? '0.4' : labelOpacity};
            }
          `;
        }
      }
    };
  }
});

export default Checkbox;
