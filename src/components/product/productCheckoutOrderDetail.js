import React from 'react';

const ProductCheckoutOrderDetail = () => {
    return (
        <>
            <div className="col-12 col-md-12 offset-lg-1 col-lg-4">
                <div className="mt-4 mt-lg-0">
                    <div className="card shadow-sm">
                        <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
                        <ul className="list-group list-group-flush">
                            {/* list group item */}
                            <li className="list-group-item px-4 py-3">
                                <div className="row align-items-center">
                                    <div className="col-2 col-md-2">
                                        <img
                                            src="../assets/images/products/product-img-1.jpg"
                                            alt="Ecommerce"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-5 col-md-5">
                                        <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                                        <span>
                <small className="text-muted">.98 / lb</small>
              </span>
                                    </div>
                                    <div className="col-2 col-md-2 text-center text-muted">
                                        <span>1</span>
                                    </div>
                                    <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                        <span className="fw-bold">$5.00</span>
                                    </div>
                                </div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item px-4 py-3">
                                <div className="row align-items-center">
                                    <div className="col-2 col-md-2">
                                        <img
                                            src="../assets/images/products/product-img-2.jpg"
                                            alt="Ecommerce"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-5 col-md-5">
                                        <h6 className="mb-0">NutriChoice Digestive</h6>
                                        <span>
                <small className="text-muted">250g</small>
              </span>
                                    </div>
                                    <div className="col-2 col-md-2 text-center text-muted">
                                        <span>1</span>
                                    </div>
                                    <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                        <span className="fw-bold">$20.00</span>
                                        <div className="text-decoration-line-through text-muted small">
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item px-4 py-3">
                                <div className="row align-items-center">
                                    <div className="col-2 col-md-2">
                                        <img
                                            src="../assets/images/products/product-img-3.jpg"
                                            alt="Ecommerce"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-5 col-md-5">
                                        <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                                        <span>
                <small className="text-muted">1 kg</small>
              </span>
                                    </div>
                                    <div className="col-2 col-md-2 text-center text-muted">
                                        <span>1</span>
                                    </div>
                                    <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">
                                            $20.00
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item px-4 py-3">
                                <div className="row align-items-center">
                                    <div className="col-2 col-md-2">
                                        <img
                                            src="../assets/images/products/product-img-4.jpg"
                                            alt="Ecommerce"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-5 col-md-5">
                                        <h6 className="mb-0">Onion Flavour Potato</h6>
                                        <span>
                <small className="text-muted">250g</small>
              </span>
                                    </div>
                                    <div className="col-2 col-md-2 text-center text-muted">
                                        <span>1</span>
                                    </div>
                                    <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">
                                            $20.00
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item px-4 py-3">
                                <div className="d-flex align-items-center justify-content-between   mb-2">
                                    <div>Item Subtotal</div>
                                    <div className="fw-bold">$70.00</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between  ">
                                    <div>
                                        Service Fee{" "}
                                        <i
                                            className="feather-icon icon-info text-muted"
                                            data-bs-toggle="tooltip"
                                            title="Default tooltip"
                                        />
                                    </div>
                                    <div className="fw-bold">$3.00</div>
                                </div>
                            </li>
                            {/* list group item */}
                            <li className="list-group-item px-4 py-3">
                                <div className="d-flex align-items-center justify-content-between fw-bold">
                                    <div>Subtotal</div>
                                    <div>$73.00</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductCheckoutOrderDetail;