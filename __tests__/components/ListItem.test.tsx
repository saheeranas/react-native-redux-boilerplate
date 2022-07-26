import 'react-native';
import React from 'react';
import {render, fireEvent} from '../../app/utils/test-utils';

import ListItem from '../../app/components/ListItem';

const mockdata = {
  id: '123',
  title: 'Task 1',
  done: false,
};
const onPressMock = jest.fn();
const eventData = {
  nativeEvent: {
    pageX: 20,
    pageY: 30,
  },
};

describe('ListItem', () => {
  it('should render', () => {
    render(<ListItem item={mockdata} onPress={onPressMock} />, {});
  });

  it('should fire press', () => {
    let {getByText} = render(
      <ListItem item={mockdata} onPress={onPressMock} />,
      {},
    );

    fireEvent.press(getByText(mockdata.title), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
