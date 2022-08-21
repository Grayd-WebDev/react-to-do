import { createSlice } from "@reduxjs/toolkit";
import {
  checkAuth,
  loginUser,
  logoutUser,
} from "../actionCreators/actionCreators";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: {},
    error: {},
    isLoading: false,
  },
  extraReducers: {
    //checkAuth
    [checkAuth.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = {};
      state.user = action.payload;
    },
    [checkAuth.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [checkAuth.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //Login
    [loginUser.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = {};
      state.user = action.payload;
    },
    [loginUser.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //Logout
    [logoutUser.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [logoutUser.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = {};
      state.user = {};
    },
    [logoutUser.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
