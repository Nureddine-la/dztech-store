import { createSlice } from "@reduxjs/toolkit";

// This is the initial global cart state.
const initialState = {
  items: [],
};

// A slice groups together a piece of state and the actions that can change it.
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    increaseQuantity(state, action) {
      const item = state.items.find((product) => product.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((product) => product.id === action.payload);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((product) => product.id !== action.payload);
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;