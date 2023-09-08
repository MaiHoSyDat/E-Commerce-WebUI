import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../service/categoryService";
import {setFilterCategory} from "../../service/inputService";

const ProductFilterCategory = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector(state => {
        return state.category.allCategories;
    })
    useEffect(() => {
        dispatch(getAllCategories())
    },[]);
    return (
        <>
            <div className="mb-8">
                {/* title */}
                <h5 className="mb-3">Categories</h5>
                {/* nav */}
                <ul className="nav nav-category" id="categoryCollapseMenu">
                    <li className="nav-item border-bottom w-100 ">
                        <button
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#categoryFlushOne"
                            aria-expanded="false"
                            aria-controls="categoryFlushOne"
                            onClick={()=>{dispatch(setFilterCategory("All Categories"))}}
                        >
                            All Categories
                        </button>
                    </li>
                    {allCategories && allCategories.map(category => (
                        <li className="nav-item border-bottom w-100 ">
                            <button
                                href="#"
                                className="nav-link collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#categoryFlushOne"
                                aria-expanded="false"
                                aria-controls="categoryFlushOne"
                                onClick={()=>{dispatch(setFilterCategory(category.name))}}
                            >
                                {category.name}{" "}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};

export default ProductFilterCategory;