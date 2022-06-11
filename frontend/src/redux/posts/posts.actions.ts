// import
import { setMessage } from "../wrapper";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostService } from "./posts.service";

export const createpost = createAsyncThunk(
  "post/create",
  async (input: any, thunkApi) => {
    try {
      const response = await PostService.createPost(input);
      return response.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage({ message }));
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const updatePost = createAsyncThunk(
  "post/update",
  async (input: any, thunkApi) => {
    try {
      const data = await PostService.updatePost(input.id, input);
      return data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deletepost = createAsyncThunk(
  "post/delete",
  async (input: any, thunkApi) => {
    try {
      const data = await PostService.deletePost(input);
      return data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getAllPosts = createAsyncThunk("post/all", async (_, thunkApi) => {
  try {
    const data = await PostService.getAllposts();
    return data;
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkApi.dispatch(setMessage(message));
    return thunkApi.rejectWithValue(message);
  }
});
