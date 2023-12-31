import React, {useEffect} from 'react';

import ShopSingleMenu from "../../components/shop/shopSingleMenu";
import ShopSingleSearch from "../../components/shop/shopSingleSearch";
import ShopSingleView from "../../components/shop/shopSingleView";
import ShopSingleFilterView from "../../components/shop/shopSingleFilterView";
import ShopSingleFilter from "../../components/shop/shopSingleFilter";
import ShopSingleDetail from "../../components/shop/shopSingleDetail";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getShopDTO} from "../../service/shopService";
import {setFilterIdStatus, setFilterShopSingle} from "../../service/inputService";

const ShopSingle = () => {
    const {idShop} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getShopDTO(idShop));
            await dispatch(setFilterShopSingle(idShop));
            await dispatch(setFilterIdStatus(2));
        };
        fetchData();
        // dispatch(setFilterShopSingle(shopLogin.id));
    },[]);
    return (
        <>
            <section className="mb-lg-14 mb-8 mt-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 col-md-4 mb-4 mb-md-0">
                            <ShopSingleDetail></ShopSingleDetail>
                            <ShopSingleMenu></ShopSingleMenu>
                        </div>
                        <div className="col-12 col-lg-9 col-md-8">
                            <div className="mb-8 bg-light d-lg-flex justify-content-lg-between rounded">
                                <ShopSingleSearch></ShopSingleSearch>
                                <ShopSingleView></ShopSingleView>
                            </div>
                            <ShopSingleFilter></ShopSingleFilter>
                            <ShopSingleFilterView></ShopSingleFilterView>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopSingle;