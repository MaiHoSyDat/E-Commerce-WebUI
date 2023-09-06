import React, {useEffect, useState} from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const ProductCart = () => {
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:8080/cart', {
            headers: {
                'Authorization': localStorage.getItem('token')
            },
        }).then(res => {
            setList(res.data);
            let total = 0;
            res.data.map((item, index) => {
                total += item.product.price * item.quantity;
            })
            setTotal(total)
        }).catch(error => {
            console.error('Error retrieving cart data:', error);
        });
    }, [])
    const handleOnClick = (num, id) => {
        const updatedList = list.map(item => {
            if (item.id === id) {
                if (num === 1) {
                    return {...item, quantity: item.quantity - 1};
                } else if (num === 2) {
                    return {...item, quantity: item.quantity + 1};
                }
            }
            return item;
        });
        setList(updatedList);
        const updatedTotalAmount = updatedList.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
        );
        setTotal(updatedTotalAmount);
    };
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    const handleRemove = (id) => {

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const updateList = list.filter((item) => (
                    item.id !== id
                ))
                setList(updateList);
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                axios.post('http://localhost:8080/cart/deleteProductByCart?cartDetailId=' + id, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    },
                }).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err)
                })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    const handleUpdateCart = () => {
        axios.post('http://localhost:8080/cart/updateCart', list, {
            headers: {
                'Authorization': localStorage.getItem('token')
            },
        }).then(res => {
            alert('ok')
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <main>
            {/* section */}
            <section className="mb-lg-14 mb-8 mt-8">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-12">
                            {/* card */}
                            <div className="card py-1 border-0 mb-8">
                                <div>
                                    <h1 className="fw-bold">Shop Cart</h1>
                                    <p className="mb-0">Shopping in 382480</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <div className="py-3">
                                {/* alert */}
                                <div className="alert alert-danger p-2" role="alert">
                                    You’ve got FREE delivery. Start{" "}
                                    <a href="#!" className="alert-link">
                                        checkout now!
                                    </a>
                                </div>
                                <ul className="list-group list-group-flush">
                                    {list.map((item, index) => (
                                        <li className="list-group-item py-3 py-lg-0 px-0" key={item.id}>
                                            {/* row */}
                                            <div className="row align-items-center">
                                                <div className="col-3 col-md-2">
                                                    {/* img */}{" "}
                                                    <img
                                                        src={item.product.thumbnail}
                                                        alt="Ecommerce"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="col-4 col-md-5">
                                                    {/* title */}
                                                    <a href="shop-single.html" className="text-inherit">
                                                        <h6 className="mb-0">{item.product.name}</h6>
                                                    </a>
                                                    <span>
                      {/*<small className="text-muted">250g</small>*/}
                    </span>

                                                    <div className="mt-2 small lh-1">
                                                        <a
                                                            className="text-decoration-none text-inherit"
                                                            onClick={() => handleRemove(item.id)}
                                                        >
                                                            {" "}
                                                            <span className="me-1 align-text-bottom">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6"/>
                            <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1={10} y1={11} x2={10} y2={17}/>
                            <line x1={14} y1={11} x2={14} y2={17}/>
                          </svg>
                        </span>
                                                            <span
                                                                style={{color: "red"}}>Remove</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* input group */}
                                                <div className="col-3 col-md-3 col-lg-2">
                                                    {/* input */}
                                                    <div className="input-group input-spinner  ">
                                                        <input
                                                            type="button"
                                                            defaultValue="-"
                                                            className="button-minus btn btn-sm"
                                                            data-field="quantity"
                                                            onClick={() => handleOnClick(1, item.id)}
                                                        />
                                                        <input
                                                            type="number"
                                                            step={1}
                                                            max={10}
                                                            value={item.quantity}
                                                            name="quantity"
                                                            className="quantity-field form-control-sm form-input   "
                                                        />
                                                        <input
                                                            type="button"
                                                            defaultValue="+"
                                                            className="button-plus btn btn-sm "
                                                            data-field="quantity"
                                                            onClick={() => handleOnClick(2, item.id)}
                                                        />
                                                    </div>
                                                </div>
                                                {/* price */}
                                                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                    <span
                                                        className="fw-bold">${item.product.price * item.quantity}</span>
                                                    {/*<div className="text-decoration-line-through text-muted small">*/}
                                                    {/*    $20.00*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                {/* btn */}
                                <div className="d-flex justify-content-between mt-4">
                                    <a href="#!" className="btn btn-primary">
                                        Continue Shopping
                                    </a>
                                    <a href="#" className="btn btn-dark" onClick={() => handleUpdateCart()}>
                                        Update Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* sidebar */}
                        <div className="col-12 col-lg-4 col-md-5">
                            {/* card */}
                            <div className="mb-5 card mt-6">
                                <div className="card-body p-6">
                                    {/* heading */}
                                    <h2 className="h5 mb-4">Summary</h2>
                                    <div className="card mb-2">
                                        {/* list group */}
                                        <ul className="list-group list-group-flush">
                                            {/* list group item */}
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="me-auto">
                                                    <div>Items</div>
                                                </div>
                                                <span>{list.length}</span>
                                            </li>

                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="me-auto">
                                                    <div className="fw-bold">Subtotal</div>
                                                </div>
                                                <span className="fw-bold">
                                                    {total}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-grid mb-1 mt-4">
                                        {/* btn */}
                                        <button
                                            className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                                            type="submit"
                                        >
                                            Go to Checkout <span className="fw-bold">${total}</span>
                                        </button>
                                    </div>
                                    {/* text */}
                                    <p>
                                        <small>
                                            By placing your order, you agree to be bound by the Freshcart{" "}
                                            <a href="#!">Terms of Service</a>
                                            and <a href="#!">Privacy Policy.</a>{" "}
                                        </small>
                                    </p>
                                    {/* heading */}
                                    <div className="mt-8">
                                        <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                                        <form>
                                            <div className="mb-2">
                                                {/* input */}
                                                <label htmlFor="giftcard" className="form-label sr-only">
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="giftcard"
                                                    placeholder="Promo or Gift Card"
                                                />
                                            </div>
                                            {/* btn */}
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-outline-dark mb-1">
                                                    Redeem
                                                </button>
                                            </div>
                                            <p className="text-muted mb-0">
                                                <small>Terms &amp; Conditions apply</small>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default ProductCart;