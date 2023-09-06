import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProductsFromCartByAccount = createAsyncThunk(
    "cart/getAllProducts",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const UpdateProductFromCartByAccount = createAsyncThunk(
    "cart/updateProduct",
    async () => {
        const res = await axios.post("");
        return res.data;
    }
)
export const createProductsToCartByAccount = createAsyncThunk(
    "cart/createProduct",
    async () => {
        const res = await axios.post("");
        return res.data;
    }
)
export const deleteProductFromCartByAccount = createAsyncThunk(
    "cart/deleteProduct",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)

