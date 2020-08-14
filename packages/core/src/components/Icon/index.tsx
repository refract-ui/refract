import React from 'react';
import { get } from 'lodash';
import tc from 'tinycolor2';
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
  color?: string;
  useFill?: boolean;
};

type IconVariants = {
  color: keyof ThemeColors;
  size?: number | 'sm' | 'md' | 'lg';
};

type IconStates = '_active';

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

function getMappedPaths(
  paths: string[],
  attrs: any,
  color: string,
  useFill: boolean
) {
  // monochromatic icons
  if (!attrs.length) {
    return paths.map(path => ({
      path,
      color
    }));
  }

  // convert black to `${color}` and white to `${background} [todo]
  // if useFill === true, leave that shit alone
  return paths.map((path, index) => {
    // keep rgb(255, 255, 255);
    const fillColor =
      attrs[index].fill === 'rgb(255, 255, 255)' ? attrs[index].fill : color;
    const pathColor = useFill ? tc(attrs[index].fill) : tc(fillColor);
    const opacity = get(attrs[index], 'opacity', 1);

    return {
      path,
      color: pathColor.setAlpha(opacity).toRgbString()
    };
  });
}

function IconFunction({
  name,
  size,
  color,
  useFill,
  ...props
}: IconProps): JSX.Element {
  const propSize = typeof size === 'string' ? getSize(size) : size;
  const data = getIconData({ name, size: propSize });
  /* console.log('data.icon.tags[0]', data.icon); */

  const paths = get(data, 'paths', []);
  const attrs = get(data, 'attrs', []);

  const mappedPaths = getMappedPaths(paths, attrs, color, useFill);
  const className = get(props, 'className', null);
  // console.log('mappedPaths', mappedPaths);

  console.log('props', props);

  return (
    <svg
      width={`${propSize}px`}
      height={`${propSize}px`}
      viewBox="0 0 1024 1024"
      style={{ verticalAlign: 'middle' }}
      className={className}
    >
      {mappedPaths.map(path => {
        return <path key={path.path} d={path.path} fill={path.color} />;
      })}
    </svg>
  );
}

IconFunction.defaultProps = {
  color: '#D8D8D8',
  size: 'md',
  useFill: false
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
    size: 'md'
  },
  states: ['_active'],

  compose: ({ theme, variant }) => {
    console.log('{ theme, variant }', { theme, variant });
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
    }
  }
});

export default Icon;
