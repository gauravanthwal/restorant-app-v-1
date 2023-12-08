import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

import { loginService } from "@/services/userService";
import { clearStorage, setInStorage } from "@/config/storageConfig";

type InitialState = {
  isAuth: boolean;
  user: any;
};
const initialState = {
  isAuth: false,
  user: {},
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getTokenFromStorage: (state, action: PayloadAction<{}>) => {
      setInStorage("accessToken", action?.payload);

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
      console.log(action);

      if (action?.payload?.success && action?.payload?.token) {
        state.user.token = action?.payload?.token;
        state.isAuth = true;
        setInStorage("accessToken", action?.payload?.token);
      } else {
        state = initialState;
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state = initialState;
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
