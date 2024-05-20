import {createSlice} from '@reduxjs/toolkit';
import {NewPostData, Photo, Post} from '@root/screens/App/Dashboard/types';
import {photosThunk, postNewThunk, postThunk} from '@root/store/ThunkActions';

type DashboardState = {
  posts: Post[];
  photos: Photo[];
  loader: boolean;
  newPosts: NewPostData | undefined;
};

const initialState: DashboardState = {
  posts: [],
  photos: [],
  loader: false,
  newPosts: undefined,
};

type AddPostsAction = {
  payload: Post[];
  type?: string;
};

type AddNewPostsAction = {
  payload: NewPostData;
  type?: string;
};

type AddPhotoAction = {
  payload: Photo[];
  type?: string;
};

type ShowLoaderAction = {
  payload: boolean;
  type?: string;
};

export const DashboardSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    addPosts(state: DashboardState, action: AddPostsAction) {
      state.posts = action?.payload;
    },
    addPhotos(state: DashboardState, action: AddPhotoAction) {
      state.photos = action?.payload;
    },
    addNewPosts(state: DashboardState, action: AddNewPostsAction) {
      state.newPosts = action?.payload;
    },
    showLoader(state: DashboardState, action: ShowLoaderAction) {
      state.loader = action?.payload;
    },
    removeHomeData(state: DashboardState) {
      state.posts = [];
      state.photos = [];
      state.newPosts = undefined;
    },
    clearHomeData(state: DashboardState) {
      state.posts = [];
      state.photos = [];
      state.newPosts = undefined;
      state.loader = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(postThunk.pending, state => {
      state.loader = true;
    });
    builder.addCase(postThunk.fulfilled, (state, action) => {
      state.loader = false;
      state.posts = action?.payload ?? {};
    });
    builder.addCase(postThunk.rejected, (state, action) => {
      state.loader = false;
      console.log('rejected');
    });

    builder.addCase(photosThunk.pending, state => {
      state.loader = true;
      console.log('photosThunk PENDING');
    });
    builder.addCase(photosThunk.fulfilled, (state, action) => {
      state.loader = false;
      state.photos = action?.payload ?? {};
    });
    builder.addCase(photosThunk.rejected, (state, action) => {
      state.loader = false;
      console.log('photosThunk rejected');
    });

    builder.addCase(postNewThunk.pending, state => {
      state.loader = true;
      console.log('postNewThunk PENDING');
    });
    builder.addCase(postNewThunk.fulfilled, (state, action) => {
      state.loader = false;
      const res = action?.payload ?? {};

      if (res?.extraParams?.forPagination) {
        state.newPosts = {
          ...state.newPosts,
          data: [...state.newPosts?.data, ...res?.data],
        };
      } else {
        state.newPosts = action?.payload;
      }
    });
    builder.addCase(postNewThunk.rejected, (state, action) => {
      state.loader = false;
      console.log('postNewThunk rejected');
    });
  },
});

export const {
  clearHomeData,
  addPosts,
  addPhotos,
  showLoader,
  removeHomeData,
  addNewPosts,
} = DashboardSlice.actions;
export default DashboardSlice.reducer;
