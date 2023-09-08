import {createSlice} from "@reduxjs/toolkit";
import {
    createProductsToCartByAccount,
    deleteProductFromCartByAccount,
    getProductByAccount, updateCartByStore,
    updateProductFromCartByAccount
} from "../../service/cartService";
const initialState = {
    allProductsFromCart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductByAccount.fulfilled, (state, action) => {
            state.allProductsFromCart = action.payload;
        });
        builder.addCase(deleteProductFromCartByAccount.fulfilled, (state, action) => {
            state.allProductsFromCart = state.allProductsFromCart.filter(
                (cartDetail) => cartDetail.id !== action.payload
            );
        });
        builder.addCase(updateProductFromCartByAccount.fulfilled, (state, action) => {
            state.allProductsFromCart = action.payload;
        });
        builder.addCase(updateCartByStore.fulfilled,(state, action)=>{
            state.allProductsFromCart = action.payload;
        })
        builder.addCase(createProductsToCartByAccount.fulfilled, (state, action) => {
            state.allProductsFromCart = [...state.allProductsFromCart, action.payload];
        });
    },
});

export default cartSlice.reducer;
