module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['lcov', 'json'],
  collectCoverageFrom: ['**/src/**'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules']
};
