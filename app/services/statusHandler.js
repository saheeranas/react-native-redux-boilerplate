/**
 * Status Handler - For handling network responses
 */
const statusHandler = err => {
  if (err.response) {
    switch (err.response.status) {
      case 403: {
        // Clear Token from storage
        // Redirect to Login screen
        break;
      }
      default: {
        break;
      }
    }
  }
};

export default statusHandler;
