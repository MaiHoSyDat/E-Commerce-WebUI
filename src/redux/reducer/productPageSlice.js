import {createSlice} from "@reduxjs/toolkit";
import {
    createProductsToCartByAccount,
    deleteProductFromCartByAccount,
    getProductByAccount, updateCartByStore,
    updateProductFromCartByAccount
} from "../../service/cartService";
import {getProductPage} from "../../service/productPageAction";

const initialState = {
    products: [],
    currentPage: 0,
    totalPages: 1,
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

// export const {setProducts} = productPageSlice.actions;

export default productPageSlice.reducer;