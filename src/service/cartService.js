import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProductsFromCartByAccount = createAsyncThunk(
    "cart/getAllProducts",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const updateProductFromCartByAccount = createAsyncThunk(
    'cart/updateProduct',
    async (list) => {
        const res = await axios.post('http://localhost:8080/cart/updateCart', list, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
);
export const createProductsToCartByAccount = createAsyncThunk(
    "cart/createProduct",
    async (product) => {
        console.log(localStorage.getItem('token'))

        let productId = +product[0];
        let quantity = +product[1]
        const res = await axios.post('http://localhost:8080/cart/addToCart?productId=' + productId + '&quantity=' + quantity, "", {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        return res.data;
    }
)
export const deleteProductFromCartByAccount = createAsyncThunk(
    "cart/deleteProduct",
    async (id) => {
        const res = await axios.post('http://localhost:8080/cart/deleteProductByCart?cartDetailId=' + id, "", {
            headers: {
                'Authorization': localStorage.getItem('token')
            },
        });
        return res.data;
    }
)
export const getCartByAccount = createAsyncThunk(
    "cart",
    async () => {
        const res = await axios.get('http://localhost:8080/cart',  {
            headers: {
                'Authorization': localStorage.getItem('token')
            },
        })
        return res.data;
    }
)
export const updateCartByStore = createAsyncThunk(
    "cartByStore",
    async (newCart) => {
        return newCart;
    }
)

