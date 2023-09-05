import {createSlice} from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        currentPage: 1,
        totalPages: 1,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload.content;
            state.currentPage = action.payload.number +1;
            state.totalPages = action.payload.totalPages;
        },
    },
});

export const {setProducts} = productSlice.actions;

export default productSlice.reducer;