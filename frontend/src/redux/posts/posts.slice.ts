import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllPosts,
  createpost,
  updatePost,
  deletepost,
} from "./posts.actions";
import { parserErrorMessage } from "../../helpers/response-error.parser";
const initialState = {
  posts: [],
  loading: false,
  error: "",
  success: "",
};

const postSlice = createSlice({
  name: "pos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createpost.pending, (state: any, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createpost.fulfilled, (state: any, action) => {
        state.loading = false;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(createpost.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(updatePost.pending, (state: any, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state: any, action) => {
        state.loading = false;
        state.sucess = true;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(deletepost.pending, (state: any, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletepost.fulfilled, (state: any, action) => {
        state.loading = false;
        state.sucess = true;
        state.error = null;
      })
      .addCase(deletepost.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(getAllPosts.pending, (state: any, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state: any, action) => {
        state.loading = false;
        state.sucess = true;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      });
  },
});
// export const {}

export const postsReducer = postSlice.reducer;
