import React, {useEffect} from 'react';
import Navbar from "../components/navbar";
import {Outlet, useNavigate} from "react-router-dom";
import Footer from "../components/footer";
import NavbarCustomer from "../components/navbarCustomer";
import NavbarAdmin from "../components/navbarAdmin";
import NavbarShop from "../components/navbarShop";
import NavbarEmployee from "../components/navbarEmployee";

const Product = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    const navigate = useNavigate();
    return (
        <>
            {account === null && <Navbar></Navbar>}
            {account && account.role.name === "ROLE_CUSTOMER" && <NavbarCustomer></NavbarCustomer>}
            {account && account.role.name === "ROLE_ADMIN" && <NavbarAdmin></NavbarAdmin>}
            {account && account.role.name === "ROLE_SHOP" && <NavbarShop></NavbarShop>}
            {account && account.role.name === "ROLE_EMPLOYEE" && <NavbarEmployee></NavbarEmployee>}
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Product;