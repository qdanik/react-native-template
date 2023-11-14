/**
 * @type {import('@react-native-community/eslint-config').ESLintConfig}
 */
const config = {
  root: true,
  extends: ['@my-app', '@react-native'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
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
    },
  ],
};

module.exports = config;
