import {createSlice} from "@reduxjs/toolkit";
import {saveAccountLogin} from "../../service/accountService";

const initialState = {
    account: JSON.parse(localStorage.getItem("account"))
}
const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(saveAccountLogin.fulfilled, (state, action) => {
            state.account = action.payload;
        });
    }
})
export default accountSlice.reducer;