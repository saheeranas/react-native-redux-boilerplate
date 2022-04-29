import 'react-native';
import React from 'react';
import {render} from '../app/utils/test-utils';

import Tasks from '../app/screens/Tasks';

test('Renders the screen', () => {
  let {getByPlaceholderText} = render(<Tasks />, {});
  getByPlaceholderText('New Task');
});
