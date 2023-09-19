import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCustomerByAccountLogin} from "../../service/customerService";
import {
    getAllNotificationsByReceiverCustomer,
    getAllNotificationsByReceiverShop
} from "../../service/notificationService";
import {getShopByAccountLogin} from "../../service/shopService";

const ShopNotification = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })
    const notificationByShop = useSelector(state => {
        console.log(state)
        return state.notification.notificationByShop;
    })
    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id));
    },[])
    useEffect(() => {
        dispatch(getAllNotificationsByReceiverShop(shopLogin.id));
    },[shopLogin])
    //phan trang
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const totalProducts = notificationByShop.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Tạo danh sách sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = notificationByShop.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        window.scrollTo(0, 0);
        setCurrentPage(page);
    };
    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <div className="py-6 p-md-6 p-lg-10">
                    <h2 className="mb-6">Notifications</h2>
                    <div className="table-responsive-xxl border-0">
                        {/* Table */}
                        <table className="table mb-0 text-nowrap table-centered ">
                            {/* Table Head */}
                            <thead className="bg-light">
                            <tr>
                                <th>&nbsp;</th>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Sender</th>
                                <th>Receiver</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentProducts.length && currentProducts.map(notification => (
                                <tr>
                                    <td className="align-middle border-top-0 w-0">
                                        <i className="feather-icon icon-bell" style={{ color: "blue" }} />
                                    </td>
                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">
                                            {notification.id}
                                        </a>
                                    </td>
                                    <td className="align-middle border-top-0">{notification.date}</td>
                                    <td className="align-middle border-top-0">
                                        <span className="badge bg-success">{notification.name}</span>
                                    </td>
                                    <td className="align-middle border-top-0">{notification.context}</td>
                                    <td className="align-middle border-top-0">{notification.sender.username}</td>
                                    <td className="align-middle border-top-0">{account.name}</td>

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

export default ShopNotification;