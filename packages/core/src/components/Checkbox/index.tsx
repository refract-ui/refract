import React from 'react';
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
  isChecked,
  isDisabled,
  isRequired,
  name,
  onChange,
  value,
  ...props
}: CheckboxProps & CheckboxVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <label
      className={className}
      htmlFor="gfx-checkbox"
      onClick={e => {
        e.preventDefault();
        onChange();
      }}
    >
      <input
        type="checkbox"
        id="gfx-checkbox"
        // checked={isChecked}
        // onChange={() => null}
      />
      <CheckboxWrapper
        isChecked={isChecked}
        isDisabled={isDisabled}
        isRequired={isRequired}
        name={name}
        value={value}
        // onChange={onChange}
      >
        Checkbox
      </CheckboxWrapper>
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

  input[type='checkbox'] {
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

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
