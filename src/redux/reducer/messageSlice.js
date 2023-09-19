import {createSlice} from "@reduxjs/toolkit";

import {getAllMessageBySenderIdAndReceiverId, pushMessage} from "../../service/messageService";
const initialState = {
    messagesByTwoAccount: []
}
const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllMessageBySenderIdAndReceiverId.fulfilled,(state,action) => {
            state.messagesByTwoAccount = action.payload;
        })
        builder.addCase(pushMessage.fulfilled,(state,action) => {
            let newArr = [...state.messagesByTwoAccount, action.payload];
            state.messagesByTwoAccount = newArr;
        })
    }
})
export default messageSlice.reducer;