import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../service/categoryService";
import {setFilterCategory} from "../../service/inputService";

const ShopSingleMenu = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector(state => {
        return state.category.allCategories;
    })
    useEffect(() => {
        dispatch(getAllCategories())
    },[]);
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
                    {allCategories && allCategories.map(category => (
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>{dispatch(setFilterCategory(category.name))}}>
                                {category.name}
                            </button>
                        </li>
                    ))}


                </ul>
            </div>
        </>

    );
};

export default ShopSingleMenu;