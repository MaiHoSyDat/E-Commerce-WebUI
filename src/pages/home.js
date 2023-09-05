import Navbar from "../components/navbar";
import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";
import NavbarAdmin from "../components/navbarAdmin";
import NavbarCustomer from "../components/navbarCustomer";
import NavbarShop from "../components/navbarShop";
import Index from "../outlet/index";

const Home = () => {
    return(
       <>
           <NavbarShop></NavbarShop>
           <Index></Index>
           <Footer></Footer>

       </>
    )
}
export default Home;