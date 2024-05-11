import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApiResponse from '../axiosApiResponse';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (payload, {rejectWithValue, dispatch}) => {
    return axiosApiResponse(payload, rejectWithValue, dispatch);
  },
);
