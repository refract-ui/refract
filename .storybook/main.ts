module.exports = {
  stories: ['../packages/refract-ui-docs/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '../packages/refract-ui-docs/preset'
  ]
};
