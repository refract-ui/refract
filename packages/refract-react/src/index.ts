// theme
export { default as theme, CoreTheme as Theme } from '@refract/core/src/theme';

// global styles
export { default as GlobalStyles } from '../../refract-react/src/components/GlobalStyles';
export { default as SubTheme } from '../../refract-react/src/components/SubTheme';

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
} from '@refract/core/src/theme/containers';

export { GlobalStyleBreakpoint } from '@refract/core/src/theme/globalStyles';
export { TypographyThemeMapping } from '@refract/core/src/utils/mapTypographyStyles';
export { FontVariant } from '@refract/core/src/theme/fontVariants';
export { BlockElements } from '@refract/core/src/theme/globalBlockElements';
export { Tags as TypographyTags } from '@refract/core/src/theme/fontTagMappings';
