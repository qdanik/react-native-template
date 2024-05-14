/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: () =>
      Promise.resolve({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  watchFolders: [
    path.resolve(`${__dirname}/..`), // Relative path to packages directory
    path.resolve(`${__dirname}/../../node_modules`), // Relative path to packages directory
  ],
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
    nodeModulesPaths: [
      path.resolve(`${__dirname}/node_modules`),
      path.resolve(`${__dirname}/../../node_modules`),
    ],
  },
};

module.exports = mergeConfig(defaultConfig, config);
