import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProductsFromWishlist = createAsyncThunk(
    "wishlist/getAllProducts",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const createProductsToWishlist = createAsyncThunk(
    "wishlist/createProduct",
    async () => {
        const res = await axios.post("");
        return res.data;
    }
)
export const deleteProductFromWishlist = createAsyncThunk(
    "wishlist/deleteProduct",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)

