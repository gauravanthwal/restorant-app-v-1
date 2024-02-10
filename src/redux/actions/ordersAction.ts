import { loginService } from "@/services/userService";
import { Types } from "../Types";
import {
  addToCart,
  fetchCartService,
  removeFromCartService,
} from "@/services/cartService";
import { getAllProducts, getProductsById } from "@/services/productService";
import { createNewOrderService, getMyOrders } from "@/services/orderService";
import { removeCartFromDB } from "./cartAction";

export const createNewOrder:any =
  (params: any) => async (dispatch: any) => {
    try {
      const data = await createNewOrderService(params);
      if (data?.success) {
        dispatch(removeCartFromDB(params.product_id));
      }
    } catch (error) {}
  };

export const fetchOrders:any = () => async (dispatch: any) => {
  try {
    const data = await getMyOrders();
    if (data?.success) {
      dispatch({
        type: Types.order.FETCH_MY_ORDERS,
        payload: data.orders,
      });
    }
  } catch (error) {}
};

export const logout = () => async (dispatch: any) => {
  dispatch({
    type: Types.user.LOGOUT_USER,
  });
};
