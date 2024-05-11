/**
 * Status Handler - For handling network responses
 */
import {AxiosError} from 'axios';
import {Alert} from 'react-native';
import {A} from '.';

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
    Alert.alert(A.errors(0));
  } else if (err.code === 'ERR_BAD_REQUEST') {
    Alert.alert(A.errors(400));
  } else if (err.code === 'ERR_BAD_RESPONSE') {
    Alert.alert(A.errors(500));
  }
};

export default statusHandler;
