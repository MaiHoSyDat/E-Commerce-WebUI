import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories} from "../../service/categoryService";
const initialState = {
    allCategories: [],
}
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllCategories.fulfilled,(state,action) => {
            state.allCategories = action.payload;
        })

    }
})
export default categorySlice.reducer;