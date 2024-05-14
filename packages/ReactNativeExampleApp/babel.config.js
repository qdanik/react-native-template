/**
 * Babel configuration for React Native
 * @type {import('@babel/core').TransformOptions}
 */
const config = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};

module.exports = config;
