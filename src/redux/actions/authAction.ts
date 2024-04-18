import { loginService } from "@/services/userService";
import { Types } from "../Types";
import { clearStorage } from "@/config/storageConfig";
import Cookie from "js-cookie";
import { clearCartState } from "./cartAction";
import { clearOrderState } from "./ordersAction";
import { clearProductState } from "./productAction";
import toast from "react-hot-toast";

export const loginUser: any = (params: any) => async (dispatch: any) => {
  try {
    dispatch(setLoading());
    const data = await loginService(params);
    console.log(data);
    
    if (data?.success && data?.token) {
      Cookie.set("token", data?.token);
      dispatch({
        type: Types.user.LOGIN_USER,
        payload: data,
      });
      toast.success("Login Success.")
    }else if(data?.data?.error){
      toast.error(data?.data?.message);
    }
    dispatch(removeLoading());
  } catch (error) {
    console.log(error);
    dispatch(removeLoading());
  }
};

export const getTokenFromStorage: any =
  (token: any) => async (dispatch: any) => {
    dispatch({
      type: Types.user.GET_TOKEN_FROM_STORAGE,
      payload: token,
    });
  };

export const setLoading: any = () => async (dispatch: any) => {
  dispatch({
    type: Types.user.SET_USER_LOADING,
  });
};
export const removeLoading: any = () => async (dispatch: any) => {
  dispatch({
    type: Types.user.REMOVE_USER_LOADING,
  });
};

export const logout: any = () => async (dispatch: any) => {
  clearStorage(); // removing token from cookie

  dispatch({
    type: Types.user.LOGOUT_USER,
  });
  dispatch(clearCartState());
  dispatch(clearOrderState());
  dispatch(clearProductState());
};

export const clearUserState: any = () => async (dispatch: any) => {
  dispatch({
    type: Types.user.CLEAR_USER_STATE,
  });
};
