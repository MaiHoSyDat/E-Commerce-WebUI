import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllNotificationsByReceiverCustomer = createAsyncThunk(
    "notification/getAllNotificationsByReceiverCustomer",
    async (idCustomer) => {
        const res = await axios.get("http://localhost:8080/notification/customer/" + idCustomer);
        return res.data;
    }
)