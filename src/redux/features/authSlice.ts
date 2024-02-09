import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

import { loginService } from "@/services/userService";
import { clearStorage, setInStorage } from "@/config/storageConfig";
import Cookie from "js-cookie";

type InitialState = {
  isAuth: boolean;
  user: any;
  isLoading: boolean;
};
const initialState = {
  isAuth: false,
  user: {},
  isLoading: false,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getTokenFromStorage: (state, action: PayloadAction<{}>) => {
      state.user.token = action.payload;
      state.isAuth = true;
    },
    logout: () => {
      clearStorage();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action?.payload?.success && action?.payload?.token) {
        Cookie.set("token", action?.payload?.token);
        // setInStorage("accessToken", action?.payload?.token);
        
        state.user.token = action?.payload?.token;
        state.isAuth = true;
        state.isLoading = false;
      } else {
        state.isLoading = false;
        state = initialState;
      }
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const loginUser: any = createAsyncThunk(
  "loginUser",
  async (userInfo) => {
    return loginService(userInfo);
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (userInfo) => {
    const res = await axios.post(
      "http://localhost:5000/api/v1/user/login",
      userInfo
    );
    return res?.data;
  }
);

export const { getTokenFromStorage, logout } = auth.actions;
export default auth.reducer;
