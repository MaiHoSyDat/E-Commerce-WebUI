import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk(
    "category/getAllCategories",
    async () => {
        const res = await axios.get("http://localhost:8080/categories");
        return res.data;
    }
)