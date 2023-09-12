import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOrders = createAsyncThunk(
    "order/getAllOrders",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const getAllOrdersByCustomer = createAsyncThunk(
    "order/getAllOrdersByCustomer",
    async (idCustomer) => {
        const res = await axios.get("http://localhost:8080/customer/" + idCustomer + "/orders");
        return res.data;
    }
)
export const getAllOrdersByShop = createAsyncThunk(
    "order/getAllOrdersByShop",
    async (idShop) => {
        const res = await axios.get("http://localhost:8080/shop/" + idShop + "/orders");
        return res.data;
    }
)
export const getOrderById = createAsyncThunk(
    "order/getOrderById",
    async (idOrder) => {
        const res = await axios.get("http://localhost:8080/order/" + idOrder);
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
export const deleteOrder = createAsyncThunk(
    "order/deleteOrder",
    async (idOrder) => {
        const res = await axios.get("http://localhost:8080/order/delete/" + idOrder);
        return res.data;
    }
)