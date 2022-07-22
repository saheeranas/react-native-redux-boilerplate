import 'react-native';
import React from 'react';
import {render} from '../../app/utils/test-utils';

import Dummy from '../../app/components/Dummy';

describe('Dummy', () => {
  it('should renders correctly', () => {
    let {getByText} = render(<Dummy />, {});
    getByText(/Hello/i);
  });
});
