import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories, getTenCategoriesPage} from "../../service/categoryService";
import {setFilterCategory} from "../../service/inputService";

const ShopSingleMenu = () => {
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
            <hr />
            {/* nav */}
            <ul className="nav flex-column nav-pills nav-pills-dark">
                {/* nav item */}
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        <i className="feather-icon icon-shopping-bag me-2" />
                        Shop
                    </a>
                </li>
                {/* nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="feather-icon icon-gift me-2" />
                        Deals
                    </a>
                </li>
                {/* nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="feather-icon icon-map-pin me-2" />
                        Buy It Again
                    </a>
                </li>
                {/* nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="feather-icon icon-star me-2" />
                        Reviews
                    </a>
                </li>
                {/* nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="feather-icon icon-book me-2" />
                        Recipes
                    </a>
                </li>
                {/* nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="feather-icon icon-phone-call me-2" />
                        Contact
                    </a>
                </li>
                {/* nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="feather-icon icon-clipboard me-2" />
                        Policy
                    </a>
                </li>
            </ul>
            <hr />
            <div>
                <ul className="nav flex-column nav-links">
                    {/* nav item */}
                    <li className="nav-item">
                        <button className="nav-link" onClick={()=>{dispatch(setFilterCategory("All Categories"))}}>
                            All Categories
                        </button>
                    </li>
                    {tenCategoriesPage && tenCategoriesPage.map(category => (
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>{dispatch(setFilterCategory(category.name))}}>
                                {category.name}
                            </button>
                        </li>
                    ))}
                    <li className="nav-item" style={{ display: "flex" }}>
                        <button type="button" className="page-link"  style={{ background: "#33FFCC", borderRadius: 5, color: "black" }} onClick={previousPage}>
                            Previous
                        </button>
                        &nbsp;
                        <a className="page-link">&lt;---&gt;</a>
                        &nbsp;
                        <button type="button" className="page-link"  style={{ background: "#33FFCC", borderRadius: 5, color: "black" }} onClick={nextPage}>
                            Next
                        </button>
                    </li>
                </ul>
            </div>
        </>

    );
};

export default ShopSingleMenu;