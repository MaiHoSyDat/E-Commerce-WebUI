import {createSlice} from "@reduxjs/toolkit";
import {getAllProducts, getAllProductsByShop, getFilterProducts, getProduct} from "../../service/productService";

const initialState = {
    allProducts: [],
    filterProducts: [],
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
        builder.addCase(getProduct.fulfilled,(state,action) => {
            state.product = action.payload;
        })
        builder.addCase(getAllProductsByShop.fulfilled,(state,action) => {
            state.shopProducts = action.payload;
        })
    }
})
export default productSlice.reducer;