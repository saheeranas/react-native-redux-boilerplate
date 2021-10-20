import {getSecureValue, setSecureValue} from './keyChain';
import {login} from '../services/index';
import {updateToken} from '../store/userSlice';
import {store} from '../store/store';
/**
 * Request ACCESS TOKEN using REFRESH TOKEN
 * - ONLY request if there is refresh token present
 * - Accessing store directly since useDispatch doesn't work outside react component
 */
export const requestNewToken = async () => {
  // 1. Get refresh token from keychain
  getSecureValue('refresh_token')
    // 2. Request a new access token
    .then(rtoken => {
      if (!rtoken) {
        throw new Error('Login Failed');
      }
      return login(
        new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: rtoken,
        }),
      );
    })
    // 3. Parsing new token from response
    .then(response => response.data.access_token)
    .then(acToken => {
      // 4. Save received token to keyring
      setSecureValue('token', acToken);
      // 5. Save received token to redux store
      store.dispatch(updateToken({token: acToken}));
    })
    .catch(err => console.log('requestNewToken()', err));
};
