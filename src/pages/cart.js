import React from 'react';
import Navbar from "../components/navbar";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
import NavbarCustomer from "../components/navbarCustomer";
import NavbarAdmin from "../components/navbarAdmin";
import NavbarShop from "../components/navbarShop";
import NavbarEmployee from "../components/navbarEmployee";

const Cart = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    return (
        <>
            {account === null && <Navbar></Navbar>}
            {account && account.role.id == 2 && <NavbarCustomer></NavbarCustomer>}
            {account && account.role.id == 1 && <NavbarAdmin></NavbarAdmin>}
            {account && account.role.id == 3 && <NavbarShop></NavbarShop>}
            {account && account.role.id == 4 && <NavbarEmployee></NavbarEmployee>}
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Cart;