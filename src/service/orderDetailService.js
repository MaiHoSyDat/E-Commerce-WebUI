import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getAllOrderDetailsByOrder = createAsyncThunk(
    "orderDetail/getAllOrderDetailsByOrder",
    async (idOrder) => {
        const res = await axios.get("http://localhost:8080/customer/orderDetail/" + idOrder, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)