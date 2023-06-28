const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
//   resolver: {
//     resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
//   },
// };

const config = {
  resolver: {
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
