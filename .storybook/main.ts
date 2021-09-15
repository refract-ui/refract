module.exports = {
  stories: [
    '../packages/docs/src/**/*.stories.tsx',
    '../packages/docs/src/**/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '../packages/docs/src/preset/index.ts'
  ],
};
