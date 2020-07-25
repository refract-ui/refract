import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { Theme, ThemeComponent } from '../theme';
import { ThemeColors } from '../theme/themeColors';
import lightenOrDarken from '../utils/lightenOrDarken';
import { ButtonThemeBreakpoint, genButtonTheme } from '../theme/buttons';
import { applyBorderStyle } from '../theme/borders';
import { ExtendTheme } from '../utils/componentThemeBreakpoints';
import applyComponentTheme from '../utils/applyComponentTheme';
import applyBreakpointStyles from '../utils/applyBreakpointStyles';

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

function applyThemeBreakpoint(theme: Theme, props: ButtonThemeBreakpoint) {
  return applyBreakpointStyles<ButtonThemeBreakpoint>({
    theme,
    props,

    apply: {
      backgroundColor: ({ backgroundColor }) => css`
        background-color: ${backgroundColor};
      `,
      textColor: ({ backgroundColor, contrastColor }) => css`
        color: ${contrastColor(backgroundColor)};
      `,
      border: props => applyBorderStyle(props.border),
      px: ({ px }) => css`
        padding-left: ${px};
        padding-right: ${px};
      `,
      py: ({ py }) => css`
        padding-top: ${py};
        padding-bottom: ${py};
      `
    },

    cascade: {
      backgroundColor: {
        _hover: ({ backgroundColor }) =>
          lightenOrDarken({
            color: backgroundColor,
            amount: 5
          }),

        _active: ({ _hover: { backgroundColor } }) =>
          lightenOrDarken({
            color: backgroundColor as string,
            amount: 5
          })
      }
    }
  });
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
  const defaultComponentTheme = genButtonTheme({ theme, color });

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
