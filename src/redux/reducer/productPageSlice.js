import {createSlice} from "@reduxjs/toolkit";

import {getProductPage} from "../../service/productPageAction";

const initialState = {
    products: [],
    currentPage: 0,
    totalPages: 2,
}
const productPageSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductPage.fulfilled, (state, action) => {
            state.products = action.payload;
        });

    },
});

export default productPageSlice.reducer;