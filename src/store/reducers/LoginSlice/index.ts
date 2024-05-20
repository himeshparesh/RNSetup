import {createSlice} from '@reduxjs/toolkit';
import {loginThunk} from '@root/store/ThunkActions';
import {Utils} from '@root/utils';

type LoginState = {
  token: string;
  loading: boolean;
  status: string;
  data: any;
};

let initialState: LoginState = {
  token: '',
  loading: false,
  status: '',
  data: {},
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    storeToken(state: LoginState, action) {
      state.token = action.payload ?? '';
      state.data = {};
      Utils.Utility.storeUserData({data: {api_token: action.payload ?? ''}}); // temp to store token in async remove it later on
    },
    storeUserLoginInfo(state: LoginState, action) {
      state.data = action.payload ?? {};
    },
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, (state: LoginState) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state: LoginState, action) => {
      state.loading = false;
      let res = action?.payload ?? {};
    });
    builder.addCase(loginThunk.rejected, (state: LoginState) => {
      state.loading = false;
    });
  },
});

export const {storeToken, storeUserLoginInfo} = LoginSlice.actions;
export default LoginSlice.reducer;
