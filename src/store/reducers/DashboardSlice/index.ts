import {SerializedError, createSlice} from '@reduxjs/toolkit';
import {
  GraphPosts,
  NewPostData,
  Photo,
  PhotosData,
  Post,
  PostData,
} from '@root/screens/App/Dashboard/types';
import {photosThunk, postNewThunk, postThunk} from '@root/store/ThunkActions';
import {Meta, RejectedMeta} from '@root/types/types';

type DashboardState = {
  posts: Post[];
  photos: Photo[];
  loader: boolean;
  newPosts: NewPostData;
  graphPosts: GraphPosts;
};

const initialState: DashboardState = {
  posts: [],
  photos: [],
  loader: false,
  newPosts: undefined,
  graphPosts: undefined,
};

type ShowLoaderAction = {
  payload: boolean;
  type?: string;
};

type GraphAddPostAction = {
  payload: GraphPosts;
  type?: string;
};

type NewPostAction = {
  type: string;
  payload: NewPostData;
  meta: Meta;
};

type PostAction = {
  type: string;
  payload: PostData;
  meta: Meta;
};

type RejectedAction = {
  type: string;
  payload: any;
  meta: RejectedMeta;
  error: SerializedError;
};

type PhotosAction = {
  type: string;
  payload: PhotosData;
  meta: Meta;
};

export const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    showLoader(state: DashboardState, action: ShowLoaderAction) {
      state.loader = action?.payload;
    },
    removeHomeData(state: DashboardState) {
      state.posts = [];
      state.photos = [];
      state.newPosts = undefined;
      state.graphPosts = undefined;
    },
    addGraphPost(state: DashboardState, action: GraphAddPostAction) {
      state.graphPosts = action?.payload;
    },
    clearHomeData(state: DashboardState) {
      state.posts = [];
      state.photos = [];
      state.newPosts = undefined;
      state.graphPosts = undefined;
      state.loader = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(postThunk.pending, (state: DashboardState) => {
      state.loader = true;
    });
    builder.addCase(
      postThunk.fulfilled,
      (state: DashboardState, action: PostAction) => {
        state.loader = false;
        state.posts = action?.payload ?? {};
      },
    );
    builder.addCase(
      postThunk.rejected,
      (state: DashboardState, action: RejectedAction) => {
        state.loader = false;
      },
    );

    builder.addCase(photosThunk.pending, (state: DashboardState) => {
      state.loader = true;
    });
    builder.addCase(
      photosThunk.fulfilled,
      (state: DashboardState, action: PhotosAction) => {
        state.loader = false;
        state.photos = action?.payload ?? {};
      },
    );
    builder.addCase(
      photosThunk.rejected,
      (state: DashboardState, action: RejectedAction) => {
        state.loader = false;
      },
    );

    builder.addCase(
      postNewThunk.fulfilled,
      (state: DashboardState, action: NewPostAction) => {
        state.loader = false;
        const res = action?.payload ?? {};
        if (action?.meta?.arg?.extraParams?.forPagination) {
          state.newPosts = {
            ...state.newPosts,
            data: [...state.newPosts?.data, ...res?.data],
          };
        } else {
          state.newPosts = action?.payload;
        }
      },
    );
    builder.addCase(
      postNewThunk.rejected,
      (state: DashboardState, action: RejectedAction) => {
        state.loader = false;
      },
    );
  },
});

export const {clearHomeData, showLoader, removeHomeData, addGraphPost} =
  DashboardSlice.actions;
export default DashboardSlice.reducer;
