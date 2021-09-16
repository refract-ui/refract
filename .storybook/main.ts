module.exports = {
  stories: [
    '../packages/docs/src/**/*.stories.tsx',
    '../packages/docs/src/**/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    // local version of plugin
    // '../packages/docs/src/preset'
    // dist version of plugin
    '../packages/docs/preset'
  ],
};
