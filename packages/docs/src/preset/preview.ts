import { withRefract } from './decorators/withRefract';

export const decorators = [withRefract];
/* export const globalTypes = {
  test: refractGlobalTypes()
}; */
export const parameters = {
  options: {
    storySort: {
      order: [
        'core',
        [
          'theme',
          [
            'intro',
            'globalStyles',
            'colors',
            'themeColors',
            'subtleColors',
            'darkColors',
            'colorShades',
            'themeColorShades',
            'spacing',
            'borders',
            'breakpoints'
          ]
        ]
      ]
    }
  }
};
