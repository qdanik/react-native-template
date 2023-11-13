module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  // setupFiles: ['./jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-navigation|@react-native)',
  ],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['cobertura', 'lcov', 'html', 'text-summary'],
  reporters: ['default'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  transform: {
    '^.+/!((@)?react-native)/.+\\.(t|j)sx$': '@swc/jest',
  },
};
