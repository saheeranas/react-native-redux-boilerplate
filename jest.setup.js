/* eslint-disable no-undef */
// import React from 'react'
import nock from 'nock';
import {NativeModules} from 'react-native';
// import { createMMKV } from 'react-native-mmkv'
// import jest from 'jest-mock';

nock.disableNetConnect();

NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(() => Promise.resolve()),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};

// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('@react-native-async-storage/async-storage', () =>
//   require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
// );

// jest.mock('react-navigation', () => ({
//   NavigationEvents: 'mockNavigationEvents',
// }));

jest.mock('react-native-mmkv', () => ({
  createMMKV: () => ({
    set: jest.fn(),
    getString: jest.fn(),
    delete: jest.fn(),
    clearAll: jest.fn(),
  }),
}))


// jest.mock('@react-native-vector-icons/ionicons', () => {
//   return {
//     Ionicons: ({ name, ...props }) => React.createElement(Text, props, name),
//   }
// })