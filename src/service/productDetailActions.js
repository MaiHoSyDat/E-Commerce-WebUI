import {
    fetchProductDetailRequest,
    fetchProductDetailSuccess,
    fetchProductDetailFailure,
} from "../redux/reducer/productDetailSlice";

export const fetchProductDetail = (productId) => async (dispatch) => {
        try {
            dispatch(fetchProductDetailRequest());
            const response = await fetch(`http://localhost:8080/products/${productId}`);
            if (!response.ok) {
                throw new Error("Request failed");
            }
            const product = await response.json();
            dispatch(fetchProductDetailSuccess(product));
        } catch (error) {
            dispatch(fetchProductDetailFailure(error.message));
        }
};