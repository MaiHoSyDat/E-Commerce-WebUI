import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk(
    "category/getAllCategories",
    async () => {
        const res = await axios.get("http://localhost:8080/categories",{
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
export const getTenCategoriesPage = createAsyncThunk(
    "category/getTenCategoriesPage",
    async (offset) => {
        const res = await axios.get("http://localhost:8080/categories/" + offset, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)