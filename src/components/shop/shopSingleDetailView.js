import React, {useEffect} from 'react';
import ShopSingleDetail from "./shopSingleDetail";
import ShopSingleMenu from "./shopSingleMenu";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getShopDTO, saveIdShop} from "../../service/shopService";
import {setFilterIdStatus, setFilterShopSingle} from "../../service/inputService";

const ShopSingleDetailView = () => {
    const {idShop} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(saveIdShop(idShop));
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


                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopSingleDetailView;