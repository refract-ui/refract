module.exports = {
  stories: [
    //'../packages/**/*.stories.tsx'
    // '../packages/**/*.stories.ts',
    // '../packages/core/src/components/Button/Button.stories.tsx',
    '../packages/docs/src/**/*.stories.tsx',
    '../packages/docs/src/**/*.stories.mdx'
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  webpackFinal: async (config: any) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
};
