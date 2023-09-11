import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopByAccountLogin} from "../../service/shopService";
import {getAllProductsByShop, getProduct} from "../../service/productService";
import axios from "axios";
import async from "async";

const ShopSingleFilterViewLogin = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })

    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id));
    }, []);

    useEffect(() => {
        dispatch(getAllProductsByShop(shopLogin.id));
    }, [shopLogin])

    return (
        <>
            {/* row */}
            <div className="row mt-8">
                <div className="col">
                    {/* nav */}
                    <nav>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link mx-1 " href="#" aria-label="Previous">
                                    <i className="feather-icon icon-chevron-left"/>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 active" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#">
                                    ...
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#">
                                    12
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#" aria-label="Next">
                                    <i className="feather-icon icon-chevron-right"/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


        </>
    );
};

export default ShopSingleFilterViewLogin;