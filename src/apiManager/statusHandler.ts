/**
 * Status Handler - For handling network responses
 */
import {AxiosError} from 'axios';
import {Alert} from 'react-native';
import {Api} from '.';

const statusHandler = (err: AxiosError) => {
  if (err.response) {
    switch (err.response.status) {
      case 401: {
        // 401: Bad token, please try again

        break;
      }
      default: {
      }
    }
  } else if (err.code === 'ERR_NETWORK') {
    Alert.alert(Api.errors(0));
  } else if (err.code === 'ERR_BAD_REQUEST') {
    Alert.alert(Api.errors(400));
  } else if (err.code === 'ERR_BAD_RESPONSE') {
    Alert.alert(Api.errors(500));
  }
};

export default statusHandler;
