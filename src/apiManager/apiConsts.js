export const BASE_URL = `https://dummyjson.com/auth`;

const getBaseURL = () => {
  return BASE_URL;
};

const api = {
  login: () => {
    return getBaseURL() + '/login';
  },
};

const statusCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  PAGE_NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  SUCCESS: 200,
  CREATED: 201,
  ACCEOTED: 202,
};

const Links = {
  PRIVACY_POLICY: '',
  TERMS_OF_SERVICE: '',
  NOTICE: '',
  APP_STORE: '',
  PLAY_STORE: '',
  FACEBOOK: '',
  LINKEDIN: '',
};

const errors = statusCode => {
  switch (statusCode) {
    case 400:
      return 'Bad Request';
    case 401:
      return 'Unauthorized user';
    case 403:
      return 'You are not authorized to invoke the operation';
    case 404:
      return 'Not Found';
    case 405:
      return 'Method Not Allowed';
    case 409:
      return 'An attempt was made to create an object that already exists';
    case 500:
      return 'Internal Server Error';
    case 0:
      return 'Could not connect to the server. Please check your internet connection and try again';
    default:
      return 'Something went wrong';
  }
};


export {
  errors,
  getBaseURL,
  Links,
  statusCode,
  api
};
