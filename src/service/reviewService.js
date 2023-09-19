import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllReviewsByProduct = createAsyncThunk(
    "review/getAllReviewsByProduct",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const getAllReviewsByProductAndCustomer = createAsyncThunk(
    "review/getAllReviewsByProductAndCustomer",
    async ([idProduct, idCustomer]) => {
        const res = await axios.get("http://localhost:8080/review/" + idProduct + "/" + idCustomer, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
export const addReview = createAsyncThunk(
    "review/addReview",
    async (review) => {
        const res = await axios.post("http://localhost:8080/review", review, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)