import {createSlice} from "@reduxjs/toolkit";
import {getAllFeedbackByProductId} from "../../service/feedbackService";
const initialState = {
    allFeedbackByProduct: []
}
const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllFeedbackByProductId.fulfilled,(state,action) => {
            state.allFeedbackByProduct = action.payload;
        })
    }
})
export default feedbackSlice.reducer;