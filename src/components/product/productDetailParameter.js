import React, {useState} from 'react';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import {createProductsToCartByAccount, getCartByAccount, updateCartByStore} from "../../service/cartService";
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductDetail} from "../../service/productDetailActions";
import {useParams} from "react-router-dom";
import axios from "axios";

const ProductDetailParameter = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.productDetail.product);
    const loading = useSelector(state => state.productDetail.loading);
    const error = useSelector(state => state.productDetail.error);
    useEffect(() => {
        dispatch(getCartByAccount())
    }, [])

    const carts = useSelector(state => {
        return state.cart.allProductsFromCart
    })

    const [quantity, setQuantity] = useState(1);
    const [quantityByCart, setQuantityByCart] = useState(0);

    useEffect(() => {
        if (product) {
            let totalQuantity = 0;
            for (let i = 0; i < carts.length; i++) {
                if (carts[i].product.id === product.id) {
                    totalQuantity += carts[i].quantity;
                }
            }
            setQuantityByCart(totalQuantity);
        }
    }, [carts]);


    const handleChangeQuantity = (num) => {
        if (num === 1 && quantity > 1) {
            setQuantity(quantity - 1)
        } else if (num === 2) {
            let number = quantity;
            for (let i = 0; i < carts.length; i++) {
                if (carts[i].product.id == product.id) {
                    number += carts[i].quantity;
                }
            }
            if (number < product.quantity) {
                setQuantity(quantity + 1)
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Oops...',
                    text: 'Quantity is not enough!',
                })
            }
        }
    }
    const handleAddToCart = async (productId) => {
        if (quantityByCart + quantity <= product.quantity) {
            let product = [productId, quantity];
            try {
                await dispatch(createProductsToCartByAccount(product));
                Swal.fire(
                    'Success!',
                    'Add to cart successfully!',
                    'success'
                );
                await setQuantityByCart(quantityByCart + quantity);
            } catch (err) {
                console.log(err);
            }
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Quantity is not enough!',
            })
        }

    };

    useEffect(() => {
        dispatch(fetchProductDetail(productId));
    }, [dispatch, productId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <>
            {console.log(1)}
            <div className="col-md-6">
                <div className="ps-lg-10 mt-6 mt-md-0">
                    {/* content */}
                    {/*<a href="#!" className="mb-4 d-block">*/}
                    {/*    {product.category.name}*/}
                    {/*</a>*/}
                    {/* heading */}
                    <h1 className="mb-1">{product.name} </h1>
                    <div className="mb-4">
                        {/* rating */}
                        {/* rating */}{" "}
                        <small className="text-warning">
                            {" "}
                            <i className="bi bi-star-fill"/>
                            <i className="bi bi-star-fill"/>
                            <i className="bi bi-star-fill"/>
                            <i className="bi bi-star-fill"/>
                            <i className="bi bi-star-half"/>
                        </small>
                        <a href="#" className="ms-2">
                            (30 reviews)
                        </a>
                    </div>
                    <div className="fs-4">
                        {/* price */}
                        <span className="fw-bold text-dark">$ {product.price}</span>{" "}
                        {/*<span className="text-decoration-line-through text-muted">$35</span>*/}
                        <span>
        {/*<small className="fs-6 ms-2 text-danger">26% Off</small>*/}
      </span>
                    </div>
                    {/* hr */}
                    <hr className="my-6"/>
                    <div className="mb-5">
                        {/*<button type="button" className="btn btn-outline-secondary">*/}
                        {/*    250g*/}
                        {/*</button>*/}
                        {/*/!* btn *!/*/}
                        {/*<button type="button" className="btn btn-outline-secondary">*/}
                        {/*    500g*/}
                        {/*</button>*/}
                        {/*/!* btn *!/*/}
                        <button type="button" className="btn btn-outline-secondary">
                            {product.unit}
                        </button>
                    </div>
                    <div>
                        {/* input */}
                        <div className="input-group input-spinner  ">
                            <input
                                type="button"
                                defaultValue="-"
                                className="button-minus  btn  btn-sm "
                                data-field="quantity"
                                onClick={() => handleChangeQuantity(1)}
                            />
                            <input
                                type="number"
                                step={1}
                                max={10}
                                value={quantity}
                                name="quantity"
                                className="quantity-field form-control-sm form-input   "
                            />
                            <input
                                type="button"
                                defaultValue="+"
                                className="button-plus btn btn-sm "
                                data-field="quantity"
                                onClick={() => handleChangeQuantity(2)}
                            />
                        </div>
                    </div>
                    <div className="mt-3 row justify-content-start g-2 align-items-center">
                        <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                            {/* button */}
                            {/* btn */}
                            <button type="button" className="btn btn-primary"
                                    onClick={() => handleAddToCart(productId)}
                            >
                                <i className="feather-icon icon-shopping-bag me-2"/>
                                Add to cart
                            </button>
                        </div>
                        <div className="col-md-4 col-4">
                            {/* btn */}
                            <a
                                className="btn btn-light "
                                href="#"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                aria-label="Compare"
                            >
                                <i className="bi bi-arrow-left-right"/>
                            </a>
                            <a
                                className="btn btn-light "
                                href="shop-wishlist.html"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                aria-label="Wishlist"
                            >
                                <i className="feather-icon icon-heart"/>
                            </a>
                        </div>
                    </div>
                    {/* hr */}
                    <hr className="my-6"/>
                    <div>
                        {/* table */}
                        <table className="table table-borderless mb-0">
                            <tbody>
                            <tr>
                                <td>Product Code:</td>
                                <td>{product.id}</td>
                            </tr>
                            <tr>
                                <td>
                                    {product.quantity > 0 ? "In Stock" : "Sold Out"}
                                </td>
                                <td>{product.quantity}</td>
                            </tr>
                            <tr>
                                <td>Category:</td>
                                <td>{product.category.name}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8">
                        {/* dropdown */}
                        <div className="dropdown">
                            <a
                                className="btn btn-outline-secondary dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Share
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-facebook me-2"/>
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-twitter me-2"/>
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-instagram me-2"/>
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductDetailParameter;