import {createSlice} from "@reduxjs/toolkit";

import {getAllOrdersByCustomer} from "../../service/orderService";
import {getAllOrderDetailsByOrder} from "../../service/orderDetailService";
const initialState = {
    orderDetailsByOrder: []
}
const orderSlice = createSlice({
    name: "orderDetail",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllOrderDetailsByOrder.fulfilled,(state,action) => {
            state.orderDetailsByOrder = action.payload;
        })
    }
})
export default orderSlice.reducer;