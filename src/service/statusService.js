import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllStatusOrder = createAsyncThunk(
    "shop/getAllStatusOrder",
    async () => {
        const res = await axios.get("http://localhost:8080/status/order");
        return res.data;
    }
)