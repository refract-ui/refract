import 'styled-components';
import { CoreTheme } from '../theme/setup';

declare module 'styled-components' {
  export interface DefaultTheme extends CoreTheme {}
}
