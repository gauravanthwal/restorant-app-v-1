import { Types } from "../Types";

const initialState = {
  products: [],
  currentProduct: {},
};

export const productReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case Types.product.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case Types.product.GET_PRODUCT_BY_ID:
      return {
        ...state,
        currentProduct: payload,
      };

    default:
      return state;
  }
};
