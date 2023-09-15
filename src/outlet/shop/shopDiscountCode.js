import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllStatusOrder} from "../../service/statusService";
import {getShopByAccountLogin} from "../../service/shopService";
import {deleteOrder, getAllOrdersByCustomer, getAllOrdersByShop, updateOrder} from "../../service/orderService";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {deleteCode, getAllCodeByShop, setQuantity} from "../../service/codeService";
import shop from "../../pages/shop";
import {Field, Form, Formik} from "formik";
import {isAfter, isBefore, parse} from "date-fns";
import axios from "axios";
import {getAllCustomerBuyProductFromShop} from "../../service/customerService";
import {addNotification} from "../../service/notificationService";

const ShopDiscountCode = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();

    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })
    const codeByShop = useSelector(state => {
        console.log(state)
        return state.code.codeByShop;
    })
    const customersBuyProductOfShop = useSelector(state => {
        console.log(state)
        return state.customer.customersBuyProductOfShop;
    })
    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id));
    }, [])
    useEffect(() => {
        dispatch(getAllCodeByShop(shopLogin.id));
        dispatch(getAllCustomerBuyProductFromShop(shopLogin.id));
    }, [shopLogin])
    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <div className="py-6 p-md-6 p-lg-10">
                    {/* heading */}
                    <div className="row">
                        <div className="col-9">
                            <h2 className="mb-6">Discount Code</h2>

                        </div>
                        <div className="col-3">
                            <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#createCodeModal"
                                className="btn btn-success"
                            >
                                Create Discount Code
                            </button>
                        </div>
                    </div>
                    <div className="table-responsive-xxl border-0">
                        {/* Table */}
                        <table className="table mb-0 text-nowrap table-centered ">
                            {/* Table Head */}
                            <thead className="bg-light">
                            <tr>
                                <th>&nbsp;</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Percent</th>
                                <th>Quantity</th>
                                <th>Set Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {codeByShop && codeByShop.map(code => (
                                <tr>
                                    <td className="align-middle border-top-0 w-0">
                                        <i className="feather-icon icon-zap" style={{color: "blue"}}/>
                                    </td>
                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">
                                            {code.id}
                                        </a>
                                    </td>
                                    <td className="align-middle border-top-0">{code.name}</td>
                                    <td className="align-middle border-top-0">
                                        {code.percent*100}%
                                    </td>
                                    <td className="align-middle border-top-0">{code.quantity}</td>
                                    <td className="text-muted align-middle border-top-0">
                                        <button
                                            style={{background: "white", border: "none"}}
                                            className="text-inherit"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="View"
                                            onClick={() => {
                                                let newCode = {...code, quantity: 0}
                                                const fetchData = async () => {
                                                    await dispatch(setQuantity([code.id, newCode]));
                                                    await dispatch(getAllCodeByShop(shopLogin.id));
                                                };
                                                fetchData();
                                                Swal.fire(
                                                    'Success!',
                                                    'Set Quantity!',
                                                    'success'
                                                ).then(err => {
                                                    console.log(err)
                                                })
                                            }}
                                        >
                                            <i className="feather-icon icon-lock" style={{color: "red"}}/>
                                        </button>
                                    </td>
                                </tr>
                            ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/*Modal*/}
            <div
                className="modal fade"
                id="createCodeModal"
                tabIndex={-1}
                aria-labelledby="userModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                                Discount Code
                            </h5>
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={{
                                    name:'',
                                    quantity: 0,
                                    percent: 0
                            }}
                                validate={values => {
                                    const errors = {};

                                    if (!values.name) {
                                        errors.name = 'Name is required';
                                    }else if(values.name.length<6){
                                        errors.name = 'Name must be at least 6 characters long';

                                    }

                                    if (!values.quantity) {
                                        errors.quantity = 'Quantity is required';
                                    } else if (isNaN(values.quantity)) {
                                        errors.quantity = 'Quantity must be a number';
                                    }else if(values.quantity<=0) {
                                        errors.quantity = 'Quantity must be greater than 0';
                                    }
                                    if (!values.percent) {
                                        errors.percent = 'Percent is required';
                                    }

                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting , resetForm }) => {
                                    let code = {
                                        name:values.name,
                                        quantity:values.quantity,
                                        percent:values.percent,
                                        shop:{
                                            id:shopLogin.id
                                        }
                                    }
                                    console.log(code)
                                    axios.post("http://localhost:8080/code/create",code,{
                                        headers: {
                                            'Authorization': localStorage.getItem('token')
                                        },
                                    }).then(()=>{
                                        Swal.fire(
                                            'Success!',
                                            'Set Quantity!',
                                            'success')
                                        dispatch(getAllCodeByShop(shopLogin.id));
                                    }).catch((err)=>{
                                        console.log(err)
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: 'Codename already in use!',
                                        })
                                    })
                                    resetForm();
                                    setSubmitting(false);
                                }}
                            >
                                {({ errors, touched, isSubmitting }) => (
                                    <Form>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name Code"
                                                    name="name"
                                                    id = "nameCode"
                                                />
                                                {errors.name && touched.name && (
                                                    <div className="error-message">{errors.name}</div>
                                                )}
                                            </div>
                                            <div className="col-12">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Quantity"
                                                    name="quantity"
                                                />
                                                {errors.quantity && touched.quantity && (
                                                    <div className="error-message">{errors.quantity}</div>
                                                )}
                                            </div>
                                            <div className="col-12">
                                                <Field
                                                    as="select"
                                                    className="form-control"
                                                    name="percent"
                                                >
                                                    <option value="">Select percent</option>
                                                    <option value="0.05">5%</option>
                                                    <option value="0.1">10%</option>
                                                    <option value="0.15">15%</option>
                                                    <option value="0.2">20%</option>
                                                    <option value="0.25">25%</option>
                                                </Field>
                                                {errors.percent && touched.percent && (
                                                    <div className="error-message">{errors.percent}</div>
                                                )}
                                            </div>
                                            <div className="col-12 d-grid">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    disabled={isSubmitting}
                                                    onClick={() => {
                                                        for (let i = 0; i < customersBuyProductOfShop.length; i++) {
                                                            let nameCode = document.getElementById("nameCode").value;
                                                            console.log(nameCode)
                                                            let name = "Discount Code";
                                                            let context = "" + shopLogin.account.name + " just got a new discount code " + '"' + nameCode + '"';
                                                            let sender = shopLogin.account;
                                                            let receiver = customersBuyProductOfShop[i].account;
                                                            let notification = {name: name, context: context,
                                                                sender: sender, receiver: receiver};
                                                            dispatch(addNotification(notification));
                                                        }
                                                    }}
                                                >
                                                    Create
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                        </div>
                        <div className="modal-footer border-0 justify-content-center">

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default ShopDiscountCode;