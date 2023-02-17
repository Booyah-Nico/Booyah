import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//getComment()
export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch(error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
 );

 //__postComment 
export const __postComment = createAsyncThunk(
  "comments/postComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/comments", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch(error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
}

export const CommentsSlice = createSlice({
  name: "comments",
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
      state.comments.push(action.payload)
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  } 

})

export const {} = CommentsSlice.actions;
export default CommentsSlice.reducer;