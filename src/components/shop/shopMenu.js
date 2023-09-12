import React from 'react';
import {Link} from "react-router-dom";

const ShopMenu = () => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-12 border-end  d-none d-md-block">
                <div className="pt-10 pe-lg-10">
                    {/* nav */}
                    <ul className="nav flex-column nav-pills nav-pills-dark">
                        {/* nav item */}
                        <li className="nav-item">
                            {/* nav link */}
                            <Link to={"/shop-manager/order"}>
                                <a className="nav-link " aria-current="page" href="">
                                    <i className="feather-icon icon-shopping-bag me-2" />
                                    Orders
                                </a>
                            </Link>

                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <Link to={"/shop/setting"}>
                                <a className="nav-link " href="">
                                    <i className="feather-icon icon-settings me-2" />
                                    Settings
                                </a>
                            </Link>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <Link to={"/shop-manager/address"}>
                                <a className="nav-link " href="">
                                    <i className="feather-icon icon-map-pin me-2" />
                                    Address
                                </a>
                            </Link>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <Link to={"/shop-manager/notification"}>
                                <a className="nav-link" href="">
                                    <i className="feather-icon icon-bell me-2" />
                                    Notification
                                </a>
                            </Link>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <hr />
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <Link to={"/index"}>
                                <a className="nav-link " href="">
                                    <i className="feather-icon icon-log-out me-2" />
                                    Log out
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default ShopMenu;