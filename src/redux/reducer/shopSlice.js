import {createSlice} from "@reduxjs/toolkit";
import {
    getAllShops, getFiveShopsPage,
    getShop,
    getShopByAccountLogin,
    getShopDTO,
    getShopDTOByAccountLogin, saveIdShop
} from "../../service/shopService";
const initialState = {
    allShops: [],
    fiveShopsPage: [],
    shopLogin: {},
    shopDTO: undefined,
    shopDTOLogin: undefined,
    shop: {},
    idAccountByShopId: 0
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
        builder.addCase(getFiveShopsPage.fulfilled,(state,action) => {
            state.fiveShopsPage = action.payload;
        })
        builder.addCase(saveIdShop.fulfilled,(state,action) => {
            state.idAccountByShopId = action.payload.id;
        })
    }
})
export default shopSlice.reducer;