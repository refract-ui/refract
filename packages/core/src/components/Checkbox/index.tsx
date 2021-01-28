import React, { useState } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import createThemedComponent from '../../utils/createThemedComponent';
import CheckboxWrapper from '../Checkbox-Wrapper';

type CheckboxTheme = {};

type CheckboxProps = {
  children?: any;
  isChecked?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  name?: string;
  onChange?: (event?: any) => void;
  value?: string | number;
};

type CheckboxVariants = {};

type CheckboxStates = '_hover' | '_active' | '_focus' | '_disabled';

function CheckboxFunction({
  children,
  isChecked,
  isDisabled,
  isRequired,
  name,
  onChange,
  value,
  ...props
}: CheckboxProps & CheckboxVariants): JSX.Element {
  const className = get(props, 'className', null);

  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
        name={name}
        value={value}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
      <CheckboxWrapper
        isChecked={isChecked}
        isDisabled={isDisabled}
        isRequired={isRequired}
        isFocused={isInputFocused}
      />
      <div>{children}</div>
    </label>
  );
}

CheckboxFunction.defaultProps = {
  isChecked: false,
  isDisabled: false,
  isRequired: false
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

  // input[type='checkbox'] {
  //   border: 0px;
  //   clip: rect(0px, 0px, 0px, 0px);
  //   height: 1px;
  //   margin: -1px;
  //   overflow: hidden;
  //   padding: 0px;
  //   position: absolute;
  //   white-space: nowrap;
  //   width: 1px;
  // }

  &:hover {
    cursor: pointer;
  }
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
          bg: 'none'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {}
    };
  }
});

export default Checkbox;
