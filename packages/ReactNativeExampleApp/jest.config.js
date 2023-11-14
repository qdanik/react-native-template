module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+/!((@)?react-native)/.+\\.(t|j)sx$': '@swc/jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-navigation|@react-native)',
  ],
  verbose: true,
  reporters: ['default'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  coverageReporters: ['cobertura', 'lcov', 'html', 'text-summary'],
};
