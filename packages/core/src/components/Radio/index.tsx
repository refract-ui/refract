import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import theme, { ThemeComponent } from '../../theme';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import createThemedComponent from '../../utils/createThemedComponent';
import StyledRadio from './StyledRadio';
import HiddenRadio from './HiddenRadio';
import RadioLabel from './RadioLabel';
import { Icons } from '../Icons/icons';

type RadioTheme = {
  cursor?: string;
  labelOpacity?: string;
};

type RadioProps = {
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

type RadioVariants = {};

type RadioStates = '_hover' | '_active' | '_focus' | '_disabled';

function RadioFunction({
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
  value,
  ...props
}: RadioProps & RadioVariants): JSX.Element {
  const className = get(props, 'className', null);
  return (
    <label className={className}>
      <HiddenRadio
        isIndeterminate={isIndeterminate}
        isChecked={isChecked}
        isDisabled={isDisabled || isReadOnly}
        name={name}
        onChange={isReadOnly ? () => false : onChange}
        isRequired={isRequired}
        value={value}
      />
      <StyledRadio
        checkedColor={checkedColor}
        hasErrors={hasErrors}
        HiddenRadio={HiddenRadio}
        iconColor={iconColor}
        iconName={iconName}
        isChecked={isChecked}
        isDisabled={isDisabled || isReadOnly}
        isIndeterminate={isIndeterminate}
        isRequired={isRequired}
        size={props.size}
        onChange={isReadOnly ? () => false : onChange}
      />
      <RadioLabel hasErrors={hasErrors} size={props.size}>
        {children}
      </RadioLabel>
    </label>
  );
}

RadioFunction.defaultProps = {
  isChecked: false,
  isDisabled: false,
  isRequired: false,
  iconColor: 'green',
  size: 'md'
};

const RadioComponent = styled(RadioFunction)<ThemeComponent & RadioProps>`
  ${({ componentCss }) => componentCss};
  align-items: center;
  display: inline-flex;
  font-family: 'Work Sans', sans serif;
  font-weight: 300;
  margin: 20px;
  position: relative;
  user-select: none;
  vertical-align: top;
`;

const Radio = createThemedComponent<
  RadioTheme,
  RadioVariants,
  RadioStates,
  RadioProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: RadioComponent,
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

export default Radio;
