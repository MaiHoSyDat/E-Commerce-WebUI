import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {getOrderById} from "../../service/orderService";
import {getAllOrderDetailsByOrder} from "../../service/orderDetailService";

const ShopOrderDetail = () => {
    const dispatch = useDispatch();
    const {idOrder} = useParams();
    const order = useSelector(state => {
        console.log(state.order.order)
        return state.order.order;
    })
    const orderDetailsByOrder = useSelector(state => {
        return state.orderDetail.orderDetailsByOrder;
    })

    useEffect(() => {
        dispatch(getOrderById(idOrder));
        dispatch(getAllOrderDetailsByOrder(idOrder));
    },[])
    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <div className="py-6 p-md-6 p-lg-10">
                    {/* heading */}
                    <div className="row">
                        <div className="col-6"><h2 className="mb-6">Orders Detail </h2></div>
                        <div className="col-6">
                            <Link to={"/shop-manager/order"}>
                                <button type="button" className="btn btn-success">Back to Orders</button>
                            </Link>
                        </div>
                    </div>
                    <h4 className="mb-6">ID : {order.id}</h4>
                    <div className="table-responsive-xxl border-0">
                        {/* Table */}
                        {order && <table className="table mb-0 text-nowrap table-centered ">
                            {/* Table Head */}
                            <thead className="bg-light">
                            {order.shop && <tr>
                                <th>{order.shop.name}</th>
                                <td className="align-middle border-top-0 w-0">
                                    <a href="#"> <img src={order.shop.logo} alt="Ecommerce" className="icon-shape icon-xl"/>
                                    </a>

                                </td>

                            </tr>}
                            </thead>
                            <tbody>
                            <tr>
                                <th>Customer : </th>
                                {order.user && <td className="align-middle border-top-0" >{order.user.account.name}</td>}
                            </tr>
                            <tr>
                                <th>Total Amount : </th>
                                <td className="align-middle border-top-0">${order.totalAmount}</td>
                            </tr>
                            <tr>
                                <th>Code : </th>
                                {order.code && <td className="align-middle border-top-0">{order.code.name}</td>}
                            </tr>
                            <tr>
                                <th>Total Amount : </th>
                                {!order.code && <td className="align-middle border-top-0">${order.totalAmount}</td>}
                                {order.code && <td className="align-middle border-top-0">${order.totalAmount * (1 - order.code.percent)}</td>}
                            </tr>
                            </tbody>
                        </table>}
                    </div>
                    <tr>
                        <th>Receiver : </th>
                        <td className="align-middle border-top-0">{order.fullName} - </td>
                        <td className="align-middle border-top-0">{order.phone} - </td>
                        <td className="align-middle border-top-0">{order.address}</td>
                    </tr>
                    <br/>
                    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <h2 className="mb-6">List Products</h2>
                    <div className="table-responsive-xxl border-0">
                        {/* Table */}
                        <table className="table mb-0 text-nowrap table-centered ">
                            {/* Table Head */}
                            <thead className="bg-light">
                            <tr>
                                <th>&nbsp;</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orderDetailsByOrder && orderDetailsByOrder.map(orderDetail => (
                                <tr>
                                    <td className="align-middle border-top-0 w-0">
                                        <a href="#"> <img src={orderDetail.product.thumbnail}
                                                          alt="Ecommerce" className="icon-shape icon-xl"/>
                                        </a>

                                    </td>
                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">
                                            {orderDetail.product.id}
                                        </a>
                                    </td>
                                    <td className="align-middle border-top-0">{orderDetail.product.name}</td>
                                    <td className="align-middle border-top-0">
                                        <span className="badge bg-success">{orderDetail.product.category.name}</span>
                                    </td>
                                    <td className="align-middle border-top-0">${orderDetail.product.price}</td>
                                    <td className="align-middle border-top-0">{orderDetail.quantity}</td>
                                    <td className="align-middle border-top-0">${orderDetail.product.price * orderDetail.quantity}</td>
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

export default ShopOrderDetail;