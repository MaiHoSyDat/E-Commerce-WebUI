import {createSlice} from "@reduxjs/toolkit";

import {
    getAllNotificationsByReceiverCustomer,
    getAllNotificationsByReceiverShop
} from "../../service/notificationService";
const initialState = {
    notificationByCustomer: [],
    notificationByShop: []
}
const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllNotificationsByReceiverCustomer.fulfilled,(state,action) => {
            state.notificationByCustomer = action.payload;
        })
        builder.addCase(getAllNotificationsByReceiverShop.fulfilled,(state,action) => {
            state.notificationByShop = action.payload;
        })
    }
})
export default notificationSlice.reducer;