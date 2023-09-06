import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllEmployees = createAsyncThunk(
    "employee/getAllEmployees",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const getEmployee = createAsyncThunk(
    "employee/getEmployee",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)