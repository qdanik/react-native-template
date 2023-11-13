module.exports = {
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
