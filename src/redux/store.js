import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import cartReducer from "./reducer/cartSlice";
import shopReducer from "./reducer/shopSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        shop: shopReducer
    }
})
