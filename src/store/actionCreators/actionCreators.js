import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/httpCommon";
import axios from "axios";

export const checkAuth = createAsyncThunk(
  "user/checkAuth",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("http://localhost:7000/api/refresh", {
        withCredentials: true,
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      });
      if (response.data.userData.accessToken) {
        localStorage.setItem("accessToken", response.data.userData.accessToken);
      }
      return response.data.userData;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password, navigate }, thunkApi) => {
    try {
      const response = await http.post("login", { email, password });
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/", { replace: true });

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, thunkApi) => {
    try {
      const response = await http.post("logout");
      localStorage.removeItem("accessToken");
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ email, password, navigate }, thunkApi) => {
    try {
      const response = await http.post("registration", { email, password });
      localStorage.setItem("accessToken", response.data.userData.accessToken);
      navigate("/", { replace: true });
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

