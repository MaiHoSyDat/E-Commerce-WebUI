import {createSlice} from "@reduxjs/toolkit";
import {getAllProductsFromCartByAccount} from "../../service/cartService";
const initialState = {
    allProductsFromCart: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllProductsFromCartByAccount.fulfilled,(state,action) => {
            state.allProductsFromCart = action.payload;
        })

    }
})
export default cartSlice.reducer;