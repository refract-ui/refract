import { IconTree } from 'react-icons';
import * as Md from './md';
import * as Sm from './sm';
import * as Lg from './lg';

export type Icons = {
  add: IconTree;
  back?: IconTree;
};

export const smallIcons: Icons = {
  add: Sm.AddIcon
};

export const defaultIcons: Icons = {
  add: Md.AddIcon,
  back: Md.BackIcon
};

export const largeIcons: Icons = {
  add: Lg.AddIcon
};

export default defaultIcons;
