/**
 * Status Handler - For handling network responses
 */

import {requestNewToken} from '../utils/token';

const statusHandler = err => {
  if (err.response) {
    switch (err.response.status) {
      case 401: {
        // 401: Bad token, please try again
        requestNewToken();
        break;
      }
      default: {
      }
    }
  }
};

export default statusHandler;
