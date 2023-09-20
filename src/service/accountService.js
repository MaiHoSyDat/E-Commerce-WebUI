import {createAsyncThunk} from "@reduxjs/toolkit";

export const saveAccountLogin = createAsyncThunk(
    "account",
    async (account) => {
        return account;
    }
)