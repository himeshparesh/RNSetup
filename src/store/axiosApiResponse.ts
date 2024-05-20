import {Dispatch} from '@reduxjs/toolkit';
import {Api} from '@root/apiManager';
import {ToastType} from '@root/types/types';
import {Utils} from '@root/utils';
import axios, {AxiosHeaders} from 'axios';
import {storeToken} from './reducers/LoginSlice';

const defaultHeader = {'Content-Type': 'application/json'};

// axios.interceptors.response.use(
//   response => {
//     // console.log('------------------------------');
//     // console.log('Response ⬇️', JSON.stringify(response?.data, null, 2));
//     // console.log('------------------------------');
//     return response;
//   },
//   error => {
//     // console.log('------------------------------');
//     // console.log('Error ⬇️', JSON.stringify(error, null, 2));
//     // console.log('------------------------------');
//     return Promise.reject(error);
//   },
// );

// axios.interceptors.request.use(async config => {
//   // console.log('------------------------------');
//   // console.log('Request ⬇️', JSON.stringify(config, null, 2));
//   // console.log('------------------------------');
//   return config;
// });

type ApiPayload = {
  headers: AxiosHeaders;
  body: any;
  type: string;
  useJSON?: boolean;
  url: string;
};

const axiosApiResponse = async (
  payload: ApiPayload,
  rejectWithValue: any,
  dispatch: Dispatch,
) => {
  let {headers, body, type = 'post', url, useJSON = true} = payload;
  const header = {...defaultHeader, ...headers};
  body = {...body};
  // console.log('------------------------------');
  // console.log('API Data : ', JSON.stringify(payload, null, 2));
  // console.log('API header : ', JSON.stringify(header, null, 2));
  // console.log('------------------------------');
  let formBody = body;

  if (!useJSON) {
    formBody = new FormData();
    for (const property in body) {
      formBody.append(property, body[property]);
    }

    if (formBody._parts.length == 0) {
      formBody = {};
    }
  }

  let response;
  try {
    let requestData = {
      url: url,
      method: type,
      headers: header,
      timeout: 60 * 1000,
    };
    if (Object.keys(formBody).length > 0) {
      requestData = {...requestData, data: formBody};
    }
    response = await axios.request(requestData);
    // console.log('Axios api post', response?.data);
    return response?.data;
  } catch (err: any) {
    console.log('Axios api error catch ', err);

    if (err?.response?.status == 401) {
      console.log('in side auth in', err?.response?.status == 401);
      dispatch(storeToken(''));
      Utils.Utility.clearUserData();
      Utils.Utility.showMessage(ToastType.error, err.response.data.message);
    }

    if (err.message == 'Network Error') {
      Utils.Utility.showMessage(ToastType.error, Api.errors(0));
    }
    return rejectWithValue(err?.response?.data ?? {});
  }
};

export default axiosApiResponse;
