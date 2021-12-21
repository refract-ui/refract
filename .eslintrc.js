module.exports = {
  ignorePatterns: ['**/dist/**'],
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX

    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use

    }
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "plugin:import/typescript", "plugin:import/errors", "plugin:import/warnings", "plugin:storybook/recommended"],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // TODO: remove and use strict typing
    '@typescript-eslint/no-explicit-any': 0,
    // TODO: remove and use strict typing
    '@typescript-eslint/no-empty-interface': 0,
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/__tests__/**/*.js', '**/test-utils.js']
    }],
    'max-len': ['warn', {
      code: 100,
      tabWidth: 2,
      comments: 100,
      ignoreComments: false,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'react/prop-types': 0 // using typescript interfaces instead

  }
};