/**
 * Transoform error format to Formik setErrors format
 */

interface responseErrorType {
  location: string;
  msg: string;
  param: string;
}

export const transformToFormikErrors = (errors: responseErrorType[]) => {
  // Response errors format: ARRAY
  // "errors": [
  //   {
  //     "location": "body",
  //     "msg": "Invalid value",
  //     "param": "username"
  //   },
  //   {
  //     "location": "body",
  //     "msg": "Incorrect password",
  //     "param": "password"
  //   }
  // ]

  // Return (Formik) errors format: OBJECT
  // {
  //   username: 'Invalid value',
  //   password: 'Incorrect password',
  // };

  return errors.reduce(
    (prev, curr) =>
      Object.assign({}, prev, {
        [curr.param]: curr.param ? `${curr.param}\n${curr.msg}` : curr.msg,
      }),
    {},
  );
};
