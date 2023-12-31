import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCustomers = createAsyncThunk(
    "customer/getAllCustomers",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const getCustomerByAccountLogin = createAsyncThunk(
    "customer/getCustomerByAccountLogin",
    async (idAccount) => {
        const res = await axios.get("http://localhost:8080/customer/" + idAccount);
        return res.data;
    }
)
export const getAllCustomerBuyProductFromShop = createAsyncThunk(
    "customer/getAllCustomerBuyProductFromShop",
    async (idShop) => {
        const res = await axios.get("http://localhost:8080/customer/buyProductOfShop/" + idShop);
        return res.data;
    }
)