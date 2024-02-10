import { loginService } from "@/services/userService";
import { Types } from "../Types";
import { addToCart, fetchCartService, removeFromCartService } from "@/services/cartService";
import { getAllProducts, getProductsById } from "@/services/productService";

export const getProducts:any = () => async (dispatch: any) => {
  try {
    const data = await getAllProducts();
    if (data?.success) {
      dispatch({
        type: Types.product.GET_PRODUCTS,
        payload: data.products,
      });
    }
  } catch (error) {}
};

export const getProductById:any = (params:any) => async (dispatch: any) => {
  try {
    const data = await getProductsById(params);
    if (data?.success) {
      dispatch({
        type: Types.product.GET_PRODUCT_BY_ID,
        payload: data.product
      });
    }
  } catch (error) {}
};


export const logout = () => async (dispatch: any) => {
  dispatch({
    type: Types.user.LOGOUT_USER,
  });
};
