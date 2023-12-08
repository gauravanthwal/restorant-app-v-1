import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import {
  addToCart,
  fetchCartService,
  removeFromCartService,
} from "@/services/cartService";

type InitialState = {
  cartItems: Array<{}>;
};
const initialState = {
  cartItems: [],
} as InitialState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<{}>) => {
    //   console.log("cart", action.payload);

    //   state.cartItems = [...state.cartItems, action.payload];
    // },
    removeFromCart: (state, action: PayloadAction<{}>) => {
      // state.cartItems = state.cartItems.filter((item)=> item.id != action.payload)
    },

    resetCartItems: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    // Getting Cart Items
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.cartItems = action?.payload?.cartItems;
    });
    
    builder.addCase(fetchCartItems.rejected, (state, action) => {});

    // // Add To Cart Items
    // builder.addCase(addCartToDB.fulfilled, (state, action) => {
      
    // });

    // // remove items from cart
    // builder.addCase(removeCartFromDB.fulfilled, (state, action) => {
      
    // });
  },
});

export const fetchCartItems: any = createAsyncThunk(
  "fetchCartItems",
  async () => {
    return fetchCartService();
  }
);

export const addCartToDB: any = createAsyncThunk(
  "addCartToDB",
  async (data: any, { dispatch }) => {
    const res = await addToCart(data);
    if (res?.success) {
      dispatch(fetchCartItems());
    }
  }
);

export const removeCartFromDB: any = createAsyncThunk(
  "removeCartFromDB",
  async (product: string, { dispatch }) => {
    const res = await removeFromCartService(product);
    if (res?.success) {
      dispatch(fetchCartItems());
    }
  }
);

export const { removeFromCart, resetCartItems } = cart.actions;
export default cart.reducer;
