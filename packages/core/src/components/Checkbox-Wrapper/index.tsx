import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import createThemedComponent from '../../utils/createThemedComponent';

import Icon from '../Icons';

type CheckboxWrapperTheme = {
  border?: Partial<BorderBreakpointStyle>;
  outline?: string;
  outlineColor?: string;
};

type CheckboxWrapperProps = {
  children?: any;
  HiddenCheckbox?: any;
  isDisabled?: boolean;
  isFocused?: boolean;
  isRequired?: boolean;
  name?: string;
  onChange?: (event: any) => void;
  value?: string | number;
};

type CheckboxWrapperVariants = {
  hasErrors?: boolean;
  isChecked?: boolean;
};

type CheckboxWrapperStates = '_hover' | '_active' | '_focus' | '_disabled';

function CheckboxWrapperFunction({
  children,
  isChecked,
  ...props
}: CheckboxWrapperProps & CheckboxWrapperVariants): JSX.Element {
  const className = get(props, 'className', null);

  return (
    <>
      <div className={className} aria-hidden>
        {isChecked && <Icon name="Check" iconColor="white" />}
      </div>
      <div className="gfx-checkbox-wrapper">{children}</div>
    </>
  );
}

const CheckboxWrapperComponent = styled(CheckboxWrapperFunction)<
  ThemeComponent & CheckboxWrapperProps
>`
  ${({ componentCss, ...props }) => {
    console.log('In index.tsx, this is props: ', props);
    return componentCss;
  }};
  align-items: center;
  display: flex;
  justify-content: center;
`;

const CheckboxWrapper = createThemedComponent<
  CheckboxWrapperTheme,
  CheckboxWrapperVariants,
  CheckboxWrapperStates,
  CheckboxWrapperProps,
  Container
>({
  defaultVariants: {
    hasErrors: false,
    isChecked: false
  },
  states: ['_hover', '_active', '_focus', '_disabled'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: CheckboxWrapperComponent,

      variantMapping: {
        isChecked: ({ isChecked }) => {
          if (isChecked) {
            return {
              bg: theme.primary
            };
          }
        },
        hasErrors: ({ hasErrors }) => {
          if (hasErrors) {
            return {
              border: {
                ...theme.borders.xs,
                borderColor: theme.danger
              }
            };
          }
        }
      },
      defaultStyleMapping: {
        xs: {
          bg: 'none',
          border: {
            ...theme.borders.xs,
            borderWidth: '1px',
            borderColor: theme.secondary
          },
          h: '10px',
          mr: theme.spacing['2'],
          outline: 'none',
          outlineColor: theme.primary,
          w: '10px'
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
        border: ({ border, ...props }) => {
          return applyBorderStyle(border);
        },
        outline: ({ componentProps: { HiddenCheckbox }, outlineColor }) => {
          return css`
            ${HiddenCheckbox}:focus + & {
              box-shadow: 0 0px 3px ${outlineColor};
              /* outline: ${outlineColor} solid 1px; */
            }
          `;
        }
      }
    };
  }
});

export default CheckboxWrapper;
