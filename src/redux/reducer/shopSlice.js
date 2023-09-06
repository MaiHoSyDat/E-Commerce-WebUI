import {createSlice} from "@reduxjs/toolkit";
import {} from "../../service/productService";
import {getShop, getShopByAccountLogin} from "../../service/shopService";
const initialState = {
    shopLogin: {},
    shop: {}
}
const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getShopByAccountLogin.fulfilled,(state,action) => {
            state.shopLogin = action.payload;
        })
        builder.addCase(getShop.fulfilled,(state,action) => {
            state.shop = action.payload;
        })
    }
})
export default shopSlice.reducer;