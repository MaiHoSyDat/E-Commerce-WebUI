import {createSlice} from "@reduxjs/toolkit";

import {getAllOrdersByCustomer, getAllOrdersByShop, getOrderById} from "../../service/orderService";
const initialState = {
    ordersByCustomer: [],
    ordersByShop: [],
    order: {}
}
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllOrdersByCustomer.fulfilled,(state,action) => {
            state.ordersByCustomer = action.payload;
        })
        builder.addCase(getAllOrdersByShop.fulfilled,(state,action) => {
            state.ordersByShop = action.payload;
        })
        builder.addCase(getOrderById.fulfilled,(state,action) => {
            state.order = action.payload;
        })
    }
})
export default orderSlice.reducer;