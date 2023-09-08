import {createSlice} from "@reduxjs/toolkit";
import {
    getAllShops,
    getShop,
    getShopByAccountLogin,
    getShopDTO,
    getShopDTOByAccountLogin
} from "../../service/shopService";
const initialState = {
    allShops: [],
    shopLogin: {},
    shopDTO: {},
    shopDTOLogin: undefined,
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
        builder.addCase(getShopDTO.fulfilled,(state,action) => {
            state.shopDTO = action.payload;
        })
        builder.addCase(getShopDTOByAccountLogin.fulfilled,(state,action) => {
            state.shopDTOLogin = action.payload;
        })
        builder.addCase(getShop.fulfilled,(state,action) => {
            state.shop = action.payload;
        })
        builder.addCase(getAllShops.fulfilled,(state,action) => {
            state.allShops = action.payload;
        })
    }
})
export default shopSlice.reducer;