import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import productPageReducer from "./reducer/productPageSlice";
import cartReducer from "./reducer/cartSlice";
import shopReducer from "./reducer/shopSlice";
import categoryReducer from "./reducer/categorySlice";
import inputReducer from "./reducer/inputSlice";
import productDetailReducer from "./reducer/productDetailSlice";
import wishlistReducer from "./reducer/wishlistSlice";
import customerReducer from "./reducer/customerSlice";
import orderReducer from "./reducer/orderSilce";
import orderDetailReducer from "./reducer/orderDetailSlice";
import statusReducer from "./reducer/statusSlice";
import codeReducer from "./reducer/codeSlice";
import feedbackReducer from "./reducer/feedbackSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        category: categoryReducer,
        inputFilter: inputReducer,
        shop: shopReducer,
        productDetail: productDetailReducer,
        products: productPageReducer,
        wishlist: wishlistReducer,
        customer: customerReducer,
        order: orderReducer,
        orderDetail: orderDetailReducer,
        status: statusReducer,
        code: codeReducer,
        feedback: feedbackReducer
    }
})
