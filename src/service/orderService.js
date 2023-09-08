import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOrders = createAsyncThunk(
    "order/getAllOrders",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const getAllOrdersByAccount = createAsyncThunk(
    "order/getAllOrdersByAccount",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const getAllOrdersByShop = createAsyncThunk(
    "order/getAllOrdersByShop",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const updateOrder = createAsyncThunk(
    "order/updateOrder",
    async ({idOrder, updateOrder}) => {
        const res = await axios.post("" + idOrder, updateOrder);
        return res.data;
    }
)