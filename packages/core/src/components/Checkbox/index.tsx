import React, { useState } from 'react';
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
  isReadOnly,
  isRequired,
  name,
  onChange,
  size,
  value,
  ...props
}: CheckboxProps & CheckboxVariants): JSX.Element {
  const className = get(props, 'className', null);

  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <label className={className}>
      <HiddenCheckbox
        isChecked={isChecked}
        isDisabled={isDisabled}
        name={name}
        onFocusOut={() => setIsInputFocused(false)}
        onChange={isReadOnly ? () => false : onChange}
        onFocusIn={() => setIsInputFocused(true)}
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
        // isFocused={isInputFocused}
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
  vertical-align: top;

  // input[type='checkbox']:focus + div {
  //   outline: #5d9dd5 solid 1px;
  //   box-shadow: 0 0px 8px #5e9ed6;
  // }
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
