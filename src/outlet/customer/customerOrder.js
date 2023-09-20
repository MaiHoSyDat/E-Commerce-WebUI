import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCustomerByAccountLogin} from "../../service/customerService";
import {deleteOrder, getAllOrdersByCustomer} from "../../service/orderService";
import {Link} from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import {addNotification} from "../../service/notificationService";
import {getAllStatusOrder} from "../../service/statusService";

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
    const statusOrder = useSelector(state => {
        return state.status.statusOrder;
    })
    useEffect(() => {
        dispatch(getAllStatusOrder())
        dispatch(getCustomerByAccountLogin(account.id));
    },[])
    useEffect(() => {
        dispatch(getAllOrdersByCustomer(customerLogin.id));
    },[customerLogin])
    const [filterItems, setFilterItems] = useState([]);
    useEffect(() =>{
        setFilterItems([...ordersByCustomer])
    },[ordersByCustomer])
    const handleFilterStatus = () =>{
        let statusName = document.getElementById("filterStatus").value;
        if (statusName == "All") setFilterItems([...ordersByCustomer]);
        else {
            setFilterItems(ordersByCustomer.filter(item => item.status.name == statusName))
        }
    }
    //phan trang
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const totalProducts = filterItems.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Tạo danh sách sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = filterItems.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        window.scrollTo(0, 0);
        setCurrentPage(page);
    };
    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <div className="py-6 p-md-6 p-lg-10">
                    {/* heading */}
                    <div className="row">
                        <div className="col-6"><h2 className="mb-6">Orders </h2></div>
                        <div className="col-2"><h2 className="mb-6">Status: </h2></div>
                        <div className="col-4">
                            <select className="form-select" aria-label="Default select example" style={{width:"200px"}} id={"filterStatus"} onClick={handleFilterStatus}>
                                <option value="All" >All</option>
                                {statusOrder && statusOrder.map(status => (
                                    <option value={status.name} >{status.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
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
                            {currentProducts && currentProducts.map(order => (
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
                                                    Swal.fire({
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Yes, delete it!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
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
                                                                    'Deleted!',
                                                                    'Your Order has been deleted.',
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
                                                        }
                                                    })

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
                <div className="py-6 p-md-6 p-lg-10">
                    <div className="col">
                        {/* nav */}
                        <nav>
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link  mx-1 " aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                        <i className="feather-icon icon-chevron-left" />
                                    </a>
                                </li>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li className="page-item">
                                        <a className="page-link mx-1 text-body" key={index} onClick={() => handlePageChange(index + 1)}>
                                            {index + 1}
                                        </a>
                                    </li>
                                ))}
                                {/*<li className="page-item ">*/}
                                {/*    <a className="page-link  mx-1 active" href="#">*/}
                                {/*        1*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li className="page-item">*/}
                                {/*    <a className="page-link mx-1 text-body" href="#">*/}
                                {/*        2*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li className="page-item">*/}
                                {/*    <a className="page-link mx-1 text-body" href="#">*/}
                                {/*        ...*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li className="page-item">*/}
                                {/*    <a className="page-link mx-1 text-body" href="#">*/}
                                {/*        12*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                <li className="page-item">
                                    <a className="page-link mx-1 text-body" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                        <i className="feather-icon icon-chevron-right" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


        </>
    );
};

export default CustomerOrder;