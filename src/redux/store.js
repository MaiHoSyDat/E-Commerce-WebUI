import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import cartReducer from "./reducer/cartSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    }
})
