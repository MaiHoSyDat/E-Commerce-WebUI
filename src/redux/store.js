import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import productPageReducer from "./reducer/productPageSlice";
import cartReducer from "./reducer/cartSlice";
import shopReducer from "./reducer/shopSlice";
import categoryReducer from "./reducer/categorySlice";
import inputReducer from "./reducer/inputSlice";
import productDetailReducer from "./reducer/productDetailSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        category: categoryReducer,
        inputFilter: inputReducer,
        shop: shopReducer,
        productDetail: productDetailReducer,
        products: productPageReducer
    }
})
