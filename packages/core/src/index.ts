// theme
export { default as theme, CoreTheme as Theme } from './theme';

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
} from './theme/containers';

export { GlobalStyleBreakpoint } from './theme/globalStyles';
export { TypographyThemeMapping } from './utils/mapTypographyStyles';
export { FontVariant } from './theme/fontVariants';
export { BlockElements } from './theme/globalBlockElements';
export { Tags as TypographyTags } from './theme/fontTagMappings';
