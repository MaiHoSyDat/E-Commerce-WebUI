import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories, getTenCategoriesPage} from "../../service/categoryService";
import {setFilterCategory, setFilterShopSingle} from "../../service/inputService";
import {getShopDTO} from "../../service/shopService";

const ProductFilterCategory = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector(state => {
        return state.category.allCategories;
    })
    const tenCategoriesPage = useSelector(state => {
        return state.category.tenCategoriesPage;
    })
    let [count, setCount] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllCategories());
            await dispatch(getTenCategoriesPage(count));
        };
        fetchData();
    },[count]);
    const previousPage = () => {
        if (count > 0) {
            setCount(count - 10);
        }
    }
    const nextPage = () => {
        if ((count + 10) < allCategories.length) {
            setCount(count + 10);
        }
    }
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
                    {tenCategoriesPage && tenCategoriesPage.map(category => (
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
                    <li className="page-item">
                        <button type="button" className="page-link"  style={{ background: "#33FFCC", borderRadius: 5, color: "black" }} onClick={previousPage}>
                            Previous
                        </button>
                    </li>
                    <li className="page-item"><a className="page-link">&lt;---&gt;</a></li>
                    <li className="page-item">
                        <button type="button" className="page-link"  style={{ background: "#33FFCC", borderRadius: 5, color: "black" }} onClick={nextPage}>
                            Next
                        </button>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default ProductFilterCategory;