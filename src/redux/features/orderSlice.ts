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
};
const initialState = {
  myOrders: [],
} as InitialState;

export const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrders: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      const { payload } = action;

      if (payload.success) {
      }
      state.myOrders = payload?.orders;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {});
  },
});


export const fetchOrders: any = createAsyncThunk("fetchOrders", async () => {
  return getMyOrders();
});

export const createNewOrder: any = createAsyncThunk(
  "createNewOrder",
  async (data: any, {dispatch}) => {
    const res = await createNewOrderService(data)

    if(res?.success){
      dispatch(removeCartFromDB(data.product_id))
    }
  }
);

export const {resetOrders} = order.actions;
export default order.reducer;
