import setProducts from "../redux/reducer/productPageSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getProductPage = createAsyncThunk(
    'product/pageAll',
    async (page) => {
        const res = await axios.get(`http://localhost:8080/products/page?page=${page-1}`);
        console.log(res)
        return res.data.content;
    }
);
