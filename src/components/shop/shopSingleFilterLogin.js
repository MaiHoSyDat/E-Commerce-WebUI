import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopByAccountLogin} from "../../service/shopService";
import {getAllProductsByShop} from "../../service/productService";

const ShopSingleFilterLogin = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })
    const shopProducts = useSelector(state => {
        return state.product.shopProducts;
    })
    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id))
        dispatch(getAllProductsByShop(shopLogin.id))
    },[]);
    return (
        <>
            <div className="d-md-flex justify-content-between mb-3 align-items-center">
                <div>
                    <p className="mb-3 mb-md-0">{shopProducts.length} Products found</p>
                </div>
                <div className="d-flex justify-content-md-between align-items-center">
                    <div className="me-2">
                        {/* select option */}
                        <select className="form-select">
                            <option selected="">Show: 50</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                        </select>
                    </div>
                    <div>
                        {/* select option */}
                        <select className="form-select">
                            <option selected="">Sort by: Featured</option>
                            <option value="Low to High">Price: Low to High</option>
                            <option value="High to Low">Price: High to Low</option>
                            <option value="Release Date">Release Date</option>
                            <option value="Avg. Rating">Avg. Rating</option>
                        </select>
                    </div>
                    &ensp;
                    <div>
                        <button type="button" className="btn btn-success">Create New Product</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShopSingleFilterLogin;