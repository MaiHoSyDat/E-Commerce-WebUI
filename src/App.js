import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import {Route, Routes} from "react-router-dom";
import DashboardIndex from "./outlet/dashboard/dashboardIndex";
import DashboardProduct from "./outlet/dashboard/dashboardProduct";
import DashboardCategory from "./outlet/dashboard/dashboardCategory";
import DashboardCategoryDetail from "./outlet/dashboard/dashboardCategoryDetail";
import DashboardOrder from "./outlet/dashboard/dashboardOrder";
import DashboardOrderDetail from "./outlet/dashboard/dashboardOrderDetail";
import DashboardShop from "./outlet/dashboard/dashboardShop";
import DashboardEmployee from "./outlet/dashboard/dashboardEmployee";
import DashboardCustomer from "./outlet/dashboard/dashboardCustomer";
import DashboardReview from "./outlet/dashboard/dashboardReview";
import ShopList from "./outlet/shop/shopList";
import ShopSingle from "./outlet/shop/shopSingle";
import Shop from "./pages/shop";
import Product from "./pages/product";
import ProductFilter from "./outlet/product/productFilter";
import ProductDetail from "./outlet/product/productDetail";
import ProductWishlist from "./outlet/product/productWishlist";
import ProductCart from "./outlet/product/productCart";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import ProductCheckout from "./outlet/product/productCheckout";
import ShopInfomation from "./outlet/shop/shopInfomation";
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
import SignIn from "./pages/signin";

function App() {
  return (
    <>
        <Routes>
            <Route path="dashboard" element={<Dashboard/>}>
                <Route path="index" element={<DashboardIndex/>}/>
                <Route path="products" element={<DashboardProduct/>}/>
                <Route path="category" element={<DashboardCategory/>}/>
                <Route path="categoryDetail" element={<DashboardCategoryDetail/>}/>
                <Route path="order" element={<DashboardOrder/>}/>
                <Route path="orderDetail" element={<DashboardOrderDetail/>}/>
                <Route path="shop" element={<DashboardShop/>}/>
                <Route path="employee" element={<DashboardEmployee/>}/>
                <Route path="customer" element={<DashboardCustomer/>}/>
                <Route path="review" element={<DashboardReview/>}/>
            </Route>
            <Route path="shop" element={<Shop/>}>
                <Route path="list" element={<ShopList/>}/>
                <Route path="single" element={<ShopSingle/>}/>
                <Route path="setting" element={<ShopInfomation/>}/>
            </Route>
            <Route path="product" element={<Product/>}>
                <Route path="filter" element={<ProductFilter/>}/>
                <Route path="detail" element={<ProductDetail/>}/>
                <Route path="wishlist" element={<ProductWishlist/>}/>
            </Route>
            <Route path="cart" element={<Cart/>}>
                <Route path="" element={<ProductCart/>}/>
            </Route>
            <Route path="checkout" element={<Checkout/>}>
                <Route path="" element={<ProductCheckout/>}/>
            </Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="index" element={<Home/>}></Route>
            <Route path="error" element={<Error404/>}></Route>
            <Route path="signin" element={<SignIn/>}></Route>
            <Route path="signup" element={<Signup/>}></Route>
            <Route path="forgot-password" element={<ForgotPassword/>}></Route>
            <Route path="account" element={<Customer/>}>
                <Route path="order" element={<CustomerOrder/>}/>
                <Route path="setting" element={<CustomerSetting/>}/>
                <Route path="address" element={<CustomerAddress/>}/>
                <Route path="payment" element={<CustomerPayment/>}/>
                <Route path="notification" element={<CustomerNotification/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
