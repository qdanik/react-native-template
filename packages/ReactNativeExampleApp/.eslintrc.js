/**
 * @type {import('@react-native-community/eslint-config').ESLintConfig}
 */
const config = {
  root: true,
  extends: '@react-native-template',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      legacyDecorators: true,
      jsx: true,
    },
    useJSXTextNode: true,
  },
};

module.exports = config;
