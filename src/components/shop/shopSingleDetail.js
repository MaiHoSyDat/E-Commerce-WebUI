import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopByAccountLogin} from "../../service/shopService";

const ShopSingleDetail = () => {
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
            <div className="d-flex flex-column">
                <div>
                    {/* img */}
                    {/* img */}
                    <img
                        src={shopLogin.logo}
                        alt=""
                        className="rounded-circle icon-shape icon-xxl"
                    />
                </div>
                {/* heading */}
                <div className="mt-4">
                    <h1 className="mb-1 h4">{shopLogin.name}</h1>
                    <div className="small text-muted">
                        <span>Everyday store prices </span>
                    </div>
                    <div>
      <span>
        <small>
          <a href="#!">100% satisfaction guarantee</a>
        </small>
      </span>
                    </div>
                    {/* rating */}
                    <div className="mt-2">
                        {/* rating */}
                        <small className="text-warning">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                        </small>
                        <span className="ms-2">{shopLogin.rating}</span>
                        {/* text */}
                        <span className="text-muted ms-1">(3,400 reviews)</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShopSingleDetail;