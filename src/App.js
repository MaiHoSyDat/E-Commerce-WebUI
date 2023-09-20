import logo from './logo.svg';
import './App.css';

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import {Route, Routes} from "react-router-dom";
import DashboardIndex from "./outlet/dashboard/dashboardIndex";
import DashboardProduct from "./outlet/dashboard/dashboardProduct";
import DashboardCategory from "./outlet/dashboard/dashboardCategory";
import DashboardOrder from "./outlet/dashboard/dashboardOrder";
import DashboardOrderDetail from "./outlet/dashboard/dashboardOrderDetail";
import DashboardShop from "./outlet/dashboard/dashboardShop";
import DashboardEmployee from "./outlet/dashboard/dashboardEmployee";
import DashboardCustomer from "./outlet/dashboard/dashboardCustomer";
import DashboardReview from "./outlet/dashboard/dashboardReview";
import ShopList from "./outlet/shop/shopList";
import ShopSingleLogin from "./outlet/shop/shopSingleLogin";
import Shop from "./pages/shop";
import Product from "./pages/product";
import ProductFilter from "./outlet/product/productFilter";
import ProductDetail from "./outlet/product/productDetail";
import ProductWishlist from "./outlet/product/productWishlist";
import ProductCart from "./outlet/product/productCart";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import ProductCheckout from "./outlet/product/productCheckout";
import About from "./pages/about";
import Error404 from "./pages/error404";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgotPassword";
import Customer from "./pages/customer";
import CustomerOrder from "./outlet/customer/customerOrder";
import CustomerSetting from "./outlet/customer/customerSetting";
import CustomerAddress from "./outlet/customer/customerAddress";
import CustomerPayment from "./outlet/customer/customerPayment";
import CustomerNotification from "./outlet/customer/customerNotification";
import Signin from "./pages/signin";
import ShopSingle from "./outlet/shop/shopSingle";
import ShopSetting from "./outlet/shop/shopSetting";
import ShopOrder from "./outlet/shop/shopOrder";
import ShopAddress from "./outlet/shop/shopAddress";
import ShopNotification from "./outlet/shop/shopNotification";
import ShopManager from "./pages/shopManager";
import CustomerOrderDetail from "./outlet/customer/customerOrderDetail";
import ShopOrderDetail from "./outlet/shop/shopOrderDetail";
import ShopDiscountCode from "./outlet/shop/shopDiscountCode";
import ShopRevenue from "./outlet/shop/shopRevenue";
import DashboardShopPending from "./outlet/dashboard/dashboardShopPending";
import Employee from "./pages/employee";
import EmployeeSetting from "./outlet/employee/employeeSetting";
import DashboardSalary from "./outlet/dashboard/dashboardSalary";
import ShopSingleSearch from "./components/shop/shopSingleSearch";
import ShopSingleView from "./components/shop/shopSingleView";
import ShopSingleFilter from "./components/shop/shopSingleFilter";
import ShopSingleFilterView from "./components/shop/shopSingleFilterView";
import React from "react";
import ShopSingleChat from "./components/shop/shopSingleChat";
import ShopMessage from "./outlet/shop/shopMessage";
import ShopSingleDetail from "./components/shop/shopSingleDetail";
import ShopSingleDetailView from "./components/shop/shopSingleDetailView";
import {useSelector} from "react-redux";

function App() {
    const account = useSelector(state => {
        return state.account.account;
    })
    console.log(account)
    // xoá account khi tắt trang
    // window.addEventListener('beforeunload', () => {
    //     localStorage.setItem('account', null);
    //     localStorage.setItem('token', null);
    // });
  return (
    <>
        <Routes>
            {account && account.role.id == 1 &&
                <>
                    <Route path="dashboard" element={<Dashboard/>}>
                        <Route path="" element={<DashboardIndex/>}/>
                        <Route path="index" element={<DashboardIndex/>}/>
                        <Route path="products" element={<DashboardProduct/>}/>
                        <Route path="category" element={<DashboardCategory/>}/>
                        <Route path="shopPending" element={<DashboardShopPending/>}/>
                        <Route path="order" element={<DashboardOrder/>}/>
                        <Route path="orderDetail" element={<DashboardOrderDetail/>}/>
                        <Route path="shop" element={<DashboardShop/>}/>
                        <Route path="employee" element={<DashboardEmployee/>}/>
                        <Route path="customer" element={<DashboardCustomer/>}/>
                        <Route path="review" element={<DashboardReview/>}/>
                        <Route path="salary" element={<DashboardSalary/>}/>
                    </Route>
                </>
            }

            <Route path="shop" element={<Shop/>}>
                <Route path="list" element={<ShopList/>}/>
                <Route path="" element={<ShopList/>}/>
                {account && account.role.id == 3 && <>
                    <Route path="single" element={<ShopSingleLogin/>}/>
                </>}
                {account && account.role.id == 3 && <>
                    <Route path="single/detail" element={<ShopSetting/>}/>
                </>}
                <Route path="single/:idShop" element={<ShopSingle/>}/>
                {account && account.role.id == 2 && <>
                    <Route path="single/:idShop/chat" element={<ShopSingleChat/>}/>
                </>}
                <Route path="single/:idShop/detail" element={<ShopSingleDetailView/>}/>

            </Route>
            <Route path="product" element={<Product/>}>
                <Route path="filter" element={<ProductFilter/>}/>
                <Route path="detail/:productId" element={<ProductDetail/>}/>
                <Route path="" element={<ProductFilter/>}/>
                {account && account.role.id == 2 && <>
                    <Route path="wishlist" element={<ProductWishlist/>}/>
                </>}
            </Route>


            {account && account.role.id == 2 && <>
                <Route path="cart" element={<Cart/>}>
                    <Route path="" element={<ProductCart/>}/>
                </Route>
            </>}
            {account && account.role.id == 2 && <>
                <Route path="checkout" element={<Checkout/>}>
                    <Route path="" element={<ProductCheckout/>}/>
                </Route>
            </>}

            <Route path="" element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="index" element={<Home/>}></Route>
            <Route path="error" element={<Error404/>}></Route>
            <Route path="signin" element={<Signin/>}></Route>
            <Route path="signup" element={<Signup/>}></Route>
            <Route path="forgot-password" element={<ForgotPassword/>}></Route>

            {account && account.role.id == 2 && <>
                <Route path="customer" element={<Customer/>}>
                    <Route path="order" element={<CustomerOrder/>}/>
                    <Route path="order-detail/:idOrder" element={<CustomerOrderDetail/>}/>
                    <Route path="setting" element={<CustomerSetting/>}/>
                    <Route path="address" element={<CustomerAddress/>}/>
                    <Route path="payment" element={<CustomerPayment/>}/>
                    <Route path="notification" element={<CustomerNotification/>}/>
                </Route>
            </>}

            {account && account.role.id == 3 && <>
                <Route path="shop-manager" element={<ShopManager/>}>
                    <Route path="order" element={<ShopOrder/>}/>
                    <Route path="order-detail/:idOrder" element={<ShopOrderDetail/>}/>
                    <Route path="discount-code" element={<ShopDiscountCode/>}/>
                    <Route path="revenue" element={<ShopRevenue/>}/>
                    <Route path="address" element={<ShopAddress/>}/>
                    <Route path="notification" element={<ShopNotification/>}/>
                    <Route path="message" element={<ShopMessage/>}/>
                    <Route path="setting" element={<ShopSetting/>}/>

                </Route>
            </>}

            {account && account.role.id == 4 && <>
                <Route path="employee" element={<Employee/>}>
                    <Route path="setting" element={<EmployeeSetting/>}/>
                </Route>
            </>}

            <Route path="*" element={<Error404/>}/>
        </Routes>

    </>
  );
}

export default App;
