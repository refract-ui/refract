import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { get, isObject } from 'lodash';
import tc from 'tinycolor2';
import { ThemeComponent } from '../../theme';
import createThemedComponent from '../../utils/createThemedComponent';
import { BorderBreakpointStyle, applyBorderStyle } from '../../theme/borders';
import {
  Container,
  mapDivContainerPropsToStyles
} from '../../theme/containers';
import lightenOrDarken from '../../utils/lightenOrDarken';
import { Icons } from '../Icons/icons';
import Icon from '../Icons';
import CollapsingListContainer from '../Collapsing-List-Container';

type CollapsingSectionTheme = {
  textColor?: string;
  iconColor?: string;
  fontSize?: string;
  border?: Partial<BorderBreakpointStyle>;
};

type IconObject = {
  icon: keyof Icons;
  position: 'left' | 'right' | null;
  isRotating?: boolean;
};

type CollapsingSectionProps = {
  children?: any;
  icon?: keyof Icons | IconObject | null;
  title?: string;
};

type CollapsingSectionVariants = {};

type CollapsingSectionStates = '_hover' | '_active' | '_focus';

function CollapsingSectionFunction({
  children,
  icon,
  title,
  ...props
}: CollapsingSectionProps & CollapsingSectionVariants): JSX.Element {
  const className = get(props, 'className', null);

  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const useIcon = isObject(icon) ? get(icon, 'icon', null) : icon;
  const iconPosition = isObject(icon)
    ? get(icon, 'position', 'right')
    : 'right';
  const isIconRotating = isObject(icon) ? get(icon, 'isRotating', null) : null;

  return (
    <>
      <button
        aria-expanded={isSectionOpen}
        className={className}
        onClick={() => setIsSectionOpen(!isSectionOpen)}
      >
        {icon && iconPosition === 'left' && (
          <div
            className="gfx-collapsing-icon-wrapper"
            style={
              isSectionOpen && isIconRotating
                ? {
                    transition: 'all 0.2s',
                    transform: 'rotate(180deg)'
                  }
                : {
                    transition: 'all 0.2s',
                    transform: 'rotate(0deg)'
                  }
            }
          >
            <Icon name={useIcon as keyof Icons} />
          </div>
        )}

        {title && <span>{title}</span>}

        {icon && iconPosition === 'right' && (
          <div
            className="gfx-collapsing-icon-wrapper"
            style={
              isSectionOpen && isIconRotating
                ? {
                    transition: 'all 0.2s',
                    transform: 'rotate(180deg)'
                  }
                : {
                    transition: 'all 0.2s',
                    transform: 'rotate(0deg)'
                  }
            }
          >
            <Icon name={useIcon as keyof Icons} />
          </div>
        )}
      </button>
      {
        <CollapsingListContainer isSectionOpen={isSectionOpen}>
          {children}
        </CollapsingListContainer>
      }
    </>
  );
}

const CollapsingSectionComponent = styled(CollapsingSectionFunction)<
  ThemeComponent & CollapsingSectionProps
>`
  ${({ componentCss }) => componentCss};
  display: flex;
  font-family: 'Work Sans', sans serif;
  font-weight: 300;
  transition: all 0.2s;

  .gfx-collapsing-icon-wrapper:first-child {
    margin-right: 10px;
  }

  .gfx-collapsing-icon-wrapper:last-child {
    margin-left: auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CollapsingSection = createThemedComponent<
  CollapsingSectionTheme,
  CollapsingSectionVariants,
  CollapsingSectionStates,
  CollapsingSectionProps,
  Container
>({
  defaultVariants: {},
  states: ['_hover', '_active', '_focus'],
  extend: mapDivContainerPropsToStyles,
  compose: ({ theme, variant }) => {
    return {
      Component: CollapsingSectionComponent,
      variantMapping: {},
      defaultStyleMapping: {
        xs: {
          bg: theme.components.dropdowns.bg,
          border: ({ contrastColor, bg }) => {
            const contrastedColor = contrastColor(bg);
            const halfOpacityBorder = tc(contrastedColor)
              .setAlpha(0.5)
              .toRgbString();
            return {
              ...theme.borders.xs,
              borderRadius: '0',
              borderColor: halfOpacityBorder,
              borderWidth: `0 0 ${theme.borders.xs.borderWidth} 0`
            };
          },
          fontSize: '1rem',
          my: '0',
          pr: theme.spacing['3'],
          pl: '0',
          ml: theme.spacing['3'],
          py: theme.spacing['2'],
          textColor: ({ contrastColor, bg }) => contrastColor(bg),
          iconColor: ({ textColor }) =>
            lightenOrDarken({ color: textColor, amount: 30 }),
          opacity: '1',
          pointerEvents: 'auto'
        }
      },
      cascadeStateProps: {
        bg: {
          _hover: ({ bg }) => {
            return lightenOrDarken({
              color: bg,
              amount: 1
            });
          }
        },
        textColor: {
          _hover: ({ contrastColor, bg }) => {
            return contrastColor(bg);
          }
        }
      },
      mapPropsToStyle: {
        textColor: ({ textColor }) => {
          return css`
            color: ${textColor};
          `;
        },
        fontSize: ({ fontSize }) => {
          return css`
            font-size: ${fontSize};
          `;
        },
        border: ({ border }) => {
          return applyBorderStyle(border);
        }
      }
    };
  }
});

export default CollapsingSection;
