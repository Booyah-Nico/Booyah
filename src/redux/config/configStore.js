import { configureStore } from "@reduxjs/toolkit";

import comments from "../modules/CommentsSlice";

const store = configureStore({
  reducer: {
    comments,
  },
});

export default store;
