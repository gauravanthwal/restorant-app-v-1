import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isAuth: boolean;
  userInfo: any;
};
const initialState = {
  isAuth: false,
  userInfo: {},
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{}>) => {
      return {
        isAuth: true,
        userInfo: action.payload,
      };
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
