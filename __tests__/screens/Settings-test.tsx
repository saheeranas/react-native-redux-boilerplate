import 'react-native';
import {StyleSheet} from 'react-native';
import React from 'react';
import {describe, it, expect} from '@jest/globals';

import {render} from '../../app/utils/test-utils';

import Settings from '../../app/screens/Settings';

describe('Settings screen', () => {
  it('Renders the screen', () => {
    render(<Settings />, {});
  });

  it('Renders theme switch', () => {
    let {getByTestId} = render(<Settings />, {});
    getByTestId('Settings.ThemeSwitch');
  });

  it('Renders the App in "light" theme in default', () => {
    let {getByTestId} = render(<Settings />, {});

    expect(
      StyleSheet.flatten(getByTestId('Layout.LayoutContainer').props.style)
        .backgroundColor,
    ).toBe('#e0eeec');
  });
});
