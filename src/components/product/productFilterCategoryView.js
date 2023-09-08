import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../service/categoryService";

const ProductFilterCategoryView = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => {
        return state.inputFilter.filterParam.category;
    })
    return (
        <>
            <div className="card mb-4 bg-light border-0">
                {/* card body */}
                <div className=" card-body p-9">
                    <h2 className="mb-0 fs-1">{category}</h2>
                </div>
            </div>

        </>
    );
};

export default ProductFilterCategoryView;