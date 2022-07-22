import 'react-native';
import React from 'react';
import {render} from '../../app/utils/test-utils';

import NotFound from '../../app/components/NotFound';

describe('NotFound', () => {
  it("should show title 'Not Found'", () => {
    let {getByText} = render(<NotFound />, {});
    getByText('Not Found');
  });

  it("should show message 'There is nothing to show'", () => {
    let {getByText} = render(<NotFound />, {});
    getByText('There is nothing to show');
  });
});
