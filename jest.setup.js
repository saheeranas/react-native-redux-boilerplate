/* eslint-disable no-undef */
import nock from 'nock';
import {NativeModules} from 'react-native';
// import jest from 'jest-mock';

nock.disableNetConnect();

NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(() => Promise.resolve()),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('react-navigation', () => ({
//   NavigationEvents: 'mockNavigationEvents',
// }));
