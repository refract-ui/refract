// theme
export {
  default as theme,
  CoreTheme as Theme
} from '@refract-ui/core/src/theme';

// global styles
export { default as GlobalStyles } from './components/GlobalStyles';
export { default as SubTheme } from './components/SubTheme';

// types
export {
  Container,
  ContainerProps,
  AlignedContainer,
  AlignedContainerProps,
  FlexContainer,
  FlexContainerProps,
  GridContainer,
  GridContainerProps
} from '@refract-ui/core/src/theme/containers';

export { GlobalStyleBreakpoint } from '@refract-ui/core/src/theme/globalStyles';
export { TypographyThemeMapping } from '@refract-ui/core/src/utils/mapTypographyStyles';
export { FontVariant } from '@refract-ui/core/src/theme/fontVariants';
export { BlockElements } from '@refract-ui/core/src/theme/globalBlockElements';
export { Tags as TypographyTags } from '@refract-ui/core/src/theme/fontTagMappings';
