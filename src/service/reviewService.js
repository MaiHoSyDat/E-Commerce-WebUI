import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllReviewsByProduct = createAsyncThunk(
    "review/getAllReviews",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const addReview = createAsyncThunk(
    "review/addReview",
    async (review) => {
        const res = await axios.post("http://localhost:8080/review", review);
        return res.data;
    }
)