import {createSlice} from "@reduxjs/toolkit";
import {
    setFilterCategory, setFilterCheckedRating,
    setFilterCheckedShops,
    setFilterNameProduct, setFilterPrice, setFilterQuantityShow, setFilterSortShow, setFilterUnCheckedRating,
    setFilterUnCheckedShops
} from "../../service/inputService";
const initialState = {
    filterParam: {
        nameProduct: "",
        category: "All Products",
        idShops: [],
        minPrice: "",
        maxPrice: "",
        ratings: [],
        sort: "",
        quantity: ""
    }
}
const inputSlice = createSlice({
    name: "inputFilter",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(setFilterNameProduct.fulfilled,(state,action) => {
            state.filterParam.nameProduct = action.payload;
        })
        builder.addCase(setFilterCategory.fulfilled,(state,action) => {
            state.filterParam.category = action.payload;
        })
        builder.addCase(setFilterCheckedShops.fulfilled,(state,action) => {
            let arr = [...state.filterParam.idShops, Number(action.payload)];
            state.filterParam.idShops = arr;
        })
        builder.addCase(setFilterUnCheckedShops.fulfilled,(state,action) => {
            let arr = state.filterParam.idShops.filter(element => element != Number(action.payload));
            state.filterParam.idShops = arr;
        })
        builder.addCase(setFilterCheckedRating.fulfilled,(state,action) => {
            let arr = [...state.filterParam.rating, Number(action.payload)];
            state.filterParam.rating = arr;
        })
        builder.addCase(setFilterUnCheckedRating.fulfilled,(state,action) => {
            let arr = state.filterParam.rating.filter(element => element != Number(action.payload));
            state.filterParam.rating = arr;
        })
        builder.addCase(setFilterPrice.fulfilled,(state,action) => {
            if (action.payload == "") {
                state.filterParam.minPrice = null;
                state.filterParam.maxPrice = null;
            } else {
                let arr = action.payload.split(",");
                state.filterParam.minPrice = Number(arr[0]);
                state.filterParam.maxPrice = Number(arr[1]);
            }
        })
        builder.addCase(setFilterQuantityShow.fulfilled,(state,action) => {
            state.filterParam.quantity = Number(action.payload);
        })
        builder.addCase(setFilterSortShow.fulfilled,(state,action) => {
            state.filterParam.sort = action.payload;
        })

    }
})
export default inputSlice.reducer;