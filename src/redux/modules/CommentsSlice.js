import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

import instance from '../../shared/Request';

//instance url
// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// });

//__getComments
export const __getComments = createAsyncThunk(
  'comments/getComments',
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get('comments');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//__postComment
export const __postComment = createAsyncThunk(
  'comments/postComments',
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post('comments', payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//__deleteComment
export const __deleteComment = createAsyncThunk(
  'comments/deleteComments',
  async (payload, thunkAPI) => {
    try {
      await instance.delete(`comments/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//__patchComment
export const __patchComment = createAsyncThunk(
  'comments/patcheComments',
  async (payload, thunkAPI) => {
    try {
      const data = await instance.patch(`comments/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const CommentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    //조회
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload; //store에 있는 comments에 서버에서 가져온 comments 넣기
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //등록
    [__postComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (item) => item.id !== action.payload
      );
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //수정
    [__patchComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      let newCont = state.comments.find(
        (item) => item.id === action.payload.id
      );
      //id로 찾고, 찾은 객체만 바꿔줌(content)
      newCont.content = action.payload.content;
    },
    [__patchComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = CommentsSlice.actions;
export default CommentsSlice.reducer;
