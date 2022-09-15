import {transformToFormikErrors} from '../../app/utils/form';

let inputErrors = [
  {
    location: 'body',
    msg: 'Invalid value',
    param: 'username',
  },
  {
    location: 'body',
    msg: 'Incorrect password',
    param: 'password',
  },
];

let resultErrors = {
  username: 'username\nInvalid value',
  password: 'password\nIncorrect password',
};

describe('Formik', () => {
  test('should transform errors correctly', () => {
    expect(transformToFormikErrors(inputErrors)).toEqual(resultErrors);
  });
});
