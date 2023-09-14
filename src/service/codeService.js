import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCodeByShop = createAsyncThunk(
    "code/getAllCodeByShop",
    async (idShop) => {
        const res = await axios.get("http://localhost:8080/code/shop/" + idShop);
        return res.data;
    }
)
export const setQuantity = createAsyncThunk(
    "code/setQuantity",
    async ([idCode, code]) => {
        const res = await axios.post("http://localhost:8080/code/setQuantity/" + idCode, code);
        return res.data;
    }
)