import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    product: null,
    loading: false,
    error: null,
};

const productDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducers: {
        fetchProductDetailRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductDetailSuccess: (state, action) => {
            state.loading = false;
            state.product = action.payload;
        },
        fetchProductDetailFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchProductDetailRequest,
    fetchProductDetailSuccess,
    fetchProductDetailFailure,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;