import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { ordersReducer } from "./ordersReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer: any = combineReducers({
  auth: authReducer,
  product: productReducer,
  order: ordersReducer,
  cart: cartReducer,
});
