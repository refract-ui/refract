module.exports = {
  stories: [
    '../packages/docs/src/**/*.stories.tsx',
    '../packages/docs/src/**/*.stories.mdx',
    // '@refract-ui/docs/src/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-links'
  ],
};
