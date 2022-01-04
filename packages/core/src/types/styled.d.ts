import 'styled-components';
import { CoreTheme } from '../theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CoreTheme {}
}
