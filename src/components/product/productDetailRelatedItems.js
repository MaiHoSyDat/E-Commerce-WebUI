import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFiveMostPurchasedProducts} from "../../service/productService";
import {Link} from "react-router-dom";
import {getWishlistByCustomerId, updateWishlist} from "../../service/wishlistService";
import Swal from "sweetalert2";
import {getCustomerByAccountLogin} from "../../service/customerService";

const ProductDetailRelatedItems = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const numbers = [1, 2, 3, 4, 5]
    const dispatch = useDispatch();
    const fiveMostPurchasedProducts = useSelector(state => {
        return state.product.fiveMostPurchasedProducts;
    })
    const customerLogin = useSelector(state => {
        return state.customer.customerLogin;
    })
    const wishlistByCustomer = useSelector(state => {
        return state.wishlist.wishlistByCustomer;
    })
    useEffect(() => {
        if (account != null) {
            dispatch(getCustomerByAccountLogin(account.id));
        }
    },[]);
    useEffect(()=>{
        dispatch(getWishlistByCustomerId(customerLogin.id));
        dispatch(getFiveMostPurchasedProducts());
    },[customerLogin])
    const handleAddProductToWishlist = (idProduct) => {
        let checkId = wishlistByCustomer.products.some(product => product.id == idProduct);
        // let checkId = () => {
        //     if (wishlistByCustomer.length) return wishlistByCustomer.products.some(product => product.id == idProduct);
        //     else return false;
        // }
        let newProducts = [...wishlistByCustomer.products]
        if (!checkId) {
            newProducts.push({id:idProduct});
            let newWishlist = {
                id: wishlistByCustomer.id,
                products: newProducts,
                account: {id: customerLogin.id}
            }
            const fetchData = async () => {
                await dispatch(updateWishlist(newWishlist));
                await dispatch(getWishlistByCustomerId(customerLogin.id))
                    .then(res => {
                        Swal.fire(
                            'Success!',
                            'Add to Wishlist successfully!',
                            'success'
                        )
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            fetchData();

        } else {
            dispatch(getWishlistByCustomerId(customerLogin.id))
                .then(res => {
                    Swal.fire('The product already exists in the wishlist!')
                })
                .catch(err => {
                    console.log(err)})

        }

    }
    return (
        <>
            <div className="container">
                {/* row */}
                <div className="row">
                    <div className="col-12">
                        {/* heading */}
                        <h3>Five Most Purchased Products</h3>
                    </div>
                </div>
                {/* row */}
                <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
                    {fiveMostPurchasedProducts && fiveMostPurchasedProducts.map(dto => (
                        <div className="col">
                            <div className="card card-product">
                                <div className="card-body">
                                    {/* badge */}
                                    <div className="text-center position-relative ">
                                        <div className=" position-absolute top-0 start-0">
                                            {dto.product.status && <span className="badge bg-danger">{dto.product.status.name}</span>}
                                        </div>
                                        <a href="#!">
                                            {/* img */}
                                            <img
                                                src={dto.product.thumbnail}
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </a>
                                        {/* action btn */}
                                        <div className="card-product-action">
                                            <Link to={"/product/detail/" + dto.product.id}>
                                                <a
                                                    href=""
                                                    className="btn-action"
                                                    data-bs-toggle=""
                                                    data-bs-target=""
                                                >
                                                    <i
                                                        className="bi bi-eye"
                                                        data-bs-toggle=""
                                                        data-bs-html=""
                                                        title="Quick View"
                                                    />
                                                </a>
                                            </Link>
                                            <button style={{ border: "none" }}
                                                    className="btn-action"
                                                    data-bs-toggle=""
                                                    data-bs-html=""
                                                    title="Wishlist"
                                                    onClick={()=>{handleAddProductToWishlist(dto.product.id)}}
                                            >
                                                <i className="bi bi-heart" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* heading */}
                                    <div className="text-small mb-1">
                                        <a href="#!" className="text-decoration-none text-muted">
                                            <small>{dto.product.category.name}</small>
                                        </a>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link to={"/product/detail/" + dto.product.id}>
                                            <a
                                                href=""
                                                className="text-inherit text-decoration-none"
                                            >
                                                {dto.product.name}
                                            </a>
                                        </Link>
                                    </h2>
                                    <div>
                                        {" "}
                                        <small className="text-warning">
                                            {numbers.map((i) => (
                                                i <= Math.floor(dto.average_rating) ? (<i className="bi bi-star-fill"/>) : (<i className="bi bi-star"/>)
                                            ))}
                                        </small>
                                        {" "}
                                        <span className="text-muted small">{dto.average_rating}({dto.total_reviews} reviews)</span>
                                    </div>
                                    {/* price */}
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">${dto.product.price}</span>{" "}
                                        </div>
                                        <div>
                                            <a href="#!" className="btn btn-primary btn-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-plus"
                                                >
                                                    <line x1={12} y1={5} x2={12} y2={19} />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                </svg>
                                                Add
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default ProductDetailRelatedItems;