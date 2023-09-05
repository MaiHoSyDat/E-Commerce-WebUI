import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllShops = createAsyncThunk(
    "shop/getAllShops",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const getShop = createAsyncThunk(
    "shop/getShop",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)