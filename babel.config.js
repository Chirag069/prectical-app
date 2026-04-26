module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@api': './src/api',
        '@app': './src/app',
        '@features': './src/features',
        '@hooks': './src/hooks',
        '@services': './src/services',
        '@storage': './src/storage',
        '@constants': './src/constants',
        '@appTypes': './src/types',
        '@screens': './src/screens',
        '@navigation': './src/navigation',
        '@svg': './src/assets/svg',
        '@png': './src/assets/png',
        '@components': './src/components',
        '@utils': './src/utils',
      },
    }],
  ],
};
