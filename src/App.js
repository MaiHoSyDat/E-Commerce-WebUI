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

function App() {
  return (
    <>
        {/*<Navbar></Navbar>*/}
        {/*<main>*/}
        {/*    <Slider></Slider>*/}
        {/*</main>*/}
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

            </Route>

        </Routes>

    </>
  );
}

export default App;
