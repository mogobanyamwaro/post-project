import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, register } from "./auth.actions";
import { parserErrorMessage } from "../../helpers/response-error.parser";
const initialState = {
  _id: null,
  loading: false,
  error: "",
  success: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    unsetToken: (state: any, action: PayloadAction) => {
      state._id = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state: any, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state: any, action) => {
        state.loading = false;
        state.error = null;
        state._id = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(register.pending, (state: any, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state: any, action) => {
        state.loading = false;
        state.sucess = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      });
  },
});

export const { unsetToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
