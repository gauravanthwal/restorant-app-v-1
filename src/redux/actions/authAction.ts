import { loginService } from "@/services/userService";
import { Types } from "../Types";
import { clearStorage } from "@/config/storageConfig";
import Cookie from "js-cookie";

export const loginUser: any = (params: any) => async (dispatch: any) => {
  try {
    const data = await loginService(params);
    if (data?.success && data?.token) {
      Cookie.set("token", data?.token);
      dispatch({
        type: Types.user.LOGIN_USER,
        payload: data,
      });
    }
  } catch (error) {}
};

export const getTokenFromStorage: any =
  (token: any) => async (dispatch: any) => {
    dispatch({
      type: Types.user.GET_TOKEN_FROM_STORAGE,
      payload: token,
    });
  };

export const logout: any = () => async (dispatch: any) => {
  clearStorage();
};
