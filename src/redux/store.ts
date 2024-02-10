// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./features/authSlice";
// import cartReducer from "./features/cartSlice";
// import orderReducer  from "./features/orderSlice";
// import productReducer  from "./features/productSlice";

import {createStore, applyMiddleware, AnyAction, } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

// {
//   reducer: {
//     auth: authReducer,
//     cart: cartReducer,
//     order: orderReducer,
//     product: productReducer
//   },
// }
const initialState = {}
const middlewares = [thunk]

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
