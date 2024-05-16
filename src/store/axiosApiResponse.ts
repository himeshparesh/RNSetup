import {A} from '@root/apiManager';
import {U} from '@root/utility';
import axios from 'axios';
import {storeToken} from './reducers/Login/LoginSlice';

const defaultHeader = {'Content-Type': 'application/json'};

export default axiosApiResponse = async (
  payload,
  rejectWithValue,
  dispatch,
) => {
  var {headers, body, type = 'post', url, useJSON = false} = payload;

  let header = {...defaultHeader, ...headers};

  body = {...body};
  console.log('axiosApiResponse header', payload);
  console.log('axiosApiResponse :', headers, body, type, url, payload);

  var formBody = body;

  if (!useJSON) {
    formBody = new FormData();
    for (const property in body) {
      formBody.append(property, body[property]);
    }

    if (formBody._parts.length == 0) {
      formBody = {};
    }
  }

  var response;

  try {
    // console.log('axiosApiResponse formBody', formBody);

    response = await axios.request({
      url: payload.url,
      method: type,
      data: formBody,
      headers: header,
      timeout: 60 * 1000,
    });
    // console.log('Axios api post', response?.data);
    return response?.data;
  } catch (err: any) {
    console.log('Axios api error catch post', err?.response);

    if (err?.response?.status == 401) {
      console.log('in side auth in', err?.response?.status == 401);
      dispatch(storeToken(''));
      U.utility.clearUserData();
      U.utility.showMessage(err.response.data.message);
    }

    if (err.message == 'Network Error') {
      U.utility.showMessage(A.errors(0));
    }
    return rejectWithValue(err?.response?.data ?? {});
  }
};
