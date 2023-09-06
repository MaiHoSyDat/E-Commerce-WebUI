import {setProducts} from "../features/product/productPageSlice";

export const fetchProducts = (page, size) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8080/products/page?page=${page-1}&size=${size}`);
            const data = await response.json();

            dispatch(setProducts(data));
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    };
};
