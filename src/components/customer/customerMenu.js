import React from 'react';

const CustomerMenu = () => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-12 border-end  d-none d-md-block">
                <div className="pt-10 pe-lg-10">
                    {/* nav */}
                    <ul className="nav flex-column nav-pills nav-pills-dark">
                        {/* nav item */}
                        <li className="nav-item">
                            {/* nav link */}
                            <a className="nav-link " aria-current="page" href="account-orders.html">
                                <i className="feather-icon icon-shopping-bag me-2" />
                                Your Orders
                            </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link " href="account-settings.html">
                                <i className="feather-icon icon-settings me-2" />
                                Settings
                            </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link active" href="account-address.html">
                                <i className="feather-icon icon-map-pin me-2" />
                                Address
                            </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link" href="account-payment-method.html">
                                <i className="feather-icon icon-credit-card me-2" />
                                Payment Method
                            </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link" href="account-notification.html">
                                <i className="feather-icon icon-bell me-2" />
                                Notification
                            </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <hr />
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link " href="../index.html">
                                <i className="feather-icon icon-log-out me-2" />
                                Log out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default CustomerMenu;