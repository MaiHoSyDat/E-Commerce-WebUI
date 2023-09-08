import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllReviewsByProduct = createAsyncThunk(
    "review/getAllReviews",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)