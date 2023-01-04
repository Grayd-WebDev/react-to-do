import { createSlice } from "@reduxjs/toolkit";
import {
  checkAuth,
  loginUser,
  logoutUser,
  registerUser
} from "../actionCreators";

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
      state.isAuth = false;
      state.error = {};
      state.user = {};
    },
    [loginUser.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = {};
      state.user = action.payload;
    },
    [loginUser.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
      state.user = {};
    },
    //Logout
    [logoutUser.pending.type]: (state, action) => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = {};
      state.user = {};
    },
    [logoutUser.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = {};
      state.user = {};
    },
    [logoutUser.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
      state.user = {};
    },
    //Register
    [registerUser.pending.type]: (state, action) => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = {};
      state.user = {};
    },
    [registerUser.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = {};
      state.user = action.payload;
    },
    [registerUser.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
      state.user = {};
    },
  },
});

export default authSlice.reducer;
