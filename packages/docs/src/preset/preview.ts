import { withRefract } from './decorators/withRefract';

export const decorators = [withRefract];

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
            'themeColorOpacities',
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
