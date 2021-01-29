import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import createThemedComponent from '../../utils/createThemedComponent';
import StyledCheckbox from '../Styled-Checkbox';
import HiddenCheckbox from './HiddenCheckbox';

type CheckboxTheme = {
  cursor?: string;
  labelOpacity?: string;
  labelColor?: string;
};

type CheckboxProps = {
  children?: any;
  hasErrors?: boolean;
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
  hasErrors,
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
      <HiddenCheckbox
        isChecked={isChecked}
        isDisabled={isDisabled}
        name={name}
        onFocusOut={() => setIsInputFocused(false)}
        onChange={onChange}
        onFocusIn={() => setIsInputFocused(true)}
        isRequired={isRequired}
        value={value}
      />
      <StyledCheckbox
        hasErrors={hasErrors}
        isChecked={isChecked}
        isDisabled={isDisabled}
        // isFocused={isInputFocused}
        isRequired={isRequired}
        HiddenCheckbox={HiddenCheckbox}
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
          labelOpacity: '1',
          labelColor: theme.dark
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
        },
        labelColor: ({
          theme: { danger },
          labelColor,
          componentProps: { hasErrors }
        }) => {
          return css`
            color: ${hasErrors ? danger : labelColor};
          `;
        }
      }
    };
  }
});

export default Checkbox;
