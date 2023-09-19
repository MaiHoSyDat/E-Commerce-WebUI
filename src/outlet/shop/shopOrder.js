import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteOrder, getAllOrdersByShop, updateOrder} from "../../service/orderService";
import {getShopByAccountLogin} from "../../service/shopService";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {getAllStatusOrder} from "../../service/statusService";
import {addNotification} from "../../service/notificationService";

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
    //phan trang
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const totalProducts = ordersByShop.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Tạo danh sách sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = ordersByShop.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        window.scrollTo(0, 0);
        setCurrentPage(page);
    };
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
                                        <select className="form-select" aria-label="Default select example" id={"statusOrder" + order.id} onClick={() => {
                                            //change status
                                            let status = JSON.parse(document.getElementById("statusOrder" + order.id).value);
                                            if (status.id != order.status.id) {
                                                let newOrder = {...order, status:{id: status.id}}
                                                //notification
                                                let name = "Order";
                                                let context = "Status change to " + status.name;
                                                let sender = shopLogin.account;
                                                let receiver = order.user.account;
                                                let notification = {name: name, context: context,
                                                    sender: sender, receiver: receiver};
                                                const fetchData = async () => {
                                                    await dispatch(addNotification(notification));
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
                                                    {status.name == order.status.name && <option value={JSON.stringify(status)} selected >{status.name}</option>}
                                                    {status.name != order.status.name && <option value={JSON.stringify(status)} >{status.name}</option>}
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

export default ShopOrder;