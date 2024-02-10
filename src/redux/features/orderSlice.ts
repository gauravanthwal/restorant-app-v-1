import { createNewOrderService, getMyOrders } from "@/services/orderService";
import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { removeCartFromDB } from "./cartSlice";

type InitialState = {
  myOrders: Array<{}>;
  isLoadingOrder: boolean;
};
const initialState = {
  myOrders: [],
  isLoadingOrder: false,
} as InitialState;

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrders: (state) => {
      state.myOrders = [];
      state.isLoadingOrder = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      const { payload } = action;

      if (payload?.success) {
        state.myOrders = payload?.orders;
      }
      state.isLoadingOrder = false;
    });
    builder.addCase(fetchOrders.pending, (state, action) => {
      state.isLoadingOrder = true;
    });
  },
});

export const fetchOrders: any = createAsyncThunk("fetchOrders", async () => {
  return getMyOrders();
});

export const createNewOrder: any = createAsyncThunk(
  "createNewOrder",
  async (data: any, { dispatch }) => {
    const res = await createNewOrderService(data);

    if (res?.success) {
      dispatch(removeCartFromDB(data.product_id));
    }
  }
);

export const { resetOrders } = orderSlice.actions;
export default orderSlice.reducer;
