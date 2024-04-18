import { loginService } from "@/services/userService";
import { Types } from "../Types";
import { addToCart, fetchCartService, removeFromCartService } from "@/services/cartService";
import toast from "react-hot-toast";

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
      toast.success("Item added to cart.")
    }
  } catch (error) {}
};

export const removeCartFromDB:any = (params:any) => async (dispatch: any) => {
  try {
    const data = await removeFromCartService(params);
    if (data?.success) {
      dispatch(fetchCartItems());
      toast.error("Item removed from cart.")
    }
  } catch (error) {}
};

export const clearCartState: any = () => async (dispatch: any) => {
  dispatch({
    type: Types.cart.CLEAR_CART_STATE,
  });
};
