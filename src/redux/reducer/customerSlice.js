import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories, getTenCategoriesPage} from "../../service/categoryService";
import {getAllCustomerBuyProductFromShop, getCustomerByAccountLogin} from "../../service/customerService";
const initialState = {
    customerLogin: {},
    customersBuyProductOfShop: []
}
const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCustomerByAccountLogin.fulfilled,(state,action) => {
            state.customerLogin = action.payload;
        })
        builder.addCase(getAllCustomerBuyProductFromShop.fulfilled,(state,action) => {
            state.customersBuyProductOfShop = action.payload;
        })
    }
})
export default customerSlice.reducer;