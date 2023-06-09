import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 1
};

export const stockCountSlice = createSlice({
    name: 'stockCount',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += parseInt(1);
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 1;
        }
    }
});

export const { increment, decrement, reset } = stockCountSlice.actions;
export default stockCountSlice.reducer;
