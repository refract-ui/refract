const path = require('path');

module.exports = {
  stories: [
    '../packages/docs/src/**/*.stories.tsx',
    '../packages/docs/src/**/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-links', // local version of plugin
    // '../packages/docs/src/preset'
    // dist version of plugin
    '../packages/docs/src/preset'
  ],
  features: {
    babelModeV7: true
  },
  core: {
    builder: "webpack5"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../packages/core/src'),
      path.resolve(__dirname, '../packages/docs/src'),
      'node_modules'
    ]
  }
};
