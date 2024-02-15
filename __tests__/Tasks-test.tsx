import 'react-native';
import React from 'react';
import {describe, it} from '@jest/globals';

import {render} from '../app/utils/test-utils';

import Tasks from '../app/screens/Tasks';

describe('Tasks screem', () => {
  it('Renders the screen', () => {
    let {getByPlaceholderText} = render(<Tasks />, {});
    getByPlaceholderText('New Task');
  });
});
