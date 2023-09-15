import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCustomerByAccountLogin} from "../../service/customerService";
import {getWishlistByCustomerId, updateWishlist} from "../../service/wishlistService";
import {Link} from "react-router-dom";

const ProductWishlist = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const customerLogin = useSelector(state => {
        console.log(state.customer.customerLogin)
        return state.customer.customerLogin;
    })
    const wishlistByCustomer = useSelector(state => {
        console.log(state)
        return state.wishlist.wishlistByCustomer;
    })
    useEffect(() => {
        dispatch(getCustomerByAccountLogin(account.id));
    },[])

    useEffect(() => {
        dispatch(getWishlistByCustomerId(customerLogin.id));
    },[customerLogin])
    const handleDeleteProductFromWishlist = (idProduct) => {
        let newProducts = wishlistByCustomer.products.filter(product => product.id != idProduct);
        let newWishlist = {
            id: wishlistByCustomer.id,
            products: newProducts,
            account: {id: customerLogin.id}
        }
        const fetchData = async () => {
            await dispatch(updateWishlist(newWishlist));;
            await dispatch(getWishlistByCustomerId(customerLogin.id));
        }
        fetchData()
    }
    return (
        <main>
            {/* section */}
            {wishlistByCustomer && <section className="mt-8 mb-14">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-8">
                                {/* heading */}
                                <h1 className="mb-1">My Wishlist</h1>
                                {wishlistByCustomer.products && <p>There are {wishlistByCustomer.products.length} products in this wishlist.</p>}
                            </div>
                            <div>
                                {/* table */}
                                <div className="table-responsive">
                                    <table className="table text-nowrap table-with-checkbox">
                                        <thead className="table-light">
                                        <tr>
                                            <th>
                                                {/* form check */}
                                                <div className="form-check">
                                                    {/* input */}
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="checkAll"
                                                    />
                                                    {/* label */}
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="checkAll"
                                                    ></label>
                                                </div>
                                            </th>
                                            <th />
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                            <th>Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {wishlistByCustomer.products && wishlistByCustomer.products.map(product => (
                                            <tr>
                                                <td className="align-middle">
                                                    {/* form check */}
                                                    <div className="form-check">
                                                        {/* input */}
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="chechboxTwo"
                                                        />
                                                        {/* label */}
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="chechboxTwo"
                                                        ></label>
                                                    </div>
                                                </td>
                                                <td className="align-middle">
                                                    <a href="">
                                                        <img
                                                            src={product.thumbnail}
                                                            className="icon-shape icon-xxl"
                                                            alt=""
                                                        />
                                                    </a>
                                                </td>
                                                <td className="align-middle">
                                                    <div>
                                                        <h5 className="fs-6 mb-0">
                                                            <Link to={"/product/detail/" + product.id}>
                                                            <a href="" className="text-inherit">
                                                                {product.name}
                                                            </a>
                                                            </Link>
                                                        </h5>
                                                    </div>
                                                </td>
                                                <td className="align-middle">${product.price}</td>
                                                <td className="align-middle">
                                                    {product.status && <span className="badge bg-success">{product.status.name}</span>}
                                                </td>
                                                <td className="align-middle">
                                                    <div className="btn btn-primary btn-sm">Add to Cart</div>
                                                </td>
                                                <td className="align-middle ">
                                                    <button style={{ border: "none", background: "white" }}
                                                        className="text-muted"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Delete"
                                                        onClick={() => {handleDeleteProductFromWishlist(product.id)}}
                                                    >
                                                        <i className="feather-icon icon-trash-2" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
        </main>

    );
};

export default ProductWishlist;