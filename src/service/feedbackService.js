import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllFeedbackByProductId = createAsyncThunk(
    "feedback/getAllFeedbackByProductId",
    async (idProduct) => {
        const res = await axios.get("http://localhost:8080/feedback/" + idProduct, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
export const addFeedback = createAsyncThunk(
    "feedback/addFeedback",
    async (feedback) => {
        const res = await axios.post("http://localhost:8080/feedback", feedback, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)