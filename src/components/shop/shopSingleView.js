import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopByAccountLogin, getShopDTO} from "../../service/shopService";
import {useParams} from "react-router-dom";

const ShopSingleView = () => {
    const dispatch = useDispatch();
    const {idShop} = useParams();
    const shopDTO = useSelector(state => {
        console.log(state)
        return state.shop.shopDTO;
    })
    useEffect(() => {
        dispatch(getShopDTO(idShop));
    }, []);

    return (
        <>
            {shopDTO !== undefined && <div className="py-4">
                {/* img */}
                <img
                    src={shopDTO.shop.logo}
                    alt=""
                    className="img-fluid"
                />
            </div>}

        </>
    );
};

export default ShopSingleView;