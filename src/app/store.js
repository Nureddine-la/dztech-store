import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

// The Redux store is the shared place where our application's global state lives.
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});