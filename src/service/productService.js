import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

//lấy tất cả sp
export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async () => {
        const res = await axios.get("");
        return res.data;
    }
)
export const getAllProductsByCustomerBuy = createAsyncThunk(
    "product/getAllProductsByCustomerBuy",
    async (idCustomer) => {
        const res = await axios.get("http://localhost:8080/customer/productBuy/" +idCustomer);
        return res.data;
    }
)
// lấy ra 1 sp chi tiết
export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (idProduct) => {
        const res = await axios.get("http://localhost:8080/products/detail/" + idProduct);
        return res.data;
    }
)
// lấy ra tất cả sp theo bộ lọc (shop = ?, category = ?, ...)
export const getFilterProducts = createAsyncThunk(
    "product/getFilterProducts",
    async (filterParam) => {
        const res = await axios.post("http://localhost:8080/products/filter" , filterParam);
        return res.data;
    }
)
// lấy ra tất cả sp theo shop
export const getAllProductsByShop = createAsyncThunk(
    "product/getAllProductsByShop",
    async (idShop) => {
        const res = await axios.get("http://localhost:8080/shops/" + idShop + "/products" );
        return res.data;
    }
)
// lấy ra 10 sp theo index
export const getTenProductsToIndex = createAsyncThunk(
    "product/getTenProductsToIndex",
    async (idShop) => {
        const res = await axios.get("http://localhost:8080/index/tenNewProducts" );
        return res.data;
    }
)
// lấy ra 3 sp theo maxRating
export const getThreeProductsMaxRating = createAsyncThunk(
    "product/getThreeProductsMaxRating",
    async (idShop) => {
        const res = await axios.get("http://localhost:8080/index/threeProductsMaxRating" );
        return res.data;
    }
)
export const createProduct = createAsyncThunk(
    "product/createProduct",
    async (newProduct) => {
        const res = await axios.post("", newProduct);
        return res.data;
    }
)
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({idProduct, updateProduct}) => {
        const res = await axios.post("" + idProduct, updateProduct);
        return res.data;
    }
)
export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async (idProduct) => {
        const res = await axios.get("" + idProduct);
        return res.data;
    }
)
export const getFiveMostPurchasedProducts = createAsyncThunk(
    "product/getFiveMostPurchasedProducts",
    async () => {
        const res = await axios.get("http://localhost:8080/products/fiveMostPurchased");
        return res.data;
    }
)
