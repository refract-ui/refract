import React, { useState, createContext } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import theme, { ThemeComponent } from '../../theme';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import createThemedComponent from '../../utils/createThemedComponent';
import { Icons } from '../Icons/icons';

type RadioGroupTheme = {
  cursor?: string;
  labelOpacity?: string;
};

type RadioGroupProps = {
  checkedColor?: string;
  radioStatement?: string;
  children?: any;
  hasErrors?: boolean;
  iconColor?: string;
  iconName?: keyof Icons;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  name?: string;
  onChange?: (event?: any) => void;
  size?: 'sm' | 'md' | 'lg';
  value?: string | number;
};

type RadioGroupVariants = {};

type RadioGroupStates = '_hover' | '_active' | '_focus' | '_disabled';

function RadioGroupFunction({
  checkedColor,
  children,
  hasErrors,
  iconColor,
  iconName,
  isDisabled,
  isReadOnly,
  isRequired,
  name,
  onChange,
  size,
  value,
  ...props
}: RadioGroupProps & RadioGroupVariants): JSX.Element {
  const className = get(props, 'className', null);
  const [state, setState] = useState({
    checkedItemIndex: children.findIndex((child: any) => {
      return child.props.isChecked;
    })
  });
  const changeHandler = (evt: any) => {
    if (!isReadOnly) {
      if (onChange) {
        onChange(evt);
      }
      setState({ checkedItemIndex: evt.target.value });
    }
  };

  return (
    <form onChange={changeHandler}>
      {children.map((child: any, i: number) => {
        return React.cloneElement(child, {
          size,
          checkedColor,
          hasErrors,
          iconColor,
          iconName,
          isDisabled,
          isReadOnly,
          isRequired,
          onChange,
          key: `radio${i}`,
          value: i,
          ...props,
          ...child.props,
          isChecked: state.checkedItemIndex == i.toString(),
        });
      })}
    </form>
  );
}

RadioGroupFunction.defaultProps = {
  isDisabled: false,
  isRequired: false,
};

const RadioGroupComponent = styled(RadioGroupFunction)<
  ThemeComponent & RadioGroupProps
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

const RadioGroup = createThemedComponent<
  RadioGroupTheme,
  RadioGroupVariants,
  RadioGroupStates,
  RadioGroupProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: RadioGroupComponent,
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


export default RadioGroup;
