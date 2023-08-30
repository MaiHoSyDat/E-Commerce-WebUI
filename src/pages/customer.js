import React from 'react';
import Navbar from "../components/navbar";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
import CustomerMenu from "../components/customer/customerMenu";

const Customer = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                {/* section */}
                <section>
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            {/* col */}
                            <div className="col-12">
                                <div className="d-flex justify-content-between align-items-center d-md-none py-4">
                                    {/* heading */}
                                    <h3 className="fs-5 mb-0">Account Setting</h3>
                                    {/* button */}
                                    <button
                                        className="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3 "
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasAccount"
                                        aria-controls="offcanvasAccount"
                                    >
                                        <i className="bi bi-text-indent-left fs-3" />
                                    </button>
                                </div>
                            </div>
                            {/* col */}
                            <CustomerMenu></CustomerMenu>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Customer;