import {createSlice} from "@reduxjs/toolkit";

import {getAllCodeByShop} from "../../service/codeService";
const initialState = {
    codeByShop: [],
}
const codeSlice = createSlice({
    name: "code",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllCodeByShop.fulfilled,(state,action) => {
            state.codeByShop = action.payload;
        })
    }
})
export default codeSlice.reducer;