import {createSlice} from "@reduxjs/toolkit";

import {getAllReviewsByProductAndCustomer} from "../../service/reviewService";
const initialState = {
    reviewsByProductAndCustomer: []
}
const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllReviewsByProductAndCustomer.fulfilled,(state,action) => {
            state.reviewsByProductAndCustomer = action.payload;
        })
    }
})
export default reviewSlice.reducer;