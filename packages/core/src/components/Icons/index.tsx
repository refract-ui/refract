import React from 'react';
import { get } from 'lodash';
import styled, { css } from 'styled-components';
import createThemedComponent from '../../utils/createThemedComponent';
import { ThemeColors } from '../../theme/themeColors';
import { ThemeComponent } from '../../theme';
import { Icons } from './icons';
import SmIcons from './icons/SmIcons';
import MdIcons from './icons/MdIcons';
import LgIcons from './icons/LgIcons';

type IconTheme = {
  iconColor: string;
  iconSize: number;
};

type IconProps = {
  name: keyof Icons;
  size?: number | 'sm' | 'md' | 'lg';
};

type IconVariants = {
  color: keyof ThemeColors;
  size?: number | 'sm' | 'md' | 'lg';
  useFill?: boolean;
};

type IconStates = null;

function getIconData({ name, size }: IconProps) {
  if (size <= 16) {
    return SmIcons.find(i => i.tags[0] === name);
  }
  if (size >= 24) {
    return LgIcons.find(i => i.tags[0] === name);
  }
  return MdIcons.find(i => i.tags[0] === name);
}

function getSize(size: IconProps['size']): number {
  switch (size) {
    case 'sm':
      return 16;
    case 'lg':
      return 24;
    default:
      return 20;
  }
}

function IconFunction({ name, size, ...props }: IconProps): JSX.Element {
  const propSize = typeof size === 'string' ? getSize(size) : size;
  const data = getIconData({ name, size: propSize });
  const className = get(props, 'className', null);
  const paths: string[] = get(data, 'paths', []);

  return (
    <svg
      viewBox="0 0 1024 1024"
      style={{ verticalAlign: 'middle' }}
      className={className}
    >
      {paths.map((path: string) => {
        return <path key={path} d={path} />;
      })}
    </svg>
  );
}

IconFunction.defaultProps = {
  size: 'md'
};

const IconComponent = styled(IconFunction)<ThemeComponent & IconProps>`
  ${({ componentCss }) => componentCss};
`;

const Icon = createThemedComponent<
  IconTheme,
  IconVariants,
  IconStates,
  IconProps
>({
  defaultVariants: {
    color: 'dark',
    size: 'md',
    useFill: false
  },

  compose: ({ theme, variant }) => {
    console.log('theme', theme);
    return {
      Component: IconComponent,
      variantMapping: {
        color: ({ color }) => ({
          iconColor: theme[color]
        }),
        size: ({ size }) => ({
          iconSize: typeof size === 'string' ? getSize(size) : size
        })
      },
      defaultStyleMapping: {
        xs: {
          iconColor: theme[variant.color],
          iconSize: 20
        }
      },
      cascadeStateProps: {},
      mapPropsToStyle: {
        iconColor: ({ iconColor }) => css`
          path {
            fill: ${iconColor};
          }
        `,
        iconSize: ({ iconSize }) => css`
          height: ${iconSize}px;
          width: ${iconSize}px;
        `
      }
    };
  }
});

export default Icon;
