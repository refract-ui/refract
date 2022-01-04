module.exports = {
  stories: ['../packages/refract-ui-docs/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '../packages/refract-ui-docs/preset'
  ],
  features: {
    babelModeV7: true
  },
  core: {
    builder: 'webpack5'
  }
};
