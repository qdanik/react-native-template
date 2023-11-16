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
  rules: {
    'global-require': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
  },
};

module.exports = config;
