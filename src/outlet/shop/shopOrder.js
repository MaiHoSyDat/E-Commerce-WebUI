import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteOrder, getAllOrdersByShop, updateOrder} from "../../service/orderService";
import {getShopByAccountLogin} from "../../service/shopService";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {getAllStatusOrder} from "../../service/statusService";

const ShopOrder = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })
    const ordersByShop = useSelector(state => {
        console.log(state)
        return state.order.ordersByShop;
    })
    const statusOrder = useSelector(state => {
        return state.status.statusOrder;
    })
    useEffect(() => {
        dispatch(getAllStatusOrder())
        dispatch(getShopByAccountLogin(account.id));
    },[])
    useEffect(() => {
        dispatch(getAllOrdersByShop(shopLogin.id));
    },[shopLogin])
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
                            </tr>
                            </thead>
                            <tbody>
                            {ordersByShop && ordersByShop.map(order => (
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
                                        <select className="form-select" aria-label="Default select example" id="statusOrder" onClick={() => {
                                            //change status
                                            let idStatus = document.getElementById("statusOrder").value;
                                            if (idStatus != order.status.id) {
                                                let newOrder = {...order, status:{id: idStatus}}
                                                const fetchData = async () => {
                                                    await dispatch(updateOrder([order.id, newOrder]));
                                                    await dispatch(getAllOrdersByShop(shopLogin.id))
                                                        .then(Swal.fire(
                                                            'Success!',
                                                            'Status change successful!',
                                                            'success'))
                                                }
                                                fetchData()
                                            }

                                        }}>
                                            {statusOrder && statusOrder.map(status => (
                                                <>
                                                    {status.name == order.status.name && <option value={status.id} selected >{status.name}</option>}
                                                    {status.name != order.status.name && <option value={status.id} >{status.name}</option>}
                                                </>
                                            ))}

                                        </select>
                                    </td>
                                    <td className="align-middle border-top-0">${order.totalAmount}</td>
                                    <td className="text-muted align-middle border-top-0">
                                        <Link to={"/shop-manager/order-detail/" + order.id}>
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

export default ShopOrder;