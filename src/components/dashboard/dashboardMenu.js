import React from 'react';

const DashboardMenu = () => {
    return (
        <>
            <nav className="navbar-vertical-nav d-none d-xl-block ">
                <div className="navbar-vertical">
                    <div className="px-4 py-5">
                        <a href="/index" className="navbar-brand">
                            <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
                        </a>
                    </div>
                    <div className="navbar-vertical-content flex-grow-1" data-simplebar="">
                        <ul className="navbar-nav flex-column" id="sideNavbar">
                            <li className="nav-item ">
                                <a className="nav-link  active " href="/dashboard/index">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-house" />
                </span>
                                        <span className="nav-link-text">Dashboard</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item mt-6 mb-3">
                                <span className="nav-label">Store Managements</span>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="/dashboard/products">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-cart" />
                </span>
                                        <span className="nav-link-text">Products</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/dashboard/category">
                                    Category
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link   collapsed "
                                    href="#"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navCategoriesOrders"
                                    aria-expanded="false"
                                    aria-controls="navCategoriesOrders"
                                >
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-bag" />
                </span>
                                        <span className="nav-link-text">Orders</span>
                                    </div>
                                </a>
                                <div
                                    id="navCategoriesOrders"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item ">
                                            <a className="nav-link " href="/dashboard/order">
                                                List
                                            </a>
                                        </li>
                                        {/* Nav item */}
                                        <li className="nav-item ">
                                            <a className="nav-link " href="/dashboard/orderDetail">
                                                Single
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link   collapsed "
                                    href="#"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navCategoriesCategories"
                                    aria-expanded="false"
                                    aria-controls="navCategoriesCategories"
                                >
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-list-task" />
                </span>
                                        <span className="nav-link-text">Shop</span>
                                    </div>
                                </a>
                                <div
                                    id="navCategoriesCategories"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item ">
                                            <a className="nav-link " href="/dashboard/shop">
                                                <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-shop" />
                </span>
                                                    <span className="nav-link-text">Sellers / Vendors</span>
                                                </div>
                                            </a>
                                        </li>
                                        {/* Nav item */}
                                        <li className="nav-item ">
                                            <a className="nav-link " href="/dashboard/shopPending">
                                                Shop Pending
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="/dashboard/employee">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-people" />
                </span>
                                        <span className="nav-link-text">Employees</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="/dashboard/customer">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-people" />
                </span>
                                        <span className="nav-link-text">Customers</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="/dashboard/review">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-star" />
                </span>
                                        <span className="nav-link-text">Reviews</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav
                className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac"
                tabIndex={-1}
                id="offcanvasExample"
            >
                <div className="navbar-vertical">
                    <div className="px-4 py-5 d-flex justify-content-between align-items-center">
                        <a href="../index.html" className="navbar-brand">
                            <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
                        </a>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="navbar-vertical-content flex-grow-1" data-simplebar="">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-item ">
                                <a className="nav-link  active " href="index.html">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-house" />
                </span>
                                        <span>Dashboard</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item mt-6 mb-3">
                                <span className="nav-label">Store Managements</span>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="products.html">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-cart" />
                </span>
                                        <span className="nav-link-text">Products</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="categories.html">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-list-task" />
                </span>
                                        <span className="nav-link-text">Categories</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link   collapsed "
                                    href="#"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navOrders"
                                    aria-expanded="false"
                                    aria-controls="navOrders"
                                >
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-bag" />
                </span>
                                        <span className="nav-link-text">Orders</span>
                                    </div>
                                </a>
                                <div
                                    id="navOrders"
                                    className="collapse "
                                    data-bs-parent="#sideNavbar"
                                >
                                    <ul className="nav flex-column">
                                        <li className="nav-item ">
                                            <a className="nav-link " href="order-list.html">
                                                List
                                            </a>
                                        </li>
                                        {/* Nav item */}
                                        <li className="nav-item ">
                                            <a className="nav-link " href="order-single.html">
                                                Single
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="vendor-grid.html">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-shop" />
                </span>
                                        <span className="nav-link-text">Sellers / Vendors</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="customers.html">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-people" />
                </span>
                                        <span className="nav-link-text">Customers</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="reviews.html">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-star" />
                </span>
                                        <span className="nav-link-text">Reviews</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item mt-6 mb-3">
                                <span className="nav-label">Site Settings</span>{" "}
                                <span className="badge bg-light-info text-dark-info">
              Coming Soon
            </span>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link disabled" href="#!">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-newspaper" />
                </span>
                                        <span className="nav-link-text">Blog</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link disabled" href="#">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-images" />
                </span>
                                        <span className="nav-link-text">Media</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link disabled" href="#!">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-gear" />
                </span>
                                        <span className="nav-link-text">Store Settings</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item mt-6 mb-3">
                                <span className="nav-label">Support</span>{" "}
                                <span className="badge bg-light-info text-dark-info">
              Coming Soon
            </span>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link disabled" href="#!">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-headphones" />
                </span>
                                        <span className="nav-link-text">Support Ticket</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link disabled" href="#">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-question-circle" />
                </span>
                                        <span className="nav-link-text">Help Center</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link disabled" href="#!">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-infinity" />
                </span>
                                        <span className="nav-link-text">How FreshCart Works</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item mt-6 mb-3">
                                <span className="nav-label">Our Apps</span>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link disabled" href="#!">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-apple" />
                </span>
                                        <span className="nav-link-text">Apple Store</span>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link disabled" href="#!">
                                    <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  {" "}
                    <i className="bi bi-google-play" />
                </span>
                                        <span className="nav-link-text">Google Play Store</span>
                                    </div>
                                </a>
                            </li>
                            <li
                                id="navMenuLevel"
                                className="collapse "
                                data-bs-parent="#sideNavbar"
                            >
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link "
                                            href="#"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navMenuLevelSecond2"
                                            aria-expanded="false"
                                            aria-controls="navMenuLevelSecond2"
                                        >
                                            Two Level
                                        </a>
                                        <div
                                            id="navMenuLevelSecond2"
                                            className="collapse"
                                            data-bs-parent="#navMenuLevel"
                                        >
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link " href="#">
                                                        NavItem 1
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link " href="#">
                                                        NavItem 2
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link  collapsed  "
                                            href="#"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navMenuLevelThree2"
                                            aria-expanded="false"
                                            aria-controls="navMenuLevelThree2"
                                        >
                                            Three Level
                                        </a>
                                        <div
                                            id="navMenuLevelThree2"
                                            className="collapse "
                                            data-bs-parent="#navMenuLevel"
                                        >
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link  collapsed "
                                                        href="#"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navMenuLevelThree3"
                                                        aria-expanded="false"
                                                        aria-controls="navMenuLevelThree3"
                                                    >
                                                        NavItem 1
                                                    </a>
                                                    <div
                                                        id="navMenuLevelThree3"
                                                        className="collapse collapse "
                                                        data-bs-parent="#navMenuLevelThree"
                                                    >
                                                        <ul className="nav flex-column">
                                                            <li className="nav-item">
                                                                <a className="nav-link " href="#">
                                                                    NavChild Item 1
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link " href="#">
                                                        Nav Item 2
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default DashboardMenu;