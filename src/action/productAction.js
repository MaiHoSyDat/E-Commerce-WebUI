import { setProducts } from "../features/product/productSlice";

export const fetchProducts = () => async (dispatch) => {
    try {
        // Gọi API để lấy danh sách sản phẩm
        const response = await fetch("http://localhost:8080/products"); // Thay thế URL_API_PRODUCTS bằng URL thực tế của API sản phẩm
        const data = await response.json();

        // Dispatch action để lưu danh sách sản phẩm vào store
        dispatch(setProducts(data));
    } catch (error) {
        console.error("error", error);
    }
};