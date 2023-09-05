import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

//lấy tất cả sp
export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
// lấy ra 1 sp chi tiết
export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (idProduct) => {
        const res = await axios.get("" + idProduct);
        return res.data;
    }
)
// lấy ra tất cả sp theo bộ lọc (shop = ?, category = ?, ...)
export const getFilterProducts = createAsyncThunk(
    "product/getFilterProducts",
    async (filterParam) => {
        const res = await axios.get("" + filterParam);
        return res.data;
    }
)
export const createProduct = createAsyncThunk(
    "product/createProduct",
    async (newProduct) => {
        const res = await axios.post("", newProduct);
        return res.data;
    }
)
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({idProduct, updateProduct}) => {
        const res = await axios.post("" + idProduct, updateProduct);
        return res.data;
    }
)
export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async (idProduct) => {
        const res = await axios.get("" + idProduct);
        return res.data;
    }
)
