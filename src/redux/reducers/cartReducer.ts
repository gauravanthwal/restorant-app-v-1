import { Types } from "../Types";

const initialState = {
    cartItems: [],
    isLoadingCart: false
};

export const cartReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case Types.cart.FETCH_CART_ITEMS:
      return {
        ...state,
        cartItems: payload.cartItems,
      };
      
    case Types.user.LOGOUT_USER:
      return state;

    default:
      return state;
  }
};
