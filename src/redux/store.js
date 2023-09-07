import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import cartReducer from "./reducer/cartSlice";
import shopReducer from "./reducer/shopSlice";
import categoryReducer from "./reducer/categorySlice";
import inputReducer from "./reducer/inputSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        shop: shopReducer,
        category: categoryReducer,
        inputFilter: inputReducer
    }
})
