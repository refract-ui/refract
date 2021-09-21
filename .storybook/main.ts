module.exports = {
  stories: [
    // '../packages/docs/src/**/*.stories.tsx',
    // '../packages/docs/src/**/*.stories.mdx'
    '../packages/docs/dist/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    // local version of plugin
    // '../packages/docs/src/preset'
    // dist version of plugin
    '../packages/docs/preset'
  ],
};
