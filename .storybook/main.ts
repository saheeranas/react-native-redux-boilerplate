// .storybook/main.ts
import type {StorybookConfig} from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['../app/components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
};

export default main;

// module.exports = {
//   stories: ['../app/components/**/*.stories.?(ts|tsx|js|jsx)'],
//   // stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
//   addons: [
//     '@storybook/addon-ondevice-controls',
//     '@storybook/addon-ondevice-actions',
//   ],
//   managerWebpack: (config, options) => {
//     options.cache.set = () => Promise.resolve();
//     return config;
//   },
// };
