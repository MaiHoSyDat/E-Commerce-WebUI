import React, {useEffect, useState} from 'react';
import ShopSingleDetailLogin from "../../components/shop/shopSingleDetailLogin";
import ShopSingleMenu from "../../components/shop/shopSingleMenu";
import ShopSingleFilterViewLogin from "../../components/shop/shopSingleFilterViewLogin";
import ShopSingleFilterLogin from "../../components/shop/shopSingleFilterLogin";
import ShopSingleSearchLogin from "../../components/shop/shopSingleSearchLogin";
import ShopSingleViewLogin from "../../components/shop/shopSingleViewLogin";
import {getShopByAccountLogin, getShopDTOByAccountLogin} from "../../service/shopService";
import {setFilterShopSingle} from "../../service/inputService";
import {useDispatch, useSelector} from "react-redux";

const ShopSingleLogin = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const [product , setProduct] = useState({})
    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })
    // useEffect(() => {
    //     dispatch(getShopByAccountLogin(account.id));
    // })
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getShopByAccountLogin(account.id));
            await dispatch(setFilterShopSingle(shopLogin.id));
        };
        fetchData();
        // dispatch(setFilterShopSingle(shopLogin.id));
    },[shopLogin.id]);
    const handleEditProduct = (product) => {
        setProduct(product)
    };
    return (
        <>
            {shopLogin && <section className="mb-lg-14 mb-8 mt-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 col-md-4 mb-4 mb-md-0">
                            <ShopSingleDetailLogin></ShopSingleDetailLogin>
                            <ShopSingleMenu></ShopSingleMenu>
                        </div>
                        <div className="col-12 col-lg-9 col-md-8">
                            <div className="mb-8 bg-light d-lg-flex justify-content-lg-between rounded">
                                <ShopSingleSearchLogin></ShopSingleSearchLogin>
                                <ShopSingleViewLogin></ShopSingleViewLogin>
                            </div>
                            <ShopSingleFilterLogin product={product} />
                            <ShopSingleFilterViewLogin onEditProduct={handleEditProduct} />
                        </div>

                    </div>
                </div>
            </section>}
        </>
    );
};

export default ShopSingleLogin;