import { configureStore } from "@reduxjs/toolkit";
import stockCountReducer from "../pages/store/StockCountSlice";
import cartReducer from "../pages/cart/cartSlice";
export const store = configureStore({
  reducer: {
    stockCount: stockCountReducer,
    cart: cartReducer,
  },
});
