import {createSlice} from "@reduxjs/toolkit";
import {getAllProducts, getFilterProducts, getProduct} from "../../service/productService";
const initialState = {
    allProducts: [],
    filterProducts: [],
    product: {}
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllProducts.fulfilled,(state,action) => {
            state.allProducts = action.payload;
        })
        builder.addCase(getFilterProducts.fulfilled,(state,action) => {
            state.filterProducts = action.payload;
        })
        builder.addCase(getProduct.fulfilled,(state,action) => {
            state.product = action.payload;
        })
    }
})
export default productSlice.reducer;