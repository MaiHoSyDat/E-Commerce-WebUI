import {createSlice} from "@reduxjs/toolkit";
import {
    setFilterCategory,
    setFilterCheckedRating,
    setFilterCheckedShops, setFilterIdStatus,
    setFilterNameProduct, setFilterParam,
    setFilterPrice,
    setFilterQuantityShow,
    setFilterShopSingle,
    setFilterSortShow,
    setFilterUnCheckedRating,
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
        quantity: "",
        idStatus: null
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
            let arr = [...state.filterParam.ratings, Number(action.payload)];
            state.filterParam.ratings = arr;
        })
        builder.addCase(setFilterUnCheckedRating.fulfilled,(state,action) => {
            let arr = state.filterParam.ratings.filter(element => element != Number(action.payload));
            state.filterParam.ratings = arr;
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
        builder.addCase(setFilterShopSingle.fulfilled,(state,action) => {
            state.filterParam.idShops = [];
            state.filterParam.idShops.push(Number(action.payload));
        })
        builder.addCase(setFilterIdStatus.fulfilled,(state,action) => {
            if (action.payload == 0) state.filterParam.idStatus = null
            else state.filterParam.idStatus = Number(action.payload);
        })
        builder.addCase(setFilterParam.fulfilled,(state,action) => {
            state.filterParam.nameProduct = "";
            state.filterParam.category = "All Products";
            state.filterParam.idShops = [];
            state.filterParam.minPrice = "";
            state.filterParam.maxPrice = "";
            state.filterParam.ratings = [];
            state.filterParam.sort = "";
            state.filterParam.quantity = "";
            state.filterParam.idStatus = 2;
        })

    }
})
export default inputSlice.reducer;