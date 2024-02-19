import 'react-native';
import React from 'react';
import {describe, it, expect} from '@jest/globals';

// import {render} from '@testing-library/react-native';
import {render, act, fireEvent} from '../../app/utils/test-utils';

import Login from '../../app/screens/auth/Login';

describe('Login screen', () => {
  it('Renders all the elements', () => {
    // render(<Login />, {});
    let {getByPlaceholderText} = render(<Login />, {});
    getByPlaceholderText('Username/Email');
    getByPlaceholderText('Password');
  });

  it('Show error message if inputs are blank', async () => {
    let {getByTestId, getAllByText} = render(<Login />, {});
    await act(async () => {
      fireEvent.press(getByTestId('Login.Button'));
    });
    expect(getAllByText('Required')).toHaveLength(2);
  });

  it('Show error message if submit blank username', async () => {
    let {getByTestId, getByText} = render(<Login />, {});

    fireEvent.changeText(getByTestId('Login.Password'), '12345');
    await act(async () => {
      fireEvent.press(getByTestId('Login.Button'));
    });
    getByText('Required');
  });

  it('Show error message if submit invalid username', async () => {
    let {getByTestId, getByText} = render(<Login />, {});

    fireEvent.changeText(getByTestId('Login.Username'), 'Herm');
    await act(async () => {
      fireEvent.press(getByTestId('Login.Button'));
    });
    getByText('Username must contain atleast 5 characters');
  });

  it('Show error message if submit blank password', async () => {
    let {getByTestId, getByText} = render(<Login />, {});

    fireEvent.changeText(getByTestId('Login.Username'), 'Hermione');
    await act(async () => {
      fireEvent.press(getByTestId('Login.Button'));
    });
    getByText('Required');
  });
});
