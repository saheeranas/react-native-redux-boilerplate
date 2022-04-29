import * as Keychain from 'react-native-keychain';

export const setSecureValue = async (key, value) =>
  await Keychain.setGenericPassword(
    key /* <- can be a random string */,
    value,
    {service: key},
  );

export const getSecureValue = async key => {
  const result = await Keychain.getGenericPassword({service: key});
  if (result) {
    return result.password;
  }
  return false;
};

export const removeSecureValue = async key =>
  await Keychain.resetGenericPassword({service: key});
