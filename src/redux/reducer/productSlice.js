import {createSlice} from "@reduxjs/toolkit";
import {
    getAllProducts,
    getAllProductsByShop,
    getFilterProducts,
    getProduct,
    getTenProductsToIndex, getThreeProductsMaxRating
} from "../../service/productService";
const initialState = {
    allProducts: [],
    filterProducts: [],
    indexProducts: [],
    indexProductsMaxRating: [],
    shopProducts: [],
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
        builder.addCase(getTenProductsToIndex.fulfilled,(state,action) => {
            state.indexProducts = action.payload;
        })
        builder.addCase(getThreeProductsMaxRating.fulfilled,(state,action) => {
            state.indexProductsMaxRating = action.payload;
        })
        builder.addCase(getProduct.fulfilled,(state,action) => {
            state.product = action.payload;
        })
        builder.addCase(getAllProductsByShop.fulfilled,(state,action) => {
            state.shopProducts = action.payload;
        })
    }
})
export default productSlice.reducer;