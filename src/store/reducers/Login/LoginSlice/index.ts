import {createSlice} from '@reduxjs/toolkit';
import {loginThunk} from '@root/store/ThunkActions';
import {storeUserData} from '@root/utility/utility';

let initialState = {
  token: '',
  loading: false,
  status: '',
  data: {},
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    storeToken(state, action) {
      state.token = action.payload ?? '';
      state.data = {};
      storeUserData({data: {api_token: action.payload ?? ''}}); // temp to store token in async remove it later on
    },
    storeUserLoginInfo(state, action) {
      state.data = action.payload ?? {};
    },
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      let res = action?.payload ?? {};
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {storeToken, storeUserLoginInfo} = LoginSlice.actions;
export default LoginSlice.reducer;
