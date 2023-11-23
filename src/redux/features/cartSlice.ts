import {
    AsyncThunk,
    createAsyncThunk,
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";

  
import { fetchCartService } from "@/services/cartService";
  
  type InitialState = {
    cartItems: Array<{}>
  };
  const initialState = {
    cartItems: []
  } as InitialState;
  
  export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<{}>) => {
        state.cartItems = [...state.cartItems, action.payload]
      },
      removeFromCart:(state, action: PayloadAction<{}>) =>{
        // state.cartItems = state.cartItems.filter((item)=> item.id != action.payload)
      }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCartItems.fulfilled, (state, action) => {
        state.cartItems = action?.payload?.cartItems;
  
      });
      builder.addCase(fetchCartItems.rejected, (state, action) => {
        
      });
    },
  });
  
  export const fetchCartItems: any = createAsyncThunk(
    "fetchCartItems",
    async () => {
      return fetchCartService()
    }
  );
  
  
  
  export const { addToCart, removeFromCart } = cart.actions;
  export default cart.reducer;
  