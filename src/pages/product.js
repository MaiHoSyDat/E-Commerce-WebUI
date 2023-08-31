import React from 'react';
import Navbar from "../components/navbar";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
import NavbarCustomer from "../components/navbarCustomer";
import NavbarEmployee from "../components/navbarEmployee";
import NavbarAdmin from "../components/navbarAdmin";
import NavbarShop from "../components/navbarShop";

const Product = () => {
    return (
        <>
            <NavbarShop></NavbarShop>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Product;