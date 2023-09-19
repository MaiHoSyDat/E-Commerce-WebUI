import React from 'react';
import Navbar from "../components/navbar";
import NavbarCustomer from "../components/navbarCustomer";
import NavbarAdmin from "../components/navbarAdmin";
import NavbarShop from "../components/navbarShop";
import NavbarEmployee from "../components/navbarEmployee";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
import CustomerMenu from "../components/customer/customerMenu";
import EmployeeMenu from "../components/employee/employeeMenu";

const Employee = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    return (
        <>
            {account === null && <Navbar></Navbar>}
            {account && account.role.name === "ROLE_CUSTOMER" && <NavbarCustomer></NavbarCustomer>}
            {account && account.role.name === "ROLE_ADMIN" && <NavbarAdmin></NavbarAdmin>}
            {account && account.role.name === "ROLE_SHOP" && <NavbarShop></NavbarShop>}
            {account && account.role.name === "ROLE_EMPLOYEE" && <NavbarEmployee></NavbarEmployee>}
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
                                    <h3 className="fs-5 mb-0">Employee Setting</h3>
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
                            <EmployeeMenu></EmployeeMenu>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Employee;