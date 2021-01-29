import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { ThemeComponent } from '../../theme';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import createThemedComponent from '../../utils/createThemedComponent';

type CheckboxLabelTheme = {
  labelColor?: string;
};

type CheckboxLabelProps = {
  children?: any;
  hasErrors?: boolean;
};

type CheckboxLabelVariants = {};

type CheckboxLabelStates = '_hover';

function CheckboxLabelFunction({
  children,
  ...props
}: CheckboxLabelProps & CheckboxLabelVariants): JSX.Element {
  const className = get(props, 'className', null);

  return <div className={className}>{children}</div>;
}

const CheckboxLabelComponent = styled(CheckboxLabelFunction)<
  ThemeComponent & CheckboxLabelProps
>`
  ${({ componentCss }) => componentCss};
`;

const CheckboxLabel = createThemedComponent<
  CheckboxLabelTheme,
  CheckboxLabelVariants,
  CheckboxLabelStates,
  CheckboxLabelProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: CheckboxLabelComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: 'none',
          labelColor: theme.dark
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
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

export default CheckboxLabel;
