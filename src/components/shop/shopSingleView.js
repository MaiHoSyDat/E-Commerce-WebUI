import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopByAccountLogin} from "../../service/shopService";

const ShopSingleView = () => {

    return (
        <>
            <div className="py-4">
                {/* img */}
                <img
                    src="logo"
                    alt=""
                    className="img-fluid"
                />
            </div>

        </>
    );
};

export default ShopSingleView;