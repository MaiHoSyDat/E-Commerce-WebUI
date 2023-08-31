import Navbar from "../components/navbar";
import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
import NavbarCustomer from "../components/navbarCustomer";
import NavbarAdmin from "../components/navbarAdmin";
import NavbarShop from "../components/navbarShop";

const Home = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    console.log(account)
    return(
        <>
            {account.role.name == "ROLE_CUSTOMER" && <NavbarCustomer></NavbarCustomer>}
            {account.role.name == "ROLE_ADMIN" && <NavbarAdmin></NavbarAdmin>}
            {account.role.name == "ROLE_SHOP" && <NavbarShop></NavbarShop>}
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    )
}
export default Home;