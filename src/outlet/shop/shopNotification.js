import React, {useEffect} from 'react';
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
                            {notificationByShop.length && notificationByShop.map(notification => (
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
            </div>

        </>
    );
};

export default ShopNotification;