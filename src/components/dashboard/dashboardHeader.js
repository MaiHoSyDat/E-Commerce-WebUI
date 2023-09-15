import React from 'react';
import {Link} from "react-router-dom";

const DashboardHeader = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-glass">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="d-flex align-items-center">
                            <a
                                className="text-inherit d-block d-xl-none me-4"
                                data-bs-toggle="offcanvas"
                                href="#offcanvasExample"
                                role="button"
                                aria-controls="offcanvasExample"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    fill="currentColor"
                                    className="bi bi-text-indent-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </a>
                            <form role="search">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </form>
                        </div>
                        <div>
                            <ul className="list-unstyled d-flex align-items-center mb-0 ms-5 ms-lg-0">
                                <li className="dropdown ms-4">
                                    <a
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-beautiful-admin-roles-glyph-vector-icon-png-image_5291981.jpg"
                                            alt=""
                                            className="avatar avatar-md rounded-circle"
                                        />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end p-0">
                                        <div className="lh-1 px-5 py-4 border-bottom">
                                            <h5 className="mb-1 h6">FreshCart Admin</h5>
                                            <small>{account.email}</small>
                                        </div>
                                        <div className="border-top px-5 py-3">
                                            <Link to={"/signin"}>
                                            <a href="#">Log Out</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default DashboardHeader;