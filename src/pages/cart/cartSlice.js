import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[index].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[index].quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items[index].quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectItemCount = (state) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;
