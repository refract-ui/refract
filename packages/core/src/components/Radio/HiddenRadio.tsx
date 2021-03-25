import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

type HiddenRadioProps = {
  children?: any;
  hasErrors?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  isRequired?: boolean;
  name?: string;
  onChange?: (event?: any) => void;
  value?: string | number;
};

function HiddenRadioFunction({
  hasErrors,
  isChecked,
  isDisabled,
  isIndeterminate,
  isRequired,
  name,
  onChange,
  value,
  ...props
}: HiddenRadioProps): JSX.Element {
  const className = get(props, 'className', null);
  const checkRef: React.MutableRefObject<HTMLInputElement> = useRef();

  useEffect(() => {
    if (isIndeterminate) {
      checkRef.current.indeterminate = true;
    }
    if (!isIndeterminate) {
      checkRef.current.indeterminate = false;
    }
  }, [isIndeterminate]);

  return (
    <input
      aria-invalid={hasErrors}
      checked={isChecked}
      className={className}
      disabled={isDisabled}
      name={name}
      onChange={onChange}
      ref={checkRef}
      required={isRequired}
      type="radio"
      value={value}
    />
  );
}

HiddenRadioFunction.defaultProps = {
  isChecked: false,
  isDisabled: false,
  isRequired: false
};

const HiddenRadioComponent = styled(HiddenRadioFunction)<
  HiddenRadioProps
>`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default HiddenRadioComponent;
