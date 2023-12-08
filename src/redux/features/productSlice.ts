import { getMyOrders } from "@/services/orderService";
import { getAllProducts, getProductsById } from "@/services/productService";
import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

type InitialState = {
  products: Array<{}>;
  currentProduct: {};
};
const initialState = {
  products: [],
  currentProduct: {},
} as InitialState;

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    // reducer will go here
  },
  extraReducers: (builder) => {
    // getAllProducts
    builder.addCase(getProducts.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload?.success) {
        state.products = payload.products;
      }
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.products = [];
    });

    // getProductById
    builder.addCase(getProductById.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload.success) {
        state.currentProduct = payload.product;
      }
    });
    builder.addCase(getProductById.rejected, (state, action)=>{
      state.currentProduct = {};
    })
  },
});

export const getProducts: any = createAsyncThunk("getProducts", async () => {
  return getAllProducts();
});

export const getProductById: any = createAsyncThunk(
  "getProductById",
  async (id) => {
    return getProductsById(id);
  }
);

export const {} = product.actions;
export default product.reducer;
