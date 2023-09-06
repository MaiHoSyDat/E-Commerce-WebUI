import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopByAccountLogin} from "../../service/shopService";
import {getAllProductsByShop} from "../../service/productService";
import axios from "axios";
import async from "async";

const ShopSingleFilterViewLogin = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const shopLogin = useSelector(state => {
        console.log(state)
        return state.shop.shopLogin;
    })
    const shopProducts = useSelector(state => {
        console.log(state.product.shopProducts)
        return state.product.shopProducts;
    })
    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id));
    },[]);
    useEffect(() => {
        dispatch(getAllProductsByShop(shopLogin.id));
    },[shopLogin])


    return (
        <>
            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                {
                    shopProducts && shopProducts.map(product => (
                        <div className="col">
                            {/* card */}
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        {/* badge */}
                                        <a href="#!">
                                            {/* img */}
                                            <img
                                                src={product.thumbnail}
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </a>
                                        {/* btn action */}
                                        <div className="card-product-action">
                                            <a
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </a>
                                            <a
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart" />
                                            </a>
                                            <a
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <a href="#!" className="text-decoration-none text-muted">
                                            <small>{product.category.name}</small>
                                        </a>
                                    </div>
                                    <h2 className="fs-6">
                                        <a href="#!" className="text-inherit text-decoration-none">
                                            {product.name} - {product.unit}g
                                        </a>
                                    </h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-fill" />
                                            <i className="bi bi-star-half" />
                                            <i className="bi bi-star" />
                                        </small>
                                        {/* text */}
                                        <span className="text-muted small">3.5 (89)</span>
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <div>
                                            <span className="text-dark">${product.price}</span>
                                        </div>
                                        <div>
                                            <button className="btn" data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil" style={{color:"blue"}}></i></button>
                                            <button className="btn" data-toggle="modal" data-target="#myModal"><i className="fa fa-trash" style={{color:"red"}}></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-10.jpg"
                                        alt="Grocery Ecommerce Template"
                                        className="mb-3 img-fluid"
                                    />
                                </a>
                                {/* btn action */}
                                <div className="card-product-action">
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quickViewModal"
                                    >
                                        <i
                                            className="bi bi-eye"
                                            data-bs-toggle="tooltip"
                                            data-bs-html="true"
                                            title="Quick View"
                                        />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Wishlist"
                                    >
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Dairy, Bread &amp; Eggs</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    Amul Butter - 500 g
                                </a>
                            </h2>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                    <i className="bi bi-star" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">3.5 (89)</span>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <div>
                                    <span className="text-dark">$13</span>

                                </div>
                                <div>

                                    <button
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#sproductModal"
                                        className="btn"
                                    >
                                        <i className="fa fa-pencil" style={{color:"blue"}}></i>
                                    </button>
                                    <button className="btn" data-toggle="modal" data-target="#myModal"><i className="fa fa-trash" style={{color:"red"}}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* row */}
            <div className="row mt-8">
                <div className="col">
                    {/* nav */}
                    <nav>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link mx-1 " href="#" aria-label="Previous">
                                    <i className="feather-icon icon-chevron-left" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 active" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#">
                                    ...
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#">
                                    12
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#" aria-label="Next">
                                    <i className="feather-icon icon-chevron-right" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>



        </>
    );
};

export default ShopSingleFilterViewLogin;