import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getShopDTO, getShopDTOByAccountLogin} from "../../service/shopService";

const ShopSingleDetail = () => {
    const numbers = [1, 2, 3, 4, 5]
    const dispatch = useDispatch();
    const {idShop} = useParams();
    const shopDTO = useSelector(state => {
        console.log(state.shop.shopDTO)
        return state.shop.shopDTO;
    })
    useEffect(() => {
        console.log(idShop)
        dispatch(getShopDTO(idShop));
    }, []);
    return (
        <>
            {shopDTO !== undefined && <div className="d-flex flex-column">
                <div>
                    {/* img */}
                    {/* img */}
                    <img
                        src={shopDTO.shop.logo}
                        alt=""
                        className="rounded-circle icon-shape icon-xxl"
                    />
                </div>
                {/* heading */}
                <div className="mt-4">
                    <h1 className="mb-1 h4">{shopDTO.shop.name}</h1>
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
                            {!shopDTO.average_rating && <>
                                <i className="bi bi-star"/>
                                <i className="bi bi-star"/>
                                <i className="bi bi-star"/>
                                <i className="bi bi-star"/>
                                <i className="bi bi-star"/>
                            </>}
                            {shopDTO.average_rating && numbers.map((i) => (
                                i <= Math.floor(shopDTO.average_rating) ? (<i className="bi bi-star-fill"/>) : (
                                    <i className="bi bi-star"/>)
                            ))}
                        </small>
                        <span className="ms-2">{shopDTO.average_rating}</span>
                        {/* text */}
                        <span className="text-muted ms-1">({shopDTO.total_reviews} reviews)</span>
                    </div>
                </div>
            </div>}

        </>
    );
};

export default ShopSingleDetail;