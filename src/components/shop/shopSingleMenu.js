import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories, getTenCategoriesPage} from "../../service/categoryService";
import {setFilterCategory} from "../../service/inputService";
import {Link, useParams} from "react-router-dom";
import * as navLinks from "react-bootstrap/ElementChildren";

const ShopSingleMenu = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const allCategories = useSelector(state => {
        return state.category.allCategories;
    })
    const tenCategoriesPage = useSelector(state => {
        return state.category.tenCategoriesPage;
    })
    const idShopView = useSelector(state => {
        return state.shop.idShop;
    })
    const {idShop} = useParams();
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
                {idShop && <li className="nav-item">
                    <Link to={"/shop/single/" + idShop} >
                        <a className="nav-link active" aria-current="page" href="#">
                            <i className="feather-icon icon-shopping-bag me-2" />
                            Shop
                        </a>
                    </Link>
                </li>}
                {!idShop && <li className="nav-item">
                    <Link to={"/shop/single"} >
                        <a className="nav-link active" aria-current="page" href="">
                            <i className="feather-icon icon-shopping-bag me-2" />
                            Shop
                        </a>
                    </Link>
                </li>}
                {idShop && <li className="nav-item">
                    <Link to={"/shop/single/" + idShop + "/detail"} >
                        <a className="nav-link" href="#" >
                            <i className="feather-icon icon-book me-2" />
                            Details
                        </a>
                    </Link>
                </li>}
                {!idShop && <li className="nav-item">
                    <Link to={"/shop/single/detail"} >
                        <a className="nav-link" href="" >
                            <i className="feather-icon icon-book me-2" />
                            Details
                        </a>
                    </Link>
                </li>}
                {/* nav item */}
                {account != null && account.role.name == "ROLE_CUSTOMER" && <li className="nav-item">
                    <Link to={"/shop/single/" + idShop + "/chat"} >
                    <a className="nav-link" >
                        <i className="feather-icon icon-message-circle me-2" />
                        Message
                    </a>
                    </Link>
                    {/* message content */}
                </li>}
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