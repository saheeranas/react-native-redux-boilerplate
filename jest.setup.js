import {NativeModules} from 'react-native';
import jest from 'jest-mock';

NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(() => Promise.resolve()),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
