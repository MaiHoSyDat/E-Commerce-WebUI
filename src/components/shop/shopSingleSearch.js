import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopByAccountLogin, getShopDTO} from "../../service/shopService";
import {setFilterNameProduct} from "../../service/inputService";
import {useParams} from "react-router-dom";

const ShopSingleSearch = () => {
    const dispatch = useDispatch();
    const {idShop} = useParams();
    const shopDTO = useSelector(state => {
        console.log(state)
        return state.shop.shopDTO;
    })
    useEffect(() => {
        dispatch(getShopDTO(idShop));
    }, []);
    const handleInputChangeNameProduct = (e) => {
        dispatch(setFilterNameProduct(e.target.value));
    };

    return (
        <>
            {shopDTO !== undefined && <div className="align-self-center p-8">
                <div className="mb-3">
                    <h5 className="mb-0 fw-bold">{shopDTO.shop.name}</h5>
                    <p className="mb-0 text-muted">
                        Whatever the occasion, we've got you covered.
                    </p>
                </div>
                <div className="position-relative">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder= {"Search " + shopDTO.shop.name}
                        onChange={handleInputChangeNameProduct}
                    />
                    <span className="position-absolute end-0 top-0 mt-2 me-3">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={14}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
      >
        <circle cx={11} cy={11} r={8} />
        <line x1={21} y1={21} x2="16.65" y2="16.65" />
      </svg>
    </span>
                </div>
            </div>}

        </>
    );
};

export default ShopSingleSearch;
