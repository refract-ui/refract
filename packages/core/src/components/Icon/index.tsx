import React from 'react';
import { get } from 'lodash';
import tc from 'tinycolor2';
import { Icons } from './icons';
import MdIcons from './icons/MdIcons';
import LgIcons from './icons/LgIcons';

type IconProps = {
  name: keyof Icons;
  size: number | 'sm' | 'md' | 'lg';
  color?: string;
  useFill?: boolean;
};

function getIconData({ name, size }: IconProps) {
  /* if (size <= 16) {
    return smallIcons[name];
  } */
  if (size >= 24) {
    return {
      metadata: LgIcons.metadata,
      icon: LgIcons.icons.find(i => i.tags[0] === name)
    };
  }
  return {
    metaData: MdIcons.metadata,
    icon: MdIcons.icons.find(i => i.tags[0] === name)
  };
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
  console.log('{ paths, attrs, color, useFill }', {
    paths,
    attrs,
    color,
    useFill
  });

  // monochromatic icons
  if (!attrs.length) {
    return paths.map(path => ({
      path,
      color
    }));
  }

  // convert black to `${color}` and white to `${background}
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

function Icon({
  name,
  size,
  color,
  useFill,
  ...props
}: IconProps): JSX.Element {
  const propSize = typeof size === 'string' ? getSize(size) : size;
  const data = getIconData({ name, size: propSize });
  /* console.log('data.icon.tags[0]', data.icon); */

  // const width = propSize || get(data, 'metadata.importSize.width', propSize);
  // const height = propSize || get(data, 'metadata.importSize.height', propSize);
  const paths = get(data, 'icon.paths', []);
  const attrs = get(data, 'icon.attrs', []);

  const mappedPaths = getMappedPaths(paths, attrs, color, useFill);
  console.log('mappedPaths', mappedPaths);

  return (
    <svg
      width={`${propSize}px`}
      height={`${propSize}px`}
      viewBox="0 0 1024 1024"
      style={{ verticalAlign: 'middle' }}
    >
      {mappedPaths.map(path => {
        return <path key={path.path} d={path.path} fill={path.color} />;
      })}
    </svg>
  );
}

Icon.defaultProps = {
  color: '#D8D8D8',
  size: '20',
  useFill: false
};

export default Icon;
