import React from 'react';

const CustomerPayment = () => {
    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <div className="py-6 p-md-6 p-lg-10">
                    {/* heading */}
                    <div className="d-flex justify-content-between mb-6 align-items-center">
                        <h2 className="mb-0">Payment Methods</h2>
                        <a
                            href="#"
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#paymentModal"
                        >
                            Add Payment{" "}
                        </a>
                    </div>
                    <ul className="list-group list-group-flush">
                        {/* List group item */}
                        <li className="list-group-item py-5 px-0">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    {/* img */}
                                    <img src="../assets/images/svg-graphics/visa.svg" alt="" />
                                    {/* text */}
                                    <div className="ms-4">
                                        <h5 className="mb-0 h6 h6">**** 1234</h5>
                                        <p className="mb-0 small">Expires in 10/2023</p>
                                    </div>
                                </div>
                                <div>
                                    {/* button */}
                                    <a href="#" className="btn btn-outline-gray-400 disabled btn-sm">
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* List group item */}
                        <li className="list-group-item px-0 py-5">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    {/* img */}
                                    <img
                                        src="../assets/images/svg-graphics/mastercard.svg"
                                        alt=""
                                        className="me-3"
                                    />
                                    <div>
                                        <h5 className="mb-0 h6">Mastercard ending in 1234</h5>
                                        <p className="mb-0 small">Expires in 03/2026</p>
                                    </div>
                                </div>
                                <div>
                                    {/* button*/}
                                    <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* List group item */}
                        <li className="list-group-item px-0 py-5">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    {/* img */}
                                    <img
                                        src="../assets/images/svg-graphics/discover.svg"
                                        alt=""
                                        className="me-3"
                                    />
                                    <div>
                                        {/* text */}
                                        <h5 className="mb-0 h6">Discover ending in 1234</h5>
                                        <p className="mb-0 small">
                                            Expires in 07/2020{" "}
                                            <span className="badge bg-warning text-dark">
                  {" "}
                                                This card is expired.
                </span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    {/* btn */}
                                    <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* List group item */}
                        <li className="list-group-item px-0 py-5">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    {/* img */}
                                    <img
                                        src="../assets/images/svg-graphics/americanexpress.svg"
                                        alt=""
                                        className="me-3"
                                    />
                                    {/* text */}
                                    <div>
                                        <h5 className="mb-0 h6">American Express ending in 1234</h5>
                                        <p className="mb-0 small">Expires in 12/2021</p>
                                    </div>
                                </div>
                                <div>
                                    {/* btn */}
                                    <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* List group item */}
                        <li className="list-group-item px-0 py-5 border-bottom">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    {/* img */}
                                    <img
                                        src="../assets/images/svg-graphics/paypal.svg"
                                        alt=""
                                        className="me-3"
                                    />
                                    <div>
                                        {/* text */}
                                        <h5 className="mb-0 h6">Paypal Express ending in 1234</h5>
                                        <p className="mb-0 small">Expires in 10/2021</p>
                                    </div>
                                </div>
                                <div>
                                    {/* btn */}
                                    <a href="#" className="btn btn-outline-gray-400 text-muted btn-sm">
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default CustomerPayment;