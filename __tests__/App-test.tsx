/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';
jest.useFakeTimers();

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('should renders correctly', () => {
    const page = render(<App />);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
