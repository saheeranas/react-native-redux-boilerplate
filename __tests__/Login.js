import 'react-native';
import React from 'react';
import {render, fireEvent, act} from '../app/utils/test-utils';

import Login from '../app/screens/auth/Login';

test('Renders all the elements', () => {
  let {getByPlaceholderText} = render(<Login />);
  getByPlaceholderText('Username/Email');
  getByPlaceholderText('Password');
});

test('Show invalid input messages', async () => {
  let {getByTestId, getAllByText} = render(<Login />);
  await act(async () => {
    fireEvent.press(getByTestId('Login.Button'));
  });
  expect(getAllByText('Required')).toHaveLength(2);
});

test('Show invalid username', async () => {
  let {getByTestId, getByText} = render(<Login />);

  fireEvent.changeText(getByTestId('Login.Password'), '12345');
  await act(async () => {
    fireEvent.press(getByTestId('Login.Button'));
  });
  getByText('Required');
});

test('Show invalid password', async () => {
  let {getByTestId, getByText} = render(<Login />);

  fireEvent.changeText(getByTestId('Login.Username'), 'Hermione');
  await act(async () => {
    fireEvent.press(getByTestId('Login.Button'));
  });
  getByText('Required');
});
