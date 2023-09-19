import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllShops = createAsyncThunk(
    "shop/getAllShops",
    async () => {
        const res = await axios.get("http://localhost:8080/shops", {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
export const getFiveShopsPage = createAsyncThunk(
    "shop/getFiveShopsPage",
    async (offset) => {
        const res = await axios.get("http://localhost:8080/shops/page/" + offset, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
// tìm shop theo id
export const getShop = createAsyncThunk(
    "shop/getShop",
    async (idShop) => {
        const res = await axios.get("" + idShop);
        return res.data;
    }
)
// tìm shop theo account đăng nhập
export const getShopByAccountLogin = createAsyncThunk(
    "shop/getShopByAccountLogin",
    async (idAccount) => {
        const res = await axios.get("http://localhost:8080/shops/login/"+ idAccount, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
// tìm shop DTO
export const getShopDTO = createAsyncThunk(
    "shop/getShopDTO",
    async (idShop) => {
        const res = await axios.get("http://localhost:8080/shops/dto/"+ idShop, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
export const getShopDTOByAccountLogin = createAsyncThunk(
    "shop/getShopDTOLogin",
    async (idAccount) => {
        const res = await axios.get("http://localhost:8080/shops/login/dto/"+ idAccount, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
export const saveIdShop = createAsyncThunk(
    "shop/idShop",
    async (idShop) => {
        const res = await axios.get("http://localhost:8080/account/shop/"+ idShop, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)