module.exports = {
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-env',
      {
        shippedProposals: true,
        loose: true,
        modules: false,
        // Adds specific imports for polyfills when they are used in each file.
        // Take advantage of the fact that a bundler will load the polyfill only once.
        useBuiltIns: 'usage',
        corejs: {
          version: '3',
          proposals: true
        }
      }
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ]
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        pure: true,
        minify: true,
        transpileTemplateLiterals: false
      }
    ],
    '@babel/plugin-transform-shorthand-properties',
    '@babel/plugin-transform-block-scoping',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    [
      '@babel/plugin-proposal-private-methods',
      {
        loose: true
      }
    ],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        loose: true,
        useBuiltIns: true
      }
    ],
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-parameters',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-for-of',
    'babel-plugin-macros',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    [
      'babel-plugin-polyfill-corejs3',
      {
        method: 'usage-global',
        absoluteImports: 'core-js',
        version: '3.20.0'
      }
    ]
  ]
};
