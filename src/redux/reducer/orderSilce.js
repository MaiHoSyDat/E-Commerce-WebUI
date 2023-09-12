import {createSlice} from "@reduxjs/toolkit";

import {getAllOrdersByCustomer, getOrderById} from "../../service/orderService";
const initialState = {
    ordersByCustomer: [],
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
        builder.addCase(getOrderById.fulfilled,(state,action) => {
            state.order = action.payload;
        })
    }
})
export default orderSlice.reducer;