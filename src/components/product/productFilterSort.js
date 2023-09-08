import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllShops} from "../../service/shopService";
import {
    setFilterQuantityShow,
    setFilterSortShow,
} from "../../service/inputService";
import {getAllCategories} from "../../service/categoryService";
import {getFilterProducts} from "../../service/productService";

const ProductFilterSort = () => {
    const dispatch = useDispatch();
    const filterProducts = useSelector(state => {
        console.log(state.product.filterProducts)
        return state.product.filterProducts;
    })
    const filterParam = useSelector(state => {
        console.log(state.inputFilter.filterParam)
        return state.inputFilter.filterParam;
    })

    useEffect(() => {
        dispatch(getFilterProducts(filterParam))
    },[filterParam]);
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
            <div className="d-lg-flex justify-content-between align-items-center">
                <div className="mb-3 mb-lg-0">
                    <p className="mb-0">
                        <span className="text-dark">{filterProducts.length} </span> Products found{" "}
                    </p>
                </div>
                {/* icon */}
                <div className="d-md-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="ms-2 d-lg-none">
                            <a
                                className="btn btn-outline-gray-400 text-muted"
                                data-bs-toggle="offcanvas"
                                href="#offcanvasCategory"
                                role="button"
                                aria-controls="offcanvasCategory"
                            >
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
                                    className="feather feather-filter me-2"
                                >
                                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                                </svg>
                                Filters
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mt-2 mt-lg-0">
                        <div className="me-2 flex-grow-1">
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
            </div>

        </>
    );
};

export default ProductFilterSort;