import {createSlice} from "@reduxjs/toolkit";

import {getAllStatusOrder} from "../../service/statusService";
const initialState = {
    statusOrder: []
}
const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllStatusOrder.fulfilled,(state,action) => {
            state.statusOrder = action.payload;
        })
    }
})
export default statusSlice.reducer;