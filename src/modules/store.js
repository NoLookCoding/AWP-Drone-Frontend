import { configureStore } from "@reduxjs/toolkit";
import stockCountReducer from "../pages/store/StockCountSlice";

export const store = configureStore({
    reducer: stockCountReducer
});