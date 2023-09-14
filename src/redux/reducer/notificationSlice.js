import {createSlice} from "@reduxjs/toolkit";

import {getAllNotificationsByReceiverCustomer} from "../../service/notificationService";
const initialState = {
    notificationByCustomer: [],
}
const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllNotificationsByReceiverCustomer.fulfilled,(state,action) => {
            state.notificationByCustomer = action.payload;
        })
    }
})
export default notificationSlice.reducer;