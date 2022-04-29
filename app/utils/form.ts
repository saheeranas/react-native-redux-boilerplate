/**
 * Transoform error format to Formik setErrors format
 */

export const transformToFormikErrors = errors => {
  // Response errors format
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
  let temp = {};
  errors.forEach(item => {
    temp[item.param] = temp[item.param]
      ? `${temp[item.param]}\n${item.msg}`
      : item.msg;
  });
  return temp;
};
