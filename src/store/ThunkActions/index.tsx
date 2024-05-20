import {createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '@root/apiManager';
import {Resource} from '@root/res';
import axiosApiResponse from '../axiosApiResponse';
import {ENV_DUMMY_API_TOKEN} from '../../../env';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (payload, {rejectWithValue, dispatch}) => {
    return axiosApiResponse(payload, rejectWithValue, dispatch);
  },
);

export const postThunk = createAsyncThunk(
  'app/post',
  async (payload, {rejectWithValue, dispatch}) => {
    const payloadData = {
      ...payload,
      url: Api.api.GET_POSTS,
      type: Resource.globals.APITypes.get,
    };

    return axiosApiResponse(payloadData, rejectWithValue, dispatch);
  },
);

export const photosThunk = createAsyncThunk(
  'app/photos',
  async (payload, {rejectWithValue, dispatch}) => {
    const payloadData = {
      ...payload,
      url: Api.api.GET_PHOTOS,
      type: Resource.globals.APITypes.get,
    };
    return axiosApiResponse(payloadData, rejectWithValue, dispatch);
  },
);

export const postNewThunk = createAsyncThunk(
  'app/postNew',
  async (payload, {rejectWithValue, dispatch}) => {
    const payloadData = {
      ...payload,
      url:
        Api.api.GET_NEW_POST + `?page=${payload?.page}&limit=${payload?.limit}`,
      type: Resource.globals.APITypes.get,
      headers: {'app-id': ENV_DUMMY_API_TOKEN},
    };
    return axiosApiResponse(payloadData, rejectWithValue, dispatch);
  },
);
