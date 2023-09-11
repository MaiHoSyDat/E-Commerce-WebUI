import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopDTOByAccountLogin} from "../../service/shopService";
import {setFilterShopSingle} from "../../service/inputService";

const ShopSingleDetailLogin = () => {
    const numbers = [1, 2, 3, 4, 5]
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const shopDTOLogin = useSelector(state => {
        return state.shop.shopDTOLogin;
    })
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getShopDTOByAccountLogin(account.id));
            // await dispatch(setFilterShopSingle(shopDTOLogin.shop.id));
        };
        fetchData();
    }, []);
    return (
        <>
            {shopDTOLogin !== undefined && <div className="d-flex flex-column">
            <div>
                {/* img */}
                {/* img */}
                <img
                    src={shopDTOLogin.shop.logo}
                    alt=""
                    className="rounded-circle icon-shape icon-xxl"
                />
            </div>
            {/* heading */}
            <div className="mt-4">
                <h1 className="mb-1 h4">{shopDTOLogin.shop.name}</h1>
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
                    {" "}
                    <small className="text-warning">
                        {!shopDTOLogin.average_rating && <>
                            <i className="bi bi-star"/>
                            <i className="bi bi-star"/>
                            <i className="bi bi-star"/>
                            <i className="bi bi-star"/>
                            <i className="bi bi-star"/>
                        </>}
                        {shopDTOLogin.average_rating && numbers.map((i) => (
                            i <= Math.floor(shopDTOLogin.average_rating) ? (<i className="bi bi-star-fill"/>) : (
                                <i className="bi bi-star"/>)
                        ))}
                    </small>
                    {" "}
                    <span className="ms-2">{shopDTOLogin.average_rating}</span>
                    {/* text */}
                    <span className="text-muted ms-1">({shopDTOLogin.total_reviews} reviews)</span>
                </div>
            </div>
        </div>}


        </>
    );
};

export default ShopSingleDetailLogin;