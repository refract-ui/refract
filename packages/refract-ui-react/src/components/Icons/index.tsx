import React from 'react';
import { get } from 'lodash';
import styled, { css } from 'styled-components';
import createThemedComponent from '@refract-ui/core/src/utils/createThemedComponent';
import {
  Container,
  mapDivContainerPropsToStyles
} from '@refract-ui/core/src/theme/containers';

import { ThemeColors } from '@refract-ui/core/src/theme/themeColors';
import { ThemeComponent } from '@refract-ui/core/src/theme';
import { Icons } from './icons';
//import SmIcons from './icons/SmIcons';
import MdIcons from './icons/MdIcons';
//import LgIcons from './icons/LgIcons';

type IconTheme = {
  iconColor: string;
};

type IconProps = {
  name: keyof Icons;
  useFill?: boolean;
};

type IconVariants = {
  color: keyof ThemeColors;
  enormity?: number | 'sm' | 'md' | 'lg';
};

type IconStates = null;

function getIconData({ name }: IconProps) {
  return MdIcons.find(i => i.tags[0] === name);
}

function getSize(enormity: IconVariants['enormity']): number {
  switch (enormity) {
    case 'sm':
      return 16;
    case 'lg':
      return 24;
    default:
      return 20;
  }
}

const IconComponent: React.FC<ThemeComponent & IconProps> = ({
  name,
  ...props
}) => {
  const data = getIconData({ name });
  const paths: string[] = get(data, 'paths', []);

  return (
    <svg viewBox="0 0 1024 1024" {...props}>
      {paths.map((path: string) => {
        return <path key={path} d={path} />;
      })}
    </svg>
  );
};

const StyledIconComponent = styled(IconComponent)<ThemeComponent>`
  vertical-align: middle;

  ${({ componentCss }) =>
    css`
      ${componentCss};
    `};
`;

const Icon = createThemedComponent<
  IconTheme,
  IconVariants,
  IconStates,
  IconProps,
  Container,
  React.SVGProps<SVGSVGElement>
>({
  defaultVariants: {
    color: 'dark'
  },

  extend: mapDivContainerPropsToStyles,

  compose: ({ theme }) => {
    return {
      Component: StyledIconComponent,

      variantMapping: {
        color: ({ color }) => ({
          iconColor: theme.themeColors[color]
        }),

        enormity: ({ enormity }) => {
          const computedSize =
            typeof enormity === 'string' ? getSize(enormity) : enormity;
          return {
            w: computedSize,
            h: computedSize
          };
        }
      },

      defaultStyleMapping: {
        xs: { ...theme.components.icons }
      },

      cascadeStateProps: {},

      mapPropsToStyle: {
        iconColor: ({ iconColor }) => css`
          path {
            fill: ${iconColor};
          }
        `
      }
    };
  }
});

export default Icon;
