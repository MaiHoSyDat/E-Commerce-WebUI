import React, {useEffect} from 'react';
import {setFilterQuantityShow, setFilterSortShow} from "../../service/inputService";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getShopDTO} from "../../service/shopService";
import {getFilterProducts} from "../../service/productService";

const ShopSingleFilter = () => {
    const dispatch = useDispatch();
    const {idShop} = useParams();
    const filterProducts = useSelector(state => {
        return state.product.filterProducts;
    })
    const filterParam = useSelector(state => {
        return state.inputFilter.filterParam;
    })
    useEffect(() => {
        dispatch(getFilterProducts(filterParam));
    }, [filterParam]);
    const handleInputChangeQuantityShow = () => {
        let num = document.getElementById("quantity").value;
        dispatch((setFilterQuantityShow(num)))
    }
    const handleInputChangeSortShow = () => {
        let sort = document.getElementById("sort").value;
        dispatch((setFilterSortShow(sort)))
    }
    return (
        <>
            <div className="d-md-flex justify-content-between mb-3 align-items-center">
                <div>
                    <p className="mb-3 mb-md-0">{filterProducts.length} Products found</p>
                </div>
                <div className="d-flex justify-content-md-between align-items-center">
                    <div className="me-2">
                        {/* select option */}
                        <select className="form-select" id="quantity" onClick={handleInputChangeQuantityShow}>
                            <option  value={10000000} selected="" >Show: All</option>
                            <option value={10} >10</option>
                            <option value={20} >20</option>
                            <option value={30} >30</option>
                        </select>
                    </div>
                    <div>
                        {/* select option */}
                        <select className="form-select" id="sort" onClick={handleInputChangeSortShow}>
                            <option selected=""  value="">Sort by: Normal</option>
                            <option value="Low to High" >Price: Low to High</option>
                            <option value="High to Low" > Price: High to Low</option>
                            <option value="Release Date" > Release Date</option>
                            <option value="Avg. Rating" > Avg. Rating</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShopSingleFilter;