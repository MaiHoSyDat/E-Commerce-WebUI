import React from 'react';
import Navbar from "../components/navbar";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";

const About = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                {/* section */}
                <section className="mt-lg-14 mt-8">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            {/* col */}
                            <div className="offset-lg-1 col-lg-10 col-12">
                                <div className="row align-items-center mb-14">
                                    <div className="col-md-6">
                                        {/* text */}
                                        <div className="ms-xxl-14 me-xxl-15 mb-8 mb-md-0 text-center text-md-start">
                                            <h1 className="mb-6">The Future of Grocery Delivery:</h1>
                                            <p className="mb-0 lead">
                                                By powering the future of grocery with our retail partners, we
                                                give everyone access to the food they love and more time to
                                                enjoy it together.
                                            </p>
                                        </div>
                                    </div>
                                    {/* col */}
                                    <div className="col-md-6">
                                        <div className=" me-6">
                                            {/* img */}
                                            <img
                                                src="../assets/images/about/about-img.jpg"
                                                alt=""
                                                className="img-fluid rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* row */}
                                <div className="row mb-12">
                                    <div className="col-12">
                                        <div className="mb-8">
                                            {/* heading */}
                                            <h2>Ready to get started?</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        {/* card */}
                                        <div className="card bg-light mb-6 border-0">
                                            {/* card body */}
                                            <div className="card-body p-8">
                                                <div className="mb-4">
                                                    {/* img */}
                                                    <img
                                                        src="../assets/images/about/about-icons-1.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <h4>Grow my business with Freshcart</h4>
                                                <p>
                                                    Duis placerat, urna ut dictum lobortis, erat libero feugiat
                                                    nulla, ullamcorper fermentum lectus dolor ut tortor.{" "}
                                                </p>
                                                {/* btn */}
                                                <a href="#" className="btn btn-dark mt-2">
                                                    FreshCart Platform
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        {/* card */}
                                        <div className="card bg-light mb-6 border-0">
                                            {/* card body */}
                                            <div className="card-body p-8">
                                                <div className="mb-4">
                                                    {/* img */}
                                                    <img
                                                        src="../assets/images/about/about-icons-2.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <h4>Advertise my brand on Freshcart</h4>
                                                <p>
                                                    Duis placerat, urna ut dictum lobortis, erat libero feugiat
                                                    nulla, ullamcorper fermentum lectus dolor ut tortor.{" "}
                                                </p>
                                                {/* btn */}
                                                <a href="#" className="btn btn-dark mt-2">
                                                    FreshCart ads
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        {/* card */}
                                        <div className="card bg-light mb-6 border-0">
                                            {/* card body */}
                                            <div className="card-body p-8">
                                                <div className="mb-4">
                                                    {/* img */}
                                                    <img
                                                        src="../assets/images/about/about-icons-3.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <h4>Learn more about Freshcart</h4>
                                                <p>
                                                    Vivamus non risus id sapien egestas tempus id sed lla mus
                                                    justo metus, suscipit non hendrerit.{" "}
                                                </p>
                                                {/* btn */}
                                                <a href="#" className="btn btn-dark mt-2">
                                                    Learn More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        {/* text */}
                                        <p>
                                            For assistance using Freshcart services, please visit our{" "}
                                            <a href="#">Help Center</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section */}
                <section className="bg-success py-14">
                    <div className="container">
                        <div className="row">
                            {/* col */}
                            <div className="offset-lg-1 col-lg-10">
                                <div className="row">
                                    {/* col */}
                                    <div className="col-xl-4 col-md-6">
                                        <div className="text-white me-8 mb-12">
                                            {/* text */}
                                            <h2 className="text-white mb-4 ">
                                                Trusted by retailers. Loved by customers.
                                            </h2>
                                            <p>
                                                We give everyone access to the food they love and more time to
                                                enjoy it together.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row row-cols-2 row-cols-md-4">
                                        {/* col */}
                                        <div className="col mb-4 mb-md-0">
                                            <h3 className="display-5 fw-bold text-white mb-0">500k</h3>
                                            <span className="fs-6 text-white">Shoppers</span>
                                        </div>
                                        {/* col */}
                                        <div className="col mb-4 mb-md-0">
                                            <h3 className="display-5 fw-bold text-white mb-0">4,500+</h3>
                                            <span className="fs-6 text-white">Cities</span>
                                        </div>
                                        {/* col */}
                                        <div className="col mb-4 mb-md-0">
                                            <h3 className="display-5 fw-bold text-white mb-0">40k+</h3>
                                            <span className="fs-6 text-white">Stores</span>
                                        </div>
                                        {/* col */}
                                        <div className="col mb-4 mb-md-0">
                                            <h3 className="display-5 fw-bold text-white mb-0"> 650+</h3>
                                            <span className="fs-6 text-white">Retail Brands</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main>

            <Footer></Footer>
        </>
    );
};

export default About;