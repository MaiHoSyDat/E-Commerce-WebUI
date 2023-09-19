import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllNotificationsByReceiverCustomer = createAsyncThunk(
    "notification/getAllNotificationsByReceiverCustomer",
    async (idCustomer) => {
        const res = await axios.get("http://localhost:8080/notification/customer/" + idCustomer, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
export const getAllNotificationsByReceiverShop = createAsyncThunk(
    "notification/getAllNotificationsByReceiverShop",
    async (idShop) => {
        const res = await axios.get("http://localhost:8080/notification/shop/" + idShop, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
export const addNotification = createAsyncThunk(
    "notification/getAllNotificationsByReceiverShop",
    async (notification) => {
        console.log(notification)
        const res = await axios.post("http://localhost:8080/notification" , notification, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)