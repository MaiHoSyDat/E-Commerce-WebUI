import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopByAccountLogin} from "../../service/shopService";

const ShopSingleViewLogin = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })
    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id))
    },[]);
    return (
        <>
            <div className="py-4">
                {/* img */}
                <img
                    src={shopLogin.logo}
                    alt=""
                    className="img-fluid"
                />
            </div>

        </>
    );
};

export default ShopSingleViewLogin;