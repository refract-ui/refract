import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { Theme, ThemeComponent } from '../theme';
import { ThemeColors } from '../theme/themeColors';
import {
  ButtonThemeBase,
  ButtonThemeBreakpoint,
  genButtonTheme
} from '../theme/buttons';
import { applyBorderStyle } from '../theme/borders';
import { ExtendTheme } from '../utils/componentThemeBreakpoints';
import applyComponentTheme from '../utils/applyComponentTheme';

const StyledButton = styled.button<ThemeComponent>`
  ${({ componentCss }) => componentCss};
`;

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  theme?: Theme;
  extendTheme?: ExtendTheme<ButtonThemeBreakpoint>;
  color?: keyof ThemeColors;
}

function applyThemeState(props: Partial<ButtonThemeBase>) {
  return css`
    ${props.border && applyBorderStyle(props.border)}

    ${
      props.px &&
      css`
        padding-left: ${props.px};
        padding-right: ${props.px};
      `
    }

    ${
      props.py &&
      css`
        padding-top: ${props.py};
        padding-bottom: ${props.py};
      `
    }

    ${
      props.backgroundColor &&
      css`
        background-color: ${props.backgroundColor};
      `
    }

    ${
      props.textColor &&
      css`
        color: ${props.textColor};
      `
    }
  `;
}

function applyThemeBreakpoint(props: ButtonThemeBreakpoint) {
  return css`
    ${applyThemeState(props)};

    ${props._hover &&
    css`
      :hover {
        ${applyThemeState(props._hover(props))};
      }
    `}

    ${props._active &&
    css`
      :active {
        ${applyThemeState(props._active(props))};
      }
    `}
  `;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  theme: themeProps,
  extendTheme,
  color
}) => {
  const themeContext = useContext(ThemeContext);

  // start with the global theme, either from context or passed in as a prop
  const theme = themeProps || themeContext;

  // use the global theme to generate the default theme settings
  const defaultComponentTheme = genButtonTheme({
    theme,
    color
  });

  // use the extended theme along with the `applyThemeBreakpoint` function
  // specific to this method to generate the final style for this component
  const componentCss = applyComponentTheme<ButtonThemeBreakpoint>({
    theme,
    defaultComponentTheme,
    extendTheme,
    applyThemeBreakpoint
  });

  return (
    <StyledButton onClick={onClick} componentCss={componentCss}>
      {children}
    </StyledButton>
  );
};

export default Button;
