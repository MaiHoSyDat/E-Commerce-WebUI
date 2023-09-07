import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllShops} from "../../service/shopService";
import {setFilterCheckedShops, setFilterPrice, setFilterUnCheckedShops} from "../../service/inputService";

const ProductFilterPrice = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="mb-8">
                {/* price */}
                <h5 className="mb-3">Price</h5>
                <div className="form-check mb-2">
                    {/* input */}
                    <input
                        className="form-check-input"
                        type="radio"
                        value=""
                        id="all"
                        defaultChecked=""
                        name="radioPrice"
                        onClick={() => {
                            let price = document.getElementById("all").value;
                            dispatch(setFilterPrice(price))
                        }}
                    />
                    <label className="form-check-label" htmlFor="eGrocery">
                        All
                    </label>
                </div>
                <div className="form-check mb-2">
                    {/* input */}
                    <input
                        className="form-check-input"
                        type="radio"
                        value="0,100"
                        id="100"
                        defaultChecked=""
                        name="radioPrice"
                        onClick={() => {
                            let price = document.getElementById("100").value;
                            dispatch(setFilterPrice(price))
                        }}
                    />
                    <label className="form-check-label" htmlFor="eGrocery">
                        0 - 100 ($)
                    </label>
                </div>
                <div className="form-check mb-2">
                    {/* input */}
                    <input
                        className="form-check-input"
                        type="radio"
                        value="100,200"
                        id="200"
                        name="radioPrice"
                        onClick={() => {
                            let price = document.getElementById("200").value;
                            dispatch(setFilterPrice(price))
                        }}
                    />
                    <label className="form-check-label" htmlFor="DealShare">
                        100 - 200 ($)
                    </label>
                </div>
                <div className="form-check mb-2">
                    {/* input */}
                    <input
                        className="form-check-input"
                        type="radio"
                        value="200,300"
                        id="300"
                        name="radioPrice"
                        onClick={() => {
                            let price = document.getElementById("300").value;
                            dispatch(setFilterPrice(price))
                        }}
                    />
                    <label className="form-check-label" htmlFor="Dmart">
                        200 - 300 ($)
                    </label>
                </div>
                <div className="form-check mb-2">
                    {/* input */}
                    <input
                        className="form-check-input"
                        type="radio"
                        value="300,400"
                        id="400"
                        name="radioPrice"
                        onClick={() => {
                            let price = document.getElementById("400").value;
                            dispatch(setFilterPrice(price))
                        }}
                    />
                    <label className="form-check-label" htmlFor="Blinkit">
                        300 - 400 ($)
                    </label>
                </div>
                <div className="form-check mb-2">
                    {/* input */}
                    <input
                        className="form-check-input"
                        type="radio"
                        value="400,500"
                        id="500"
                        name="radioPrice"
                        onClick={() => {
                            let price = document.getElementById("500").value;
                            dispatch(setFilterPrice(price))
                        }}
                    />
                    <label className="form-check-label" htmlFor="Blinkit">
                        400 - 500 ($)
                    </label>
                </div>
            </div>

        </>
    );
};

export default ProductFilterPrice;