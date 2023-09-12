import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getAllOrderDetailsByOrder = createAsyncThunk(
    "order/getAllOrderDetailsByOrder",
    async (idOrder) => {
        const res = await axios.get("http://localhost:8080/customer/orderDetail/" + idOrder);
        return res.data;
    }
)