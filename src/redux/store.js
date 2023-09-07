import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import productPageReducer from "./reducer/productPageSlice";
import cartReducer from "./reducer/cartSlice";
import shopReducer from "./reducer/shopSlice";
import productDetailReducer from "./reducer/productDetailSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        shop: shopReducer,
        productDetail: productDetailReducer,
        products: productPageReducer
    }
})
