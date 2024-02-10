import { Types } from "../Types";

const initialState = {
    myOrders: [],
    isLoadingOrder: false
};

export const ordersReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case Types.order.FETCH_MY_ORDERS:
      return {
        ...state,
        myOrders: payload,
      };


    default:
      return state;
  }
};
