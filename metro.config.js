const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const src = path.resolve(__dirname, 'src');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
    extraNodeModules: {
      '@api': path.resolve(src, 'api'),
      '@app': path.resolve(src, 'app'),
      '@features': path.resolve(src, 'features'),
      '@hooks': path.resolve(src, 'hooks'),
      '@services': path.resolve(src, 'services'),
      '@storage': path.resolve(src, 'storage'),
      '@constants': path.resolve(src, 'constants'),
      '@types': path.resolve(src, 'types'),
      '@screens': path.resolve(src, 'screens'),
      '@navigation': path.resolve(src, 'navigation'),
      '@svg': path.resolve(src, 'assets/svg'),
      '@png': path.resolve(src, 'assets/png'),
      '@components': path.resolve(src, 'components'),
      '@utils': path.resolve(src, 'utils'),
    },
  },
  watchFolders: [src],
};

module.exports = mergeConfig(defaultConfig, config);
