import setProducts from "../redux/reducer/productPageSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchProducts = (page, size) => {
//     return async (dispatch) => {
//         try {
//             const response = await fetch(`http://localhost:8080/products/page?page=${page-1}&size=${size}`);
//             const data = await response.json();
//
//             dispatch(setProducts(data));
//         } catch (error) {
//             console.error("Error fetching products: ", error);
//         }
//     };
// };
export const getProductPage = createAsyncThunk(
    'product/pageAll',
    async (page) => {
        const res = await axios.get(`http://localhost:8080/products/page?page=` + page);
        console.log(res)
        return res.data.content;
    }
);
