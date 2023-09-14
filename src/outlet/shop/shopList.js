import React, {useEffect} from 'react';
import Navbar from "../../components/navbar";
import {useDispatch, useSelector} from "react-redux";
import {getAllShops} from "../../service/shopService";
import {Link} from "react-router-dom";

const ShopList = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const allShops = useSelector(state => {
        console.log(state)
        return state.shop.allShops;
    })
    useEffect(()=> {
        dispatch(getAllShops())
    },[])
    return (
        <>
            <main>
                <section className="mt-8 ">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row ">
                            <div className="col-12 ">
                                {/* heading */}
                                <div className="bg-light d-flex justify-content-between ps-md-10 ps-6 rounded">
                                    <div className="d-flex align-items-center">
                                        <h1 className="mb-0 fw-bold">Stores</h1>
                                    </div>
                                    <div className="py-6">
                                        {/* img */}
                                        {/* img */}
                                        <img
                                            src="../assets/images/svg-graphics/store-graphics.svg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section */}
                <section className="mt-8 mb-lg-14 mb-8">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            {/* col */}
                            <div className="col-12">
                                <div className="mb-3">
                                    {/* text */}
                                    <h6>
                                        We have <span className="text-primary">{allShops.length}</span> vendors now
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4 g-lg-4">
                            {allShops && allShops.map(shop => (
                                <div className="col">
                                    {/* card */}
                                    <div className="card p-6 card-product">
                                        <div>
                                            {" "}
                                            {/* img */}
                                            <img
                                                src={shop.logo}
                                                alt=""
                                                className="rounded-circle icon-shape icon-xl"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            {/* content */}
                                            <h2 className="mb-1 h5">
                                                <Link to={"/shop/single/"+shop.id}>
                                                <a href="" className="text-inherit">
                                                    {shop.name}
                                                </a>
                                                </Link>
                                            </h2>
                                            <div className="small text-muted">
                                                <span className="me-2">Organic </span>
                                                <span className="me-2">Groceries</span>
                                                <span>Butcher Shop</span>
                                            </div>
                                            <div className="py-3">
                                                <ul className="list-unstyled mb-0 small">
                                                    <li>Delivery</li>
                                                    <li>Pickup available</li>
                                                </ul>
                                            </div>
                                            <div>
                                                {/* badge */}
                                                <div className="badge text-bg-light border">7.5 mi away</div>
                                                {/* badge */}
                                                <div className="badge text-bg-light border">
                                                    In-store prices
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </section>
            </main>

        </>
    );
};

export default ShopList;