import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories, getTenCategoriesPage} from "../../service/categoryService";
import {getCustomerByAccountLogin} from "../../service/customerService";
const initialState = {
    customerLogin: {}
}
const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCustomerByAccountLogin.fulfilled,(state,action) => {
            state.customerLogin = action.payload;
        })
    }
})
export default customerSlice.reducer;