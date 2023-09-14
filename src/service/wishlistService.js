import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getWishlistByCustomerId = createAsyncThunk(
    "wishlist/getAllProducts",
    async (idCustomer) => {
        const res = await axios.get("http://localhost:8080/wishlist/" + idCustomer);
        return res.data;
    }
)
export const updateWishlist = createAsyncThunk(
    "wishlist/updateWishlist",
    async (wishlist) => {
        const res = await axios.post("http://localhost:8080/wishlist/" + wishlist.id, wishlist);
        return res.data;
    }
)

