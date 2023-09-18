import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCustomerByAccountLogin} from "../../service/customerService";
import {deleteOrder, getAllOrdersByCustomer} from "../../service/orderService";
import {Link} from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import {addNotification} from "../../service/notificationService";

const CustomerOrder = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const customerLogin = useSelector(state => {
        console.log(state.customer.customerLogin)
        return state.customer.customerLogin;
    })
    const ordersByCustomer = useSelector(state => {
        console.log(state)
        return state.order.ordersByCustomer;
    })
    useEffect(() => {
        dispatch(getCustomerByAccountLogin(account.id));
    },[])
    useEffect(() => {
        dispatch(getAllOrdersByCustomer(customerLogin.id));
    },[customerLogin])
    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <div className="py-6 p-md-6 p-lg-10">
                    {/* heading */}
                    <h2 className="mb-6">Orders</h2>
                    <div className="table-responsive-xxl border-0">
                        {/* Table */}
                        <table className="table mb-0 text-nowrap table-centered ">
                            {/* Table Head */}
                            <thead className="bg-light">
                            <tr>
                                <th>&nbsp;</th>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Amount</th>
                                <th />
                                <th />
                            </tr>
                            </thead>
                            <tbody>
                            {ordersByCustomer && ordersByCustomer.map(order => (
                                <tr>
                                    <td className="align-middle border-top-0 w-0">
                                        <i className="feather-icon icon-clipboard" style={{ color: "blue" }} />
                                    </td>
                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">
                                            {order.id}
                                        </a>
                                    </td>
                                    <td className="align-middle border-top-0">{order.date_create}</td>
                                    <td className="align-middle border-top-0">
                                        <span className="badge bg-success">{order.status.name}</span>
                                    </td>
                                    <td className="align-middle border-top-0">${order.totalAmount}</td>
                                    <td className="text-muted align-middle border-top-0">
                                        <Link to={"/customer/order-detail/" + order.id}>
                                        <a
                                            href="#"
                                            className="text-inherit"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="View"
                                        >
                                            <i className="feather-icon icon-eye" />
                                        </a>
                                        </Link>
                                    </td>
                                    <td className="text-muted align-middle border-top-0">
                                        <button style={{border: "none", background: "white"}}
                                            href="#"
                                            className="text-inherit"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="Delete"
                                                onClick={() => {
                                                    if (order.status.name == "Pending") {
                                                        let name = "Order";
                                                        let context = "" + customerLogin.account.name + " have deleted a order with ID: " + order.id;
                                                        let sender = customerLogin.account;
                                                        let receiver = order.shop.account;
                                                        let notification = {name: name, context: context,
                                                            sender: sender, receiver: receiver};
                                                        const fetchData = async () => {
                                                            await dispatch(addNotification(notification));
                                                            await dispatch(deleteOrder(order.id));
                                                            await dispatch(getAllOrdersByCustomer(customerLogin.id));
                                                        };
                                                        fetchData();
                                                        Swal.fire(
                                                            'Success!',
                                                            'Delete Order!',
                                                            'success'
                                                        ).then(err => {
                                                            console.log(err)
                                                        })
                                                    } else {
                                                        Swal.fire('Order have been confirmed and cannot be deleted!')
                                                            .then(err => {
                                                                console.log(err)
                                                            })
                                                    }
                                                }}
                                        >
                                            <i className="feather-icon icon-trash-2" style={{ color: "red" }} />
                                        </button>
                                    </td>
                                </tr>
                            ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CustomerOrder;