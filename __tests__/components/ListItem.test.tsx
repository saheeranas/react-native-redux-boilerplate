import 'react-native';
import React from 'react';
import {jest, describe, it, expect} from '@jest/globals';

import {render, fireEvent} from '../../app/utils/test-utils';

import ListItem from '../../app/components/ListItem';

const mockdata = {
  id: '123',
  title: 'Task 1',
  done: false,
};
const onPressMock = jest.fn();

describe('ListItem', () => {
  it('should render', () => {
    render(<ListItem item={mockdata} onPress={onPressMock} />, {});
  });

  it('should fire press', () => {
    let {getByText} = render(
      <ListItem item={mockdata} onPress={onPressMock} />,
      {},
    );

    const pressable = getByText(mockdata.title);
    fireEvent.press(pressable);
    expect(onPressMock).toHaveBeenCalledWith(mockdata.id);
  });
});
