import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    items: [],
    status: 'idle',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter((product) => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.items.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                // Safely update the product
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        },
    },
});

export const { addProduct, removeProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
