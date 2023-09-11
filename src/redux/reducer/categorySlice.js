import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories, getTenCategoriesPage} from "../../service/categoryService";
const initialState = {
    allCategories: [],
    tenCategoriesPage: []
}
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllCategories.fulfilled,(state,action) => {
            state.allCategories = action.payload;
        })
        builder.addCase(getTenCategoriesPage.fulfilled,(state,action) => {
            state.tenCategoriesPage = action.payload;
        })
    }
})
export default categorySlice.reducer;