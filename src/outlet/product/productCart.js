import React, {useEffect, useState} from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import {useDispatch, useSelector} from "react-redux";
import {
    deleteProductFromCartByAccount,
    getCartByAccount, updateCartByStore,
    updateProductFromCartByAccount
} from "../../service/cartService";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {isAfter, isBefore, parse} from "date-fns";
import {Link, useNavigate} from "react-router-dom";
import {getCustomerByAccountLogin} from "../../service/customerService";
import {getShopByAccountLogin} from "../../service/shopService";
import {addNotification} from "../../service/notificationService";

const ProductCart = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const customerLogin = useSelector(state => {
        return state.customer.customerLogin;
    })
    const navigate = useNavigate();
    const carts = useSelector(state => {
        return state.cart.allProductsFromCart
    })
    const [shopCodes, setShopCodes] = useState([]);
    const [totals, setTotals] = useState({});
    const [reducedAmount, setReducedAmount] = useState({});
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalAmountReduced, setTotalAmountReduced] = useState(0);
    const [payOfBill, setPayOfBill] = useState({});
    const [discountCode, setDiscountCode] = useState([]);
    const [customer, setCustomer] = useState({});
    const [checkedStatus, setCheckedStatus] = useState({});
    const [invoiceQuantity, setInvoiceQuantity] = useState(0)

    useEffect(() => {
        dispatch(getCustomerByAccountLogin(account.id));
        axios.get("http://localhost:8080/customer/getByAccount", {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        }).then((res) => {
            setCustomer(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])
    useEffect(() => {
        dispatch(getCartByAccount())
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/cart/shopCode", {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        }).then((rest) => {
            setShopCodes(rest.data)
        })

    }, [carts])

    // useEffect(() => {
    //     // Tính tổng số tiền đã giảm
    //     let totalReduced = 0;
    //     Object.values(reducedAmount).forEach((amount) => {
    //         totalReduced += amount;
    //     });
    //     setTotalAmountReduced(totalReduced.toFixed(2));
    // }, [reducedAmount]);

    useEffect(() => {
        const calculateTotals = () => {
            const newTotals = {};
            shopCodes.forEach(shopCode => {
                let total = 0;
                carts.forEach(cart => {
                    if (cart.product.shop.id === shopCode.id) {
                        const {price} = cart.product;
                        const quantity = cart.quantity;
                        total += price * quantity;
                    }
                });
                newTotals[shopCode.id] = total;
            });
            setTotals(newTotals);
            setPayOfBill(newTotals)
        };

        calculateTotals();
    }, [carts, shopCodes]);

    const handleAmountIsReduced = (value, id, totalAmount) => {
        let percent = 0;
        for (const item of shopCodes) {
            for (const code of item.codes) {
                if (code.id == value) {
                    percent = code.percent;
                    break;
                }
            }
        }
        const shopIndex = discountCode.findIndex(item => item.id === id);
        if (shopIndex !== -1) {
            discountCode[shopIndex].codeId = value;
        } else {
            discountCode.push({id: id, codeId: value});
        }
        setDiscountCode(discountCode);


        const reducedAmountValue = percent * totalAmount;
        const payAmountValue = totalAmount - reducedAmountValue;

        setReducedAmount((prevState) => ({
            ...prevState,
            [id]: reducedAmountValue,
        }));
        setPayOfBill((prevState) => ({
            ...prevState,
            [id]: payAmountValue
        }))
    };


    const handleOnClick = (num, id) => {
        const updatedCart = carts.map(item => {
            if (item.id === id) {
                if (num === 1 && item.quantity > 1) {
                    return {...item, quantity: item.quantity - 1};
                } else if (num === 2) {
                    if (item.quantity < item.product.quantity) {
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        Swal.fire({
                            icon: 'info',
                            title: 'Oops...',
                            text: 'Quantity is not enough!',
                        })
                    }
                }

            }
            return item;
        });
        dispatch(updateCartByStore(updatedCart));
        const updatedTotalAmount = updatedCart.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
        );
        setTotals(updatedTotalAmount);
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
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                dispatch(deleteProductFromCartByAccount(id));
            } else if (
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
    const handleUpdateCart = (num) => {
        if (carts.length !== 0) {
            if (num == 1) {
                dispatch(updateProductFromCartByAccount(carts)).then(res => {
                    Swal.fire(
                        'Success!',
                        'You have successfully updated your shopping cart!',
                        'success'
                    )
                }).catch(err => {
                    console.log(err)
                })
            } else if (num == 2) {
                dispatch(updateProductFromCartByAccount(carts)).then(res => {

                }).catch(err => {
                    console.log(err)
                })
            }
        } else {
            Swal.fire(
                'Cart is Empty?',
                'You have not purchased any products yet!',
                'question'
            )
        }


    }
    useEffect(() => {
        const selectedInvoices = Object.values(checkedStatus).filter(Boolean);
        setInvoiceQuantity(selectedInvoices.length);
        let totalAmountWhenCheckbox = 0;
        let totalAmountReducedWhenCheckbox = 0
        shopCodes.map((s) => {
            if (checkedStatus[s.id]) {
                totalAmountWhenCheckbox += totals[s.id];
                if (reducedAmount[s.id] == null) {
                    totalAmountReducedWhenCheckbox += 0;
                } else {
                    totalAmountReducedWhenCheckbox += reducedAmount[s.id]
                }
            }

        })
        setTotalAmount(totalAmountWhenCheckbox)
        setTotalAmountReduced(totalAmountReducedWhenCheckbox.toFixed(2))
    }, [checkedStatus, reducedAmount, totals, carts])
    const handleCheckboxChange = (shopCode) => {
        setCheckedStatus((prevCheckedStatus) => ({
            ...prevCheckedStatus,
            [shopCode]: !prevCheckedStatus[shopCode]
        }));
    };
    const handleUpdateCustomer = (address, phone) => {
        if (customer.phone !== phone || customer.address !== address) {
            swalWithBootstrapButtons.fire({
                title: 'Update information?',
                text: "You want to save information for your next purchase?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, update it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                let cus = {
                    ...customer,
                    phone: phone,
                    address: address
                }
                if (result.isConfirmed) {
                    axios.post("http://localhost:8080/customer/save", cus, {
                        headers: {
                            'Authorization': localStorage.getItem('token'),
                        }
                    }).then(res => {
                        swalWithBootstrapButtons.fire(
                            'Update success!',
                            'You have successfully updated your information!',
                            'success'
                        )
                    }).catch((err) => {
                        console.log(err);
                    })
                    navigate("/customer/order");
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        '',
                        'error'
                    )
                    navigate("/customer/order");
                }
            })

        } else {
            navigate("/customer/order");
        }
    }
    console.log(discountCode)
    return (
        <main>
            {/* section */}
            <section className="mb-lg-14 mb-8 mt-8">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-12">
                            {/* card */}
                            <div className="card py-1 bshopCode-0 mb-8">
                                <div>
                                    <h1 className="fw-bold">Payment</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <div className="py-3">
                                {/* alert */}
                                {shopCodes.length > 0 && shopCodes.map((shopCode) => (
                                    <div className="alert alert-danger p-2" role="alert" key={shopCode.id}>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item py-3 py-lg-0 px-0">
                                                <div className="row align-items-center" style={{marginBottom: "5px"}}>

                                                    <div className="col-10 ">
                                                        <div className='col-11 col-md-4'>

                                                        </div>
                                                        <img
                                                            src={shopCode.logo}
                                                            alt="Ecommerce"
                                                            style={{maxWidth: "10%"}}
                                                            className="img-thumbnail"
                                                        />
                                                        <strong>{shopCode.shopName}</strong>
                                                    </div>
                                                    <div className={"col-1 col-md-2"}><input
                                                        style={{width: "17px", height: "17px"}} type="checkbox"
                                                        checked={Boolean(checkedStatus[shopCode.id])}
                                                        onChange={() => handleCheckboxChange(shopCode.id)}
                                                    /></div>
                                                </div>
                                                <div className="row align-items-center" style={{marginBottom: "5px"}}>

                                                </div>
                                                <div style={{borderBottom: "1px dashed red"}}></div>
                                                {carts.map((cart) => {
                                                    if (cart.product.shop.id === shopCode.id) {
                                                        return (
                                                            <div className="row align-items-center"
                                                                 style={{marginBottom: "5px"}} key={cart.id}>
                                                                <div className="col-3 col-md-2">
                                                                    <img src={cart.product.thumbnail} alt="Ecommerce"
                                                                         style={{maxWidth: "80%"}}/>
                                                                </div>
                                                                <div className="col-4 col-md-5">
                                                                    <h6 className="mb-0">{cart.product.name}</h6>
                                                                    <div className="mt-2 small lh-1">
                                                                        <a
                                                                            className="text-decoration-none text-inherit"
                                                                            onClick={() => handleRemove(cart.id)}
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
                                                                <div className="col-3 col-md-3 col-lg-2">
                                                                    {/* input */}
                                                                    <div className="input-group input-spinner  ">
                                                                        <input
                                                                            type="button"
                                                                            defaultValue="-"
                                                                            className="button-minus btn btn-sm"
                                                                            data-field="quantity"
                                                                            onClick={() => handleOnClick(1, cart.id)}
                                                                        />
                                                                        <input
                                                                            type="number"
                                                                            step={1}
                                                                            max={10}
                                                                            value={cart.quantity}
                                                                            name="quantity"
                                                                            className="quantity-field form-control-sm form-input   "
                                                                        />
                                                                        <input
                                                                            type="button"
                                                                            defaultValue="+"
                                                                            className="button-plus btn btn-sm "
                                                                            data-field="quantity"
                                                                            onClick={() => handleOnClick(2, cart.id)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                                    <span
                                                                        className="fw-bold">${cart.product.price * cart.quantity}</span>
                                                                </div>
                                                            </div>
                                                        );
                                                    } else {
                                                        return null;
                                                    }
                                                })}
                                                <div style={{borderBottom: "1px dashed red"}}></div>
                                                <br/>
                                                <div className="row align-items-center"
                                                     style={{marginBottom: "5px"}}>
                                                    <div className="col-7 col-md-5">

                                                    </div>

                                                    <div className="col-3 col-md-3 col-lg-3">
                                                        <img style={{width: "30px", height: "30px"}}
                                                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wvXFUnjqW_U7Yf_9pSqQZw4B_RdaAXvP_Q&usqp=CAU"
                                                             alt="Discount Icon"/>
                                                        Discount code:
                                                    </div>
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        <select id={"shopCode" + shopCode.id}
                                                                onChange={(event) => handleAmountIsReduced(event.target.value, shopCode.id, totals[shopCode.id])}>
                                                            <option value={0}>Select discount code:</option>
                                                            {shopCode.codes.length > 0 ? shopCode.codes.map((code) => (
                                                                <option value={code.id}>{code.name}</option>
                                                            )) : <option value={0}>No discount code!</option>}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center"
                                                     style={{marginBottom: "5px"}}>
                                                    <div className="col-7 col-md-5"></div>
                                                    <div className="col-3 col-md-3 col-lg-3">
                                                        <strong>Total : </strong>
                                                    </div>
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        $<span className="fw-bold">
                                                            {Object.keys(totals).map(shopId => {
                                                                if (parseInt(shopId) === shopCode.id) {
                                                                    return (
                                                                        <strong key={shopId}>{totals[shopId]}</strong>
                                                                    );
                                                                }
                                                                return null;
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center"
                                                     style={{marginBottom: "5px"}}>
                                                    <div className="col-7 col-md-5"></div>
                                                    <div className="col-3 col-md-3 col-lg-3">
                                                        <strong>Amount is reduced : </strong>
                                                    </div>
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        $<span className="fw-bold"
                                                               id={`reduced${shopCode.id}`}>
                                                           {reducedAmount[shopCode.id] ?? 0}
                                                        </span>

                                                    </div>
                                                </div>
                                                <div className="row align-items-center"
                                                     style={{marginBottom: "5px"}}>
                                                    <div className="col-7 col-md-5"></div>
                                                    <div className="col-3 col-md-3 col-lg-3">
                                                        <strong>Payment amount : </strong>
                                                    </div>
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        $<span className="fw-bold" id={`pay${shopCode.id}`}>
                                                        <strong style={{color: "red"}}>{payOfBill[shopCode.id]}</strong>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>

                                    </div>
                                ))}
                                <div className="d-flex justify-content-between mt-4">
                                    <Link to={"/index"} className="btn btn-primary">
                                        Continue Shopping
                                    </Link>
                                    <Link to="#" className="btn btn-dark" onClick={() => handleUpdateCart(1)}>
                                        Update Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-5">
                            {/* card */}
                            <div className="mb-5 card mt-6">
                                <div className="card-body p-6">
                                    {shopCodes.length > 0}
                                    {/* heading */}
                                    <h2 className="h5 mb-4">Summary</h2>
                                    <div className="card mb-2">
                                        {/* list group */}
                                        <ul className="list-group list-group-flush">
                                            {/* list group item */}
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="me-auto">
                                                    <div>Invoice quantity :</div>
                                                </div>
                                                <span>
                                                    {invoiceQuantity}
                                                </span>
                                            </li>

                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="me-auto">
                                                    <div className="fw-bold">The total amount :</div>
                                                </div>
                                                <span className="fw-bold">
                                                    ${totalAmount}
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="me-auto">
                                                    <div className="fw-bold">Total amount is reduced :</div>
                                                </div>
                                                <span className="fw-bold">
                                                    ${totalAmountReduced}
                                                </span>

                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start"
                                                style={{color: "red"}}>
                                                <div className="me-auto">
                                                    <div className="fw-bold">Total amount to be paid :</div>
                                                </div>
                                                <span className="fw-bold">
                                                   ${totalAmount - totalAmountReduced}
                                                </span>
                                            </li>

                                        </ul>
                                    </div>
                                    <Formik
                                        initialValues={{
                                            fullName: account.name,
                                            phone: customer.phone ? customer.phone : '',
                                            address: customer.address ? customer.address : ''

                                        }}
                                        validate={values => {
                                            const errors = {};

                                            if (!values.fullName) {
                                                errors.fullName = 'Please enter FullName';
                                            }

                                            if (!values.phone) {
                                                errors.phone = 'Please enter the Phone Number';
                                            }

                                            if (!values.address) {
                                                errors.address = 'Please enter Your Address';
                                            }
                                            return errors;
                                        }}
                                        onSubmit={(values, {setSubmitting}) => {
                                            if (totalAmount === 0) {
                                                if (carts.length <= 0) {
                                                    Swal.fire(
                                                        'Cart is empty?',
                                                        "You don't have any products in your shopping cart yet!",
                                                        'question'
                                                    )
                                                } else {
                                                    Swal.fire(
                                                        'Not selected yet?',
                                                        "You have not selected a payment invoice!",
                                                        'question'
                                                    )
                                                }
                                            } else {
                                                for (let i = 0; i < shopCodes.length; i++) {
                                                    let name = "Order";
                                                    let context = "" + customerLogin.account.name + " has just created a new order";
                                                    let sender = customerLogin.account;
                                                    let receiver = {id: shopCodes[i].idAccount};
                                                    let notification = {
                                                        name: name, context: context,
                                                        sender: sender, receiver: receiver
                                                    };
                                                    dispatch(addNotification(notification));
                                                }
                                                const fetchData = async () => {
                                                    handleUpdateCart(2);
                                                    let codeDTOs = [];
                                                    for (const dc of discountCode) {
                                                        if (checkedStatus[dc.id]){
                                                            codeDTOs.push({id: dc.codeId, shopId: dc.id})
                                                        }
                                                    }
                                                    console.log(codeDTOs)
                                                    await axios.post("http://localhost:8080/cart/payment/" + values.fullName + "/" + values.phone + "/" + values.address, codeDTOs, {
                                                        headers: {
                                                            'Authorization': localStorage.getItem('token'),
                                                        }
                                                    }).then((res) => {
                                                        Swal.fire(
                                                            'Payment success!',
                                                            'You have successfully completed your shopping cart!',
                                                            'success'
                                                        )
                                                        handleUpdateCustomer(values.address, values.phone);

                                                    }).catch((err) => {
                                                        Swal.fire(
                                                            'Payment failed!',
                                                            'Your order payment was not successful!',
                                                            'info'
                                                        )
                                                    });
                                                }
                                                fetchData()
                                            }
                                            setSubmitting(false);
                                        }}
                                        enableReinitialize={true}
                                    >

                                        {({errors, touched, isSubmitting}) => (
                                            <Form>
                                                <div className="mt-8">
                                                    <h3><strong>Receiver's information: </strong></h3>
                                                    <div className="mb-2">
                                                        {/* input */}
                                                        <strong>Full name: </strong>
                                                        <Field
                                                            type="text"
                                                            className="form-control"
                                                            name="fullName"
                                                            placeholder="Full Name?"
                                                        />
                                                        {errors.fullName && touched.fullName && (
                                                            <div className="error-message"
                                                                 style={{color: "red"}}>{errors.address}</div>
                                                        )}
                                                        <br/>
                                                        <strong>Phone number: </strong>
                                                        <Field
                                                            type="number"
                                                            className="form-control"
                                                            name="phone"
                                                            placeholder="Phone Number?"
                                                        />
                                                        {errors.phone && touched.phone && (
                                                            <div className="error-message"
                                                                 style={{color: "red"}}>{errors.phone}</div>
                                                        )}

                                                        <br/>
                                                        <strong>Address: </strong>
                                                        <Field
                                                            className="form-control"
                                                            name="address"
                                                            placeholder="Address?"
                                                        />
                                                        {errors.address && touched.address && (
                                                            <div className="error-message"
                                                                 style={{color: "red"}}>{errors.address}</div>
                                                        )}


                                                    </div>
                                                </div>
                                                <div className="d-grid mb-1 mt-4">

                                                    <button
                                                        className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                    >
                                                        Payment confirmation
                                                        <span
                                                            className="fw-bold"> ${totalAmount - totalAmountReduced}</span>
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
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