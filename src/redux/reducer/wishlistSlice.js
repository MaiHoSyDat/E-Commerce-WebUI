import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories, getTenCategoriesPage} from "../../service/categoryService";
import {getWishlistByCustomerId} from "../../service/wishlistService";
const initialState = {
    wishlistByCustomer: {}
}
const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getWishlistByCustomerId.fulfilled,(state,action) => {
            state.wishlistByCustomer = action.payload;
        })
    }
})
export default wishlistSlice.reducer;