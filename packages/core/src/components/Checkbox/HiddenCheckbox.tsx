import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

type HiddenCheckboxProps = {
  children?: any;
  hasErrors?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  name?: string;
  onChange?: (event?: any) => void;
  onFocusIn?: any;
  onFocusOut?: any;
  value?: string | number;
};

function HiddenCheckboxFunction({
  hasErrors,
  isChecked,
  isDisabled,
  isRequired,
  name,
  onChange,
  onFocusIn,
  onFocusOut,
  value,
  ...props
}: HiddenCheckboxProps): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <input
      aria-invalid={hasErrors}
      checked={isChecked}
      className={className}
      disabled={isDisabled}
      name={name}
      onBlur={onFocusOut}
      onChange={onChange}
      onFocus={onFocusIn}
      required={isRequired}
      type="checkbox"
      value={value}
    />
  );
}

HiddenCheckboxFunction.defaultProps = {
  isChecked: false,
  isDisabled: false,
  isRequired: false
};

const HiddenCheckboxComponent = styled(HiddenCheckboxFunction)<
  HiddenCheckboxProps
>`
  // border: 0px;
  // clip: rect(0px, 0px, 0px, 0px);
  // height: 1px;
  // margin: -1px;
  // overflow: hidden;
  // padding: 0px;
  // position: absolute;
  // white-space: nowrap;
  // width: 1px;
`;

export default HiddenCheckboxComponent;
