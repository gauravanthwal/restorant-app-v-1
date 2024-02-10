import { loginService } from "@/services/userService";
import { Types } from "../Types";
import { addToCart, fetchCartService, removeFromCartService } from "@/services/cartService";

export const fetchCartItems:any = () => async (dispatch: any) => {
  try {
    const data = await fetchCartService();
    if (data?.success) {
      dispatch({
        type: Types.cart.FETCH_CART_ITEMS,
        payload: data,
      });
    }
  } catch (error) {}
};

export const addCartToDB:any = (params:any) => async (dispatch: any) => {
  try {
    const data = await addToCart(params);
    if (data?.success) {
      dispatch(fetchCartItems());
    }
  } catch (error) {}
};

export const removeCartFromDB:any = (params:any) => async (dispatch: any) => {
  try {
    const data = await removeFromCartService(params);
    if (data?.success) {
      dispatch(fetchCartItems());
    }
  } catch (error) {}
};

export const logout = () => async (dispatch: any) => {
  dispatch({
    type: Types.user.LOGOUT_USER,
  });
};
