
import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../features/product/productPageSlice";
import productDetailReducer from "../features/product/productDetailSlice";
export const store = configureStore({
    reducer: {
        products: productReducer,
        productDetail: productDetailReducer,
    },
})