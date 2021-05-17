module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        pure: true,
        minify: true,
        transpileTemplateLiterals: false
      }
    ]
  ]
};
